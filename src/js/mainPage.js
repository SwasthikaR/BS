import '../css/mainPage.css';

import React, {useState} from 'react';

import logo from "../image/tybwhitelogo.png";
import logoblack from "../image/tyblogoblack.jpeg"
import eSign from "../image/eSign.jpeg"
import esign1 from "../image/georgeEsign.jpeg"

const data = [
  {
    customer: "Mango hills",
    address: "Yercaud",
    products: [
      { name: "Filter Coffee", price: 230 },
      { name: "Instant Coffee", price: 250 },
      { name: "Pepper", price: 240},
      { name: "Honey", price: 430},
      { name: "Small Combo", price: 650},
      { name: "Big Combo", price: 1200}
    ]
  },
  {
    customer: "Bison woods",
    address: "Yercaud",
    products: [
      { name: "Filter Coffee", price: 220 },
      { name: "Instant Coffee", price: 240 },
      { name: "Pepper", price: 230},
      { name: "Honey", price: 400}
    ]
  },
  {
    customer: "Nirmalayam",
    address: "Banglore",
    products: [
      { name: "Filter Coffee (pure)", price: 225 },
      { name: "Filter Coffee (80:20)", price: 210 },
      { name: "Filter Coffee (90:10)", price: 225 },
      { name: "Instant Coffee", price: 240 }
    ]
  },
  {
    customer: "Grand Palace",
    address: "Yercaud",
    products: [
      { name: "Honey", price: 400},
      { name: "Small combo", price: 350 },
      { name: "Medium combo", price: 650 },
      { name: "Big combo", price: 1200 }
    ]
  },
  {
    customer: "Lake Cafe",
    address: "Yercaud",
    products: [
      { name: "Filter coffee", price: 880},
      { name: "Instant coffee", price: 1700},
      { name: "Black pepper", price: 240},
      { name: "Roasted bean", price: 1000 }
    ]
  },
  {
    customer: "Kolaahalam",
    address: "Yercaud",
    products: [
      { name: "Filter coffee", price: 230},
      { name: "Instant coffee", price: 250},
      { name: "Pepper", price: 240},
      { name: "Honey", price: 430 },
      { name: "Small combo", price: 625 }
    ]
  },
  {
    customer: "DNC Shevaroys",
    address: "Yercaud",
    products: [
      { name: "Filter coffee", price: 230},
      { name: "Instant coffee", price: 250},
      { name: "Pepper", price: 240},
      { name: "Honey", price: 450 },
      { name: "Small combo", price: 650 },
      { name: "Big combo", price: 1200 }
    ]
  },
  {
    customer: "GRT",
    address: "Yercaud",
    products: [
      { name: "Instant coffee", price: 250},
      { name: "Honey", price: 450 },
      { name: "Small combo", price: 650 },
      { name: "Big combo", price: 1200 }
    ]
  },
  {
    customer: "Bhavani Singh",
    address: "Yercaud",
    products: [
      { name: "Instant coffee", price: 235},
    ]
  },
  {
    customer: "Customer",
    address: "",
    products: [
      { name: "Filter coffee", price: 230},
      { name: "Instant coffee", price: 250},
      { name: "Pepper", price: 240},
      { name: "Honey", price: 450 },
      { name: "Small combo", price: 650 },
      { name: "Big combo", price: 1200 }
    ]
  }
];



function MainPage(){

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();

    const [customer, setCustomer] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);

    const selectedCustomer = data.find((c) => c.customer === customer);

    const address = selectedCustomer ? selectedCustomer.address: "";

    const products = selectedCustomer ? selectedCustomer.products : [];

    const selectedProduct = products.find((p) => p.name === product);

    const price = selectedProduct ? selectedProduct.price : 0;
    const totalPrice = price*quantity

    // Add item to cart
    const handleAdd = () => {
        if (!customer || !product || quantity <= 0) return;

        const newItem = {
        id: Date.now(),
        customer,
        product,
        quantity,
        price,
        total: totalPrice
        };

        setCart([...cart, newItem]);

        // Reset inputs
        setProduct("");
        setQuantity(1);
    };

    // Delete item
    const handleDelete = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Final total
    const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

    // amount to word converion

    function numberToWords(num) {
        const ones = [
            "", "One", "Two", "Three", "Four", "Five",
            "Six", "Seven", "Eight", "Nine", "Ten",
            "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
            "Sixteen", "Seventeen", "Eighteen", "Nineteen"
        ];

        const tens = [
            "", "", "Twenty", "Thirty", "Forty",
            "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
        ];

        function convert(n) {
            if (n < 20) return ones[n];
            if (n < 100)
            return tens[Math.floor(n / 10)] + " " + ones[n % 10];
            if (n < 1000)
            return (
                ones[Math.floor(n / 100)] +
                " Hundred " +
                convert(n % 100)
            );
            if (n < 100000)
            return (
                convert(Math.floor(n / 1000)) +
                " Thousand " +
                convert(n % 1000)
            );
            if (n < 10000000)
            return (
                convert(Math.floor(n / 100000)) +
                " Lakh " +
                convert(n % 100000)
            );
            return (
            convert(Math.floor(n / 10000000)) +
            " Crore " +
            convert(n % 10000000)
            );
        }

        return convert(num) + " Only";
    }

    return(
        <div className='maindiv'>
            <div className="header">
                <img src={logo} alt='logo'></img><br/>
                <span style={{color:"white", paddingLeft:"20px"}}>The Yercaud Bean</span>
            </div>
            <div className='mainbody'>
                <h2>Credit Bill</h2>
                <div className='inputDetails'>
                    {/* Customer dropdown */}
                    <select style={{width:"300px", border:"2px solid black", borderRadius:"5px", paddingTop:"10px", paddingBottom:"10px", paddingLeft:"5px"}} value={customer} onChange={(e)=>{setCustomer(e.target.value); setProduct("");}}>
                        <option value="">Select customer</option>
                        {data.map((c) => (
                            <option key={c.customer} value={c.customer}>
                                {c.customer}
                            </option>
                        ))}
                    </select>

                    {/* Product dropdown */}
                    <select style={{width:"300px", border:"2px solid black", borderRadius:"5px", paddingTop:"10px", paddingBottom:"10px", paddingLeft:"5px"}} value={product} onChange={(e)=>setProduct(e.target.value)} disabled={!customer}>
                        <option value="">Select product</option>
                        {products.map((p) => (
                            <option key={p.name} value={p.name}>
                                {p.name}
                            </option>
                        ))}
                    </select>

                    {/* Quantity selection */}
                    <input style={{width:"290px", border:"2px solid black", borderRadius:"5px", paddingTop:"10px", paddingBottom:"10px", paddingLeft:"5px"}} type='number' value={quantity} min='1' onChange={(e) => setQuantity(Number(e.target.value))}/>

                    {/* Price */}
                    <input style={{width:"290px", border:"2px solid black", borderRadius:"5px", paddingTop:"10px", paddingBottom:"10px", paddingLeft:"5px"}} type='text' value={totalPrice ? `${totalPrice}`: ""} readOnly placeholder='Total price'/>

                    {/* Add Button */}
                    <button onClick={handleAdd}>Add</button>
                </div>

            {/* Cart Display */}
            <h3 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize:""}}>Items purchased</h3>
            {cart.length === 0 ? (
                <p style={{color:"grey", fontFamily:"monospace", fontSize:"15px"}}>No items added</p>
            ) : (
                <table className='itemDisplayTable'>
                <thead>
                    <tr>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                    <tr key={item.id}>
                        <td>{item.customer}</td>
                        <td>{item.product}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.price}</td>
                        <td>₹{item.total}</td>
                        <td>
                        <button onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}

            {/* Grand Total */}
            <h2>Total: ₹{grandTotal}</h2>

            <button onClick={() => window.print()} style={{position:"relative", zIndex:"10000"}}>Print</button>

            {/* Formatting to print bill */}
            <div className='printBill'>
                <div className='billHeader'>
                    Credit Bill
                </div>
                <div className='ownerDetails'>
                    <img src={logoblack} style={{width: "50px"}}/><br/>
                    <span style={{fontSize:"15px"}}>The Yercaud Bean</span><br/>
                    <span>Lady's seat Rd,</span><br/>
                    <span>Yercaud.</span><br/>
                    9994797824<br/>
                    8489333469
                </div>
                <div className='customerDetails'>
                    <div className='toAddr'>
                        <span style={{fontWeight:"bold"}}>BILLING TO:</span> <br/>
                        {customer},<br/>
                        {address}.
                    </div>
                    <div className='toDate'>
                        <span style={{fontWeight:"bold"}}>BILLING DATE:</span><br/>
                        {date}
                    </div>
                </div>
                <table className='itemTable'>
                    <tr className='itemDisplayHeader'>   
                            <td style={{width:"50px"}}>S No.</td>
                            <td>Description</td>
                            <td style={{width:"90px"}}>Quantity</td>
                            <td style={{width:"90px"}}>Price</td>
                            <td style={{width:"90px"}}>Total Price</td>
                    </tr>
                    {cart.map((item, index)  => (
                    <tr key={item.id} className='itemDisplay'>
                        <td style={{textAlign:"center"}}>{index + 1}</td>
                        <td style={{paddingLeft:"5px"}}>{item.product}</td>
                        <td style={{textAlign:"center"}}>{item.quantity}</td>
                        <td style={{textAlign:"center"}}>₹{item.price}</td>
                        <td style={{textAlign:"center"}}>₹{item.total}</td>
                    </tr>
                    ))}
                </table>
                <table className='amtTable'>
                    <tr>
                        <td style={{paddingLeft:"5px"}}><span style={{fontWeight:"bold"}}>Amount in words:</span> {numberToWords(grandTotal)}</td>
                        <td style={{width:"90px", textAlign:"center", borderRight:"1px white solid", fontWeight:"bold"}}>Grand Total</td>
                        <td style={{width:"90px", textAlign:"center"}}>{grandTotal}</td>
                    </tr>
                </table>
                <div className='footer'>
                    <div className='terms'>
                    <span style={{fontWeight:"bold"}}>Terms & Condition<sup>*</sup></span><br/>
                    Payment must be paid within 15 days from the issue of bill.
                    </div>
                    <div className='signature'>
                        <img src={esign1} style={{width:"70px", marginLeft:"350px"}}/>
                        Signature
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default MainPage;
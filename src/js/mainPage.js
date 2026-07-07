import '../css/mainPage.css';

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import logo from "../image/tybwhitelogo.png";
import logoblack from "../image/tyblogoblack.jpeg"
import eSign from "../image/eSign.jpeg"
import esign1 from "../image/georgeEsign.jpeg"

import DashboardIcon from "@mui/icons-material/Dashboard";

const units = ["kg", "gms", "pcs"]

const productForCustomers = [ "Filter Coffee", "Instant Coffee", "Pepper", "Honey", "Small combo", "Medium combo", "Big combo" ]

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
    customer: "Kolaahalam Kodaikanal",
    address: "Kodaikanal",
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
      { name: "Filter coffee", price: 230 },
      { name: "Instant coffee", price: 250},
      { name: "Pepper", price: 240},
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
    products: [
      { name: "Filter coffee"},
      { name: "Instant coffee"},
      { name: "Pepper"},
      { name: "Honey"},
      { name: "Small combo"},
      { name: "Big combo"}
    ]
  }
];

const msme = process.env.REACT_APP_MSME;

function MainPage(){

    // for resorts
    const [customer, setCustomer] = useState("");
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [billNo, setBillNo] = useState(1);
    const [isManual, setIsManual] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [balance, setBalance] = useState()
    const [custPrice, setCustPrice] = useState();
    const [unit, setUnit] = useState("");

    // only for customers
    const [cust, setCust] = useState("");
    const [addr, setAddr] = useState("");
    const [custProduct, setCustProduct] = useState("");
    const [custQuanity, setCustQuantity] = useState(1);
    const [custunit, setCustUnit] = useState("");
    const [customerPrice, setCustomerPrice] = useState();
    const [customerCart, setCustomerCart] = useState([]);
    

    const selectedCustomer = data.find((c) => c.customer === customer);

    const address = selectedCustomer ? selectedCustomer.address: "";

    const products = selectedCustomer ? selectedCustomer.products : [];

    const selectedProduct = products.find((p) => p.name === product);

    const price =
    customer !== "Customer"
        ? (selectedProduct?.price || 0)
        : custPrice;
    const totalPrice = price*quantity
    const custTotalPrice = customerPrice*custQuanity

    const handleAddCustomer = () => {
        if (!cust || !custProduct || custQuanity <= 0) return;
        const cartItem = {
        id: Date.now(),
        cust,
        addr,
        custProduct,
        custQuanity,
        custunit,
        customerPrice,
        custtotal: custTotalPrice
        };

        setCustomerCart([...customerCart, cartItem]);

        // Reset inputs
        setCustProduct("");
        setCustQuantity(1);


    };


    // Add item to cart
    const handleAdd = () => {
        if (!customer || !product || quantity <= 0) return;

        const newItem = {
        id: Date.now(),
        customer,
        product,
        quantity,
        unit,
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
    let grandTotal;
    let balSNo;
    if(balance){
        grandTotal = cart.reduce((sum, item) => sum + item.total, 0);
        grandTotal+=balance;
        balSNo = cart.length+1;
    }
    else if (cart.length != 0) {
        grandTotal = cart.reduce((sum, item) => sum + item.total, 0);
    } else {
        grandTotal = customerCart.reduce((sum, item) => sum + item.custtotal, 0);
    }

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

    const handlePrint = () => {
        window.print();
        // setBillNo(prev => prev + 1);
    };

    const currentDate = new Date();
    const date = currentDate.toISOString().split("T")[0];
    
    useEffect(() => {
        if (!isManual){
            setSelectedDate(date);
        }
    }, [isManual])


    const formatDate = (dateStr) => {
        if(!dateStr) return "";
        const[year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
    }

    const navigate = useNavigate();

    return(
        <div className='maindiv'>
            <div className="header">
                <div>
                    <img src={logo} alt='logo'></img><br/>
                    <span style={{color:"white", paddingLeft:"20px"}}>The Yercaud Bean</span>
                </div>
                <div>
                    <button onClick={() => navigate("/dashboard")}>
                        <DashboardIcon />
                    </button>
                </div>
            </div>
            <div className='mainbody'>
                <h2>Credit Bill</h2>
                <div className='selectDateandBillNo'>
                    <div>
                        <input type='date' style={{marginRight:"10px", paddingTop:"3px", paddingBottom:"3px"}} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} disabled={!isManual}></input>
                        <button onClick={()=>setIsManual(!isManual)}>
                            {isManual ? "Today" : "Custom"}
                        </button>
                    </div>
                    <div>
                        <input type='number' placeholder='Bill No' onChange={(e) => setBillNo(Number(e.target.value))} style={{marginRight:"10px",marginBottom:"10px", paddingTop:"3px", paddingBottom:"3px", border:"2px solid black", borderRadius:'5px', paddingLeft:"5px"}}></input>
                    </div>
                </div>
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

                    <select value={unit} onChange={(e)=>setUnit(e.target.value)}>
                        <option value="">Select Unit</option>
                        {units.map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>

                    {/* Price x quantity */}
                    <input style={{width:"290px", border:"2px solid black", borderRadius:"5px", paddingTop:"10px", paddingBottom:"10px", paddingLeft:"5px"}} type='text' value={totalPrice ? `${totalPrice}`: ""} readOnly placeholder='Total price'/>

                    {/* Add Button */}
                    <button onClick={handleAdd}>Add</button>
                </div>
                <input onChange={(e) => setBalance(Number(e.target.value))} style={{width:"290px", border:"2px solid black", borderRadius:"5px", paddingTop:"10px", paddingBottom:"10px", paddingLeft:"5px"}} type='text' placeholder='Balance'/>

        {/* for customers only */}
        <h2>Only for customers</h2>

            <div className='inputDetailsForCustomers'>
                <input className='customerName' type='text' placeholder='Enter Name' value={cust} onChange={(e) => setCust(e.target.value)}></input>
                <input className='customerAddr' type='text' placeholder='Enter Address' value={addr} onChange={(e) => setAddr(e.target.value)}></input>
                <select value={custProduct} onChange={(e)=>setCustProduct(e.target.value)}>
                    <option value="">Select product</option>
                    {productForCustomers.map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </select>
                <input className='customerQuantity' type='number' placeholder='Enter Quantity' value={custQuanity} min='1' onChange={(e) => setCustQuantity(Number(e.target.value))}></input>
                <select value={custunit} onChange={(e)=>setCustUnit(e.target.value)}>
                    <option value="">Select Unit</option>
                    {units.map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </select>

                <input placeholder='Enter Price' type="text" value={customerPrice} onChange={(e) => setCustomerPrice(e.target.value)}></input>

                {/* Price x quantity */}
                <input type='text' value={custTotalPrice ? `${custTotalPrice}`: ""} readOnly placeholder='Total price'/><br/>

                {/* Add Button */}
                <button onClick={handleAddCustomer}>Add</button>
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
                            <td>{item.quantity+item.unit}</td>
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

            {customerCart.length === 0 ? (
                <p style={{color:"grey", fontFamily:"monospace", fontSize:"15px"}}>No customer items added</p>
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
                    {customerCart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.cust}</td>
                            <td>{item.custProduct}</td>
                            <td>{item.custQuanity+item.custunit}</td>
                            <td>₹{item.customerPrice}</td>
                            <td>₹{item.custtotal}</td>
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

            <button onClick={handlePrint} style={{position:"relative", zIndex:"10000"}}>Print</button>

            {/* Formatting to print bill */}
            <div className='printBill'>
                <div className='billHeader'>
                    Credit Bill
                </div>
                <div className='ownerDetails'>
                    <div className='ownerDetailsLeft'>
                        <span>{msme}</span><br/>
                    </div>
                    <div className='ownerDetailsRight'>
                        <img src={logoblack} style={{width: "50px"}}/><br/>
                        <span style={{fontSize:"15px"}}>The Yercaud Bean</span><br/>
                        <span>Lady's seat Rd,</span><br/>
                        <span>Yercaud.</span><br/>
                        9994797824<br/>
                        8489333469
                    </div>
                </div>
                <div className='customerDetails'>
                    <div className='toAddr'>
                        <span style={{fontWeight:"bold"}}>BILL NO: </span>{billNo}<br/>
                        <span style={{fontWeight:"bold"}}>BILLING TO:</span> <br/>
                        {cust ? cust : customer}
                        {(cust ? cust : customer) !== "Customer" ? "," : "."}
                        <br />
                        {addr ? addr : address}.
                    </div>
                    <div className='toDate'>
                        <span style={{fontWeight:"bold"}}>BILLING DATE:</span><br/>
                        {formatDate(selectedDate)}
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
                        <td style={{textAlign:"center"}}>{item.quantity+item.unit}</td>
                        <td style={{textAlign:"center"}}>₹{item.price}</td>
                        <td style={{textAlign:"center"}}>₹{item.total}</td>
                    </tr>
                    ))}
                    {customerCart.map((item, index)  => (
                    <tr key={item.id} className='itemDisplay'>
                        <td style={{textAlign:"center"}}>{index + 1}</td>
                        <td style={{paddingLeft:"5px"}}>{item.custProduct}</td>
                        <td style={{textAlign:"center"}}>{item.custQuanity+item.custunit}</td>
                        <td style={{textAlign:"center"}}>₹{item.customerPrice}</td>
                        <td style={{textAlign:"center"}}>₹{item.custtotal}</td>
                    </tr>
                    ))}
                    {balance > 0 &&(
                        <tr>
                            <td style={{textAlign:"center"}}>{balSNo}</td>
                            <td style={{paddingLeft:"5px"}}>Balance</td>
                            <td style={{textAlign:"center"}} colSpan={2}>₹{balance}</td>
                            <td style={{textAlign:"center"}}>₹{balance}</td>
                        </tr>
                    )}
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
                        <img src={esign1} style={{width:"70px", marginLeft:"350px"}}/><br/>
                        Signature
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default MainPage;

import { useEffect, useState } from "react";
import "../css/courierAddr.css"


const indianStates = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
    "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
    "Uttarakhand","West Bengal"];

function CourierAddr() {

    const [name, setName] = useState();
    const [addr, setAddr] = useState();
    const [state, setState] = useState();
    const [ph, setPh] = useState();
    const [pincode, setPincode] = useState();

    const handleCourierAddr = () => {
        window.print();
    }

    return(
        <div>
            <h2>Courier Address</h2>
            
            <div className="inputDetails">
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input placeholder="Address" value={addr} onChange={(e) => setAddr(e.target.value)} ></input>
                <select value={state} onChange={(e)=>{setState(e.target.value)}}>
                    <option value="">Select State</option>
                    {indianStates.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>                
                <input placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} ></input>
                <input placeholder="Phone number" value={ph} onChange={(e) => setPh(e.target.value)} ></input>
            </div>
            
    
            <button onClick={handleCourierAddr} style={{position:"relative", zIndex:"10000", marginLeft:"10px"}}>Print</button>

            {/* Formatting to print addr */}
            <div className='addrPrint'>
                <div className='fromAddr'>
                    From<br></br>
                    The Yercaud Bean,<br></br>
                    Lady's seat Rd,<br></br>
                    Yercaud.<br></br>
                    Ph. no: 9994797824
                </div>
                <div className='toAddr'>
                    To<br></br>
                    {name}<br></br>
                    {addr?.replace(/,/g, ",\n")},<br></br>
                    {state},<br></br>
                    {pincode}.<br></br>
                    Ph. no: {ph}
                    
                </div>
            </div>
        </div>
    )
}

export default CourierAddr;
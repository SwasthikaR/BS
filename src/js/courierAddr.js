import { useEffect, useState } from "react";
import "../css/courierAddr.css"


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
                <input placeholder="State" value={state} onChange={(e) => setState(e.target.value)} ></input>
                <input placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} ></input>
                <input placeholder="Phone number" value={ph} onChange={(e) => setPh(e.target.value)} ></input>
            </div>
            
    
            <button onClick={handleCourierAddr} style={{position:"relative", zIndex:"10000", marginLeft:"10px"}}>Print</button>

            {/* Formatting to print addr */}
            <div className='addrPrint'>
                <div className='toAddr'>
                    To<br></br>
                    {name}<br></br>
                    {addr},<br></br>
                    {state},<br></br>
                    {pincode}.<br></br>
                    Ph. no: {ph}
                </div>
                <div className='fromAddr'>
                    From<br></br>
                    The Yercaud Bean,<br></br>
                    Lady's seat Rd,<br></br>
                    Yercaud.<br></br>
                    Ph. no: 9994797824
                </div>
            </div>
        </div>
    )
}

export default CourierAddr;
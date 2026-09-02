import '../css/dashboard.css'
import logo from "../image/tybwhitelogo.png";

import { useNavigate } from 'react-router-dom';
import {DatePicker} from "antd";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from 'react';


const resorts = ["Mango Hills", "DNC", "Nirmalayam"]

const productsSold = [
    {
        name: "Filter coffee",
        quantitySold: 50
    },
    {
        name: "Instant coffee",
        quantitySold: 50
    },
    {
        name: "Honey",
        quantitySold: 50
    },
    {
        name: "Pepper",
        quantitySold: 50
    },
    {
        name: "Small Combo",
        quantitySold: 50
    },
    {
        name: "Medium combo",
        quantitySold: 50
    },
    {
        name: "Big combo",
        quantitySold: 50
    },
]

function Dashboard(){

    const [resort, setResort] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("")

    const navigate = useNavigate();

    const handleMMYYChange = (e) => {
        if(e){
            setMonth(e.month()+1)
            setYear(e.year());
        }
        else{
            setMonth("");
            setYear("");
        }
    };

    return(
        <div className='dashboardMain'>

            <div className="header">
                <div className='headimg'>
                    <img src={logo} alt='logo'></img><br/>
                    <span style={{color:"white", paddingLeft:"20px"}}>The Yercaud Bean</span>
                </div>
                <div>
                    <button onClick={() => navigate("/")}>
                        <HomeIcon/>
                    </button>
                </div>
            </div>

            <h2>Dashboard</h2>

            <div className='dashboardFilter'>
                <select value={resort} onChange={(e)=>setResort(e.target.value)}>
                    <option value="" disabled hidden>Select Resort</option>
                    {resorts.map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
                <DatePicker picker = "month" onChange={handleMMYYChange}/>
            </div>

            {
                resort && month && year &&(
                    <div className='dasboardDisplay'>
                        <h2>{resort}</h2>
                        <div className='productSalesDisplay'>
                            {productsSold.map((prod) => (
                                <div className='productItem'>
                                    <p>{prod.name}</p>
                                    <p>{prod.quantitySold}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
            

        </div>
    );
    
}

export default Dashboard;
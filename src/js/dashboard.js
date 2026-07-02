import '../css/mainPage.css';
import '../css/dashboard.css'
import logo from "../image/tybwhitelogo.png";

import { useNavigate } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";



function Dashboard(){

    const navigate = useNavigate();
    return(
        <div>
            <div className="header">
                <div>
                    <img src={logo} alt='logo'></img><br/>
                    <span style={{color:"white", paddingLeft:"20px"}}>The Yercaud Bean</span>
                </div>
                <div>
                    <button onClick={() => navigate("/")}>
                        <HomeIcon />
                    </button>
                </div>
            </div>
            <div className="dashboardContent">
                <h1>Dashboard</h1>
                <div className='productSales'>
                    <div className='product'>
                        <p style={{fontSize:"30px"}}>Instant coffee</p>
                        <p style={{fontSize:"50px", fontWeight:"bold"}}>50</p>
                    </div>
                    <div className='product'>
                        <p style={{fontSize:"30px"}}>Filter coffee</p>
                        <p style={{fontSize:"50px", fontWeight:"bold"}}>20</p>
                    </div>
                    <div className='product'>
                        <p style={{fontSize:"30px"}}>Honey</p>
                        <p style={{fontSize:"50px", fontWeight:"bold"}}>30</p>
                    </div>
                    <div className='product'>
                        <p style={{fontSize:"30px"}}>Black pepper</p>
                        <p style={{fontSize:"50px", fontWeight:"bold"}}>10</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
    
}

export default Dashboard;
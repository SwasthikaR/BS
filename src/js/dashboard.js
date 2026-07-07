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
                <h1>DASHBOARD</h1>
                <h2>Individuals</h2>
                <div className='productSales'>
                    <div className='product'>
                        <p>Instant coffee</p>
                        <p>50</p>
                    </div>
                    <div className='product'>
                        <p>Filter coffee</p>
                        <p>20</p>
                    </div>
                    <div className='product'>
                        <p>Honey</p>
                        <p>30</p>
                    </div>
                    <div className='product'>
                        <p>Black pepper</p>
                        <p>10</p>
                    </div>
                </div>
                <h2>Combos</h2>
                <div className='comboProducts'>
                    <div className='product'>
                        <p>Small Combo</p>
                        <p>10</p>
                    </div>
                    <div className='product'>
                        <p>Medium Combo</p>
                        <p>10</p>
                    </div>
                    <div className='product'>
                        <p>Big Combo</p>
                        <p>10</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
    
}

export default Dashboard;
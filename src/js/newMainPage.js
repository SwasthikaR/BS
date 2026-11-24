import "../css/newMainPage.css"

import Logo from "../image/tyb logo.png"

function NewMainPage(){
    return(
        <div>
            <div className="headerContainer">
                <div className="headerTitle">
                    <img src={Logo}></img>
                    <span>The Yercaud Bean</span>
                </div>
                <div className="headerNav">
                    <p>Bill</p>
                    <p>Dashboard</p>
                    <p>Print</p>
                </div>
            </div>
            <div className="bodyContainer"></div>
        </div>
    )
}

export default NewMainPage;
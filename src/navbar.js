import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
       <nav id="navbarParent">
         <img width="30" height="30" style={{marginLeft:'5px'}} src="https://img.icons8.com/office/40/shop.png" alt="shop"/>
        <div id="list">
            <Link to="/" className="listitem">Home</Link>
            <Link to="/shirt" className="listitem">Shirt</Link>
            <Link to="/shoes" className="listitem">Shoes</Link>
            <Link to="/watches" className="listitem">Watches</Link>
        </div>
        <input style={{width:'350px'}} type="search" placeholder="Search Here" ></input>
        <img width="24" height="24" style={{marginLeft:'20px'}} src="https://img.icons8.com/material-outlined/24/EBEBEB/shopping-cart--v1.png" alt="shopping-cart--v1"/>
        </nav>
        </div>
    )
}
export default Navbar;
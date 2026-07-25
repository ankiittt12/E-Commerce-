import "./footer.css";

function Footer(){
    return(
        <div id="footer">
            <div id="about">
                <div>
                    <h1>ANKIT SINGH</h1>
                    <p>&copy; 2026 Your Company. All rights reserved.</p>

                </div>

                <ol>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>
                <p id="social"><strong>Get to know us: </strong>
               <div>
                 <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/EBEBEB/linkedin--v1.png" alt="linkedin--v1"/>
                <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/EBEBEB/instagram-new--v1.png" alt="instagram-new--v1"/>
                
               </div>
                </p>
            </div>
        </div>
    )
}
export default Footer;
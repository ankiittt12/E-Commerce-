import React from "react";
import "./content.css";

function Content(){
    return(
       <div>
        <h1 className="heading">For You</h1>
         <div className="Content">
            <div className="card">
                <img className="divimg" src="/images/ecommerce.jpg" alt="loading"/> 
                 <h4>Shirt</h4>
                <p> <del>999</del> <strong>699</strong></p>
                <p>40% off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/shirt1.jpg" alt="loading"/>  
                 <h4>Shirt</h4>
                <p> <del>599</del> <strong>396</strong></p>
                <p>34% off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/shirt2.jpg" alt="loading"/>  
                 <h4>Shirt</h4>
                <p>  <strong>499</strong></p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/shirt3.jpg" alt="loading"/>  
                 <h4>Shirt</h4>
                <p> <del>1200</del> <strong>480</strong></p>
                <p>60% off</p>
                <div className="btn">Buy Now</div>

            </div>

        </div>
         <div className="Content">
            <div className="card">
                <img className="divimg" src="/images/shoes1.jpg" alt="loading"/> 
                 <h4>Shoes</h4>
                <p> <del>2000</del> <strong>1000</strong></p>
                <p>50% off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/shoes2.jpg" alt="loading"/> 
                 <h4>Shoes</h4>
                <p> <del>1999</del> <strong>1199</strong></p>
                <p>40% off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/shoes3.jpg" alt="loading"/> 
                 <h4>Shoes</h4>
                <p> <del>999</del> <strong>800</strong></p>
                <p>20% off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/shoes4.jpg" alt="loading"/> 
                 <h4>Shoes</h4>
                <p> <del>999</del> <strong>699</strong></p>
                <p>40% off</p>
                <div className="btn">Buy Now</div>
            </div>

        </div>

         <div className="Content">
            <div className="card">
                <img className="divimg" src="/images/watch4.jpg" alt="loading"/>  
                 <h4>Watch</h4>
                <p> <del>4000</del> <strong>3500</strong></p>
                <p>500 off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/watch3.jpg" alt="loading"/> 
                 <h4>Watch</h4>
                <p> <del>1999</del> <strong>1699</strong></p>
                <p>300 off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/watch2.jpg" alt="loading"/> 
                 <h4>Watch</h4>
                <p> <del>999</del> <strong>899</strong></p>
                <p>100 off</p>
                <div className="btn">Buy Now</div>
            </div>
            <div className="card">
                <img className="divimg" src="/images/watch1.jpg" alt="loading"/> 
                 <h4>Watch</h4>
                <p> <del>3999</del> <strong>2999</strong></p>
                <p>1000 off</p>
                <div className="btn">Buy Now</div>   

            </div>

        </div>
        
       </div>

    )
}

export default Content;
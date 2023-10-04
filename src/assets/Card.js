import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card ({tittle,desc,getImage}){
return (
    <>
    <div className="dishes-card">
     <img src={getImage} alt="dish" className="card-dish-image" />
      <div className="txt-container">
       <div className="tittle-price">
        <h3>{tittle}</h3>
        <h5>$12.99</h5>
       </div>
       <p>{desc}</p>
       <div>
       <h4>Delivery</h4>
       </div>
     </div>
    </div>
    </>
)
}

export default Card
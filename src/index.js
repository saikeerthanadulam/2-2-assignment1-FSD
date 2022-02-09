import React from "react";
import ReactDOM from "react-dom";
import image from "./lizard.jpg";
import "./styles.css";

function Welcome() {
    
  return (
    <div className="first">
      <div className="second">
        <img src={image} />
        <div className="third">
          <h2>LIZARD</h2>
          <p>
            Lizard are a widespread group of squamate <br />
            reptiles, with over 6000 species, ranging across <br />
            all continents except Antartica
          </p>
          <a href="">SHARE</a> 
          
          <a href = "" >LEARN</a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
<Welcome />, 
document.getElementById("root"));
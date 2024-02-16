import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Aboutme.css"

function Aboutme() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="aboutme">
      <h1>Hello there!</h1>
      <h2>My name is Natalia</h2>
      <img src="./me.JPG" alt="happy-face" className="me"/>
      <h4>This is me doing what I love!!!</h4>
      <br />
      <article>
        I developed this website while doing an Ironhack Web Developer Bootcamp. 
        </article>
    <Link to="https://www.ironhack.com" target="_blank"><img src="./ironhack-1 (1).svg" alt="ironhack-logo" className="ironhack-logo"/></Link>
      <p>
        Here's a <Link to="https://github.com/pikkukurkku" target="_blank">link</Link> to my
        GitHub repository
      </p>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
}

export default Aboutme;

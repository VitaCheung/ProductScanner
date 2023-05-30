// import Question from "../components/Question";
// import ShowReviews from "../components/ShowReviews";
import {NavLink} from "react-router-dom";


export default function Home() {
  return(
    <main id="main">
      {/* <h1>Homepage</h1> */}
      <div id="home">
        <h2>Search a product to see its reviews!</h2>
        
        <nav id="home-nav" aria-label="Main navigation">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/scanner">Barcode Scan</NavLink>
            </li>
            <li>
              <NavLink to="/about">Product Search</NavLink>
            </li>
          </ul>
        </nav>
        
        
      </div>
    </main>


  );
}


// {"response_code":0,
// "results":[{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"The color orange is named after the fruit.","correct_answer":"True","incorrect_answers":["False"]}]
// }
import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <hr />
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            <span className="small-text">From </span>
            <span className="animated-text">Real Estate</span>
            <br />
            <span className="small-text">To </span>
            <span className="animated-text">Dream Place</span>
          </h1>
          <p>
          Our real estate advisors understand the true value of your property and will find the right buyer for you. With customized marketing strategies and access to our global customer network, we ensure your property gets the attention it deserves.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background" />
      </div>

    </div>
  );
}

export default HomePage;

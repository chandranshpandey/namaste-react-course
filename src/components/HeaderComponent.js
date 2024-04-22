
import Title from "./Title";

const HeaderComponent = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li>Pandey</li>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;
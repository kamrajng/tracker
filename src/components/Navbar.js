import react from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <p className="navp">Main</p>
      </Link>
      <Link to="/calculator">
        <p className="navp">Calculator</p>
      </Link>
      <Link to="/currency">
        <p className="navp">Currency Converter</p>
      </Link>
      <Link to="/todo">
        <p className="navp">Todo </p>
      </Link>
      <Link to="/expense">
        <p className="navp">Expense Tracker</p>
      </Link>
    </div>
  );
};

export default Navbar;

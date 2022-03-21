import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
     style={{
                display: "flex",
                justifyContent:"center"
        }}>
      <div className="navbar"
       style={{
                    width: "50%",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-evenly"
            }}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button>home</button>
        <button>Mystery</button>
        <button>Technology</button>
        <button>Mythology</button>
        <button>history</button>
      </div>
    </nav>
  );
};

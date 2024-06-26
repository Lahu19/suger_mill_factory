
function Navbar() {
 
  return (
    <div className="Navbar">
      <nav>
        <a className="active" href="/">
         Logo
        </a>
        <div>
          <ul className="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
           
            <li>
              <a href="/product">Products</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
           <a href="/login">Login</a>
            </li>
            <li>
              <a href="/pagenotfound"></a>
            </li>

          
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

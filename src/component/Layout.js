import { Outlet, Link } from "react-router-dom";
const Layout = () =>{
  return(
    <>

<nav className="container">

  <ul className="Navbar-heading d-md-flex align-items-center">
  <li className="logo-nav">
     <img className="img-fluid logo" src="images/logo.png" alt=""/>
  </li>
    <li className=" px-sm-5 home">
      <Link to="/">Home</Link>
    </li>
    <li className="px-sm-5">
      <Link to="/about">About</Link>
    </li>
    <li className="ps-sm-5">
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>
<section>
  <div className="container">
    <Outlet/>
  </div>
</section>
    </>
  )
}

export default Layout
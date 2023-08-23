import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();


  return (
 
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to='/'>Design tasks</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/highlight'>Higlighting Cards</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/cards'>Cards</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/pageloading'>PageLoading</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/weather'>Weather</Link>
        </li>
        <li className="nav-item">
          <small className="nav-link active" aria-current="page">{isAuthenticated && user.name}</small>
        </li>
      </ul>
      <form className="d-flex" >
        {!isAuthenticated ?
        <button className="btn btn-outline-success mx-lg-2"  onClick={() => loginWithRedirect()}>Login</button>:
        <button className="btn btn-outline-success mx-lg-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
        }
      </form>
    </div>
  </div>
</nav>


  )
}

export default Navbar
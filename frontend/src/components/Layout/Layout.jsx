import { Outlet, Link } from "react-router-dom";
import './Layout.css'

export const Layout = ({ person }) => {
  return (
    <div className="layout">
      <header className="header">
        <h2>Musa</h2>
        <h3>{person.email}</h3>
        <nav className="nav">
          <Link to='/'>player</Link>
          <Link to='/upload'>Upload</Link>
          <Link to='/signin'>SignIn</Link>
          <Link to='/signup'>SignUp</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
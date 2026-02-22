import { Outlet, Link } from "react-router-dom";
import './Layout.css'

export const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h2>Musa</h2>
        <nav className="nav">
          <Link to='/'>player</Link>
          <Link to='/upload'>Upload</Link>
          <Link to='/signin'>SignIn</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
export function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="/" className="brand">
          <img 
            src="/images/logo.png" 
            alt="Tobakkhuset Logo" 
            className="h-8 w-8 object-contain"
          />
          <span>Tobakkhuset</span>
        </a>
        <nav className="nav-menu">
          <a className="nav-link" href="/">
            Hjem
          </a>
          <a className="nav-link" href="/products">
            Produkter
          </a>
          <a className="nav-link" href="/contact">
            Kontakt
          </a>
          <a className="nav-link" href="/admin/login">
            Admin
          </a>
        </nav>
      </div>
    </header>
  );
}

const Header = () => (
  <header>
    <div className="clear">
      <a href="/" className="logo">
        <img src="/images/logo.png" alt="Plutoh logo" width="93" height="41" />
      </a>
      <button className="mobile-button"></button>
      <nav>
        <ul>
          <li>
            <a href="/services">what we do</a>
          </li>
          <li>
            <a href="/work">our work</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

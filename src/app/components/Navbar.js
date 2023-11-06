import styled from "styled-components";

const Container = styled.nav`
  border-bottom: 0.5px solid #e4eaf0;
`;

const Navbar = () => (
  <Container className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item has-text-weight-bold" href="/">
        ShowBox
      </a>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    {/* <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div> */}
  </Container>
);

export default Navbar;

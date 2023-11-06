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
  </Container>
);

export default Navbar;

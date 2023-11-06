import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.nav`
  border-bottom: 0.5px solid #e4eaf0;
`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-bold" href="/">
          ShowBox
        </a>
        <a
          role="button"
          className={
            isActive
              ? "navbar-burger burger mobile is-active"
              : "navbar-burger burger mobile"
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start is-hidden-desktop">
          <Link href="/" className="navbar-item">
            Home
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

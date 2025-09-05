import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const HeaderWrap = styled.header`
  position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
  background: rgba(30, 38, 54, 0.65);
  box-shadow: 0 4px 24px #0004;
  backdrop-filter: blur(16px);
  transition: background 0.3s;
`;

const Nav = styled.nav`
  max-width: 1300px; margin: 0 auto; padding: 0.7rem 2rem;
  display: flex; align-items: center; justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex; align-items: center; gap: 1rem;
  img {
    height: 48px;
    width: auto;
    border-radius: 8px;
    background: #fff;
    padding: 4px;
    box-shadow: 0 2px 12px #0003;
  }
  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #00A0E3;
    letter-spacing: 1px;
    font-family: 'Segoe UI', Arial, sans-serif;
    text-shadow: 0 2px 6px #fff7;
  }
`;

const NavLinks = styled.div`
  display: flex; gap: 2.2rem; align-items: center;
`;

const NavLink = styled(Link)`
  position: relative; font-weight: 500; font-size: 1.15rem;
  color: ${p => p.$active ? "#00A0E3" : "#23243a"};
  padding: 0.5rem 0 0.3rem 0;
  background: none; border-radius: 0;
  text-shadow: 0 2px 6px #fff5;
  transition: color 0.2s; letter-spacing: 0.03em;
  &:after {
    content: '';
    position: absolute; left: 0; bottom: -3px; width: 100%;
    height: 3px;
    background: #00A0E3;
    opacity: ${p => p.$active ? 1 : 0};
    transform: scaleX(${p => p.$active ? 1 : 0});
    transition: all 0.3s cubic-bezier(.4,1.6,.5,1);
    border-radius: 2px;
  }
  &:hover {
    color: #00A0E3;
    &:after { opacity: 1; transform: scaleX(1); }
  }
`;

const DropdownWrap = styled.div`
  position: relative;
  &:hover .dropdown-menu,
  &:focus-within .dropdown-menu {
    display: flex;
  }
`;

const DropdownButton = styled.button`
  font-size: 1.1rem;
  font-weight: 500;
  background: none;
  border: none;
  color: #23243a;
  padding: 0.5rem 0;
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: color 0.2s;
  text-shadow: 0 2px 6px #fff5;
  &:hover { color: #00A0E3; }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 110%; left: 0;
  min-width: 270px;
  flex-direction: column;
  background: #263c62F2;
  border-radius: 10px;
  box-shadow: 0 8px 36px #0005;
  padding: 1.1rem 0;
  z-index: 50;
`;

const DropdownItem = styled(Link)`
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1.07rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #00A0E3;
    color: #fff;
    font-weight: 600;
  }
`;

export default function Header() {
  const loc = useLocation();
  return (
    <HeaderWrap>
      <Nav>
        <Logo to="/">
          <img src={logo} alt="School Logo" />
          <span>Teachers' Day</span>
        </Logo>
        <NavLinks>
          <NavLink to="/" $active={loc.pathname === "/"}>Home</NavLink>
          <NavLink to="/videos" $active={loc.pathname === "/videos"}>Videos</NavLink>
          <NavLink to="/members" $active={loc.pathname === "/members"}>Members</NavLink>
          <NavLink to="/what-teachers-mean" $active={loc.pathname === "/what-teachers-mean"}>What Teachers Mean To Us</NavLink>
          <NavLink to="/student-tribute" $active={loc.pathname === "/student-tribute"}>Student Tribute</NavLink>
          <DropdownWrap>
            <DropdownButton tabIndex={0}>Photo Gallery &#9662;</DropdownButton>
            <DropdownMenu className="dropdown-menu">
              <DropdownItem to="/photo-gallery/teachers">Teachers Gallery</DropdownItem>
              <DropdownItem to="/photo-gallery/games">Games with Teachers</DropdownItem>
              <DropdownItem to="/photo-gallery/charts">Chart Making</DropdownItem>
              <DropdownItem to="/photo-gallery/class-campus">Teachers’ Class Campus Photos</DropdownItem>
              <DropdownItem to="/photo-gallery/litreature">Student Litreature Corner</DropdownItem>
            </DropdownMenu>
          </DropdownWrap>
        </NavLinks>
      </Nav>
    </HeaderWrap>
  );
}
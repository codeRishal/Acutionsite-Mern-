import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Container as BSContainer, Navbar, Nav, Button } from 'react-bootstrap';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { CustomNavLink, CustomNavLinkList, ProfileCard } from "../../router";
import { User1 } from "../hero/Hero";
import { menulists } from "../../utils/data";
import React from 'react';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const role = "buyer";

  const handleScroll = () => setIsScrolled(window.scrollY > 0);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={isHomePage ? 
        `py-2 ${isScrolled ? "bg-dark glass" : "bg-dark"}` : 
        `bg-dark glass ${isScrolled ? "scrolled" : ""}`}
    >
      <BSContainer>
        <Navbar.Brand>
          <img
            src={isHomePage && !isScrolled ? 
              "../images/common/header-logo.png" : 
              "../images/common/header-logo2.png"
            }
            alt="LogoImg"
            height="150"
          />
        </Navbar.Brand>

        <Navbar.Toggle 
          as={Button}
          variant="dark"
          className="border-0"
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="me-auto">
            {menulists.map((list) => (
              <Nav.Item key={list.id} className="text-capitalize">
                <CustomNavLinkList 
                  href={list.path} 
                  isActive={location.pathname === list.path}
                  className={`${isScrolled || !isHomePage ? "text-dark" : "text-white"}`}
                >
                  {list.link}
                </CustomNavLinkList>
              </Nav.Item>
            ))}
          </Nav>

          <Nav className="align-items-center gap-3">
            <Nav.Link className={isScrolled || !isHomePage ? "text-secondary" : "text-secondary"}>
              <IoSearchOutline size={23} />
            </Nav.Link>
            
            {role === "buyer" && (
              <CustomNavLink 
                href="/seller/login"
                className={`${isScrolled || !isHomePage ? "text-secondary" : "text-secondary"}`}
              >
                Become a Seller
              </CustomNavLink>
            )}

            <CustomNavLink 
              href="/login"
              className={`${isScrolled || !isHomePage ? "text-secondary" : "text-secondary"}`}
            >
              Sign in
            </CustomNavLink>

            <CustomNavLink 
              href="/register"
              className={`${!isHomePage || isScrolled ? "bg-secondary" : "bg-secondary"} 
                px-4 py-2 rounded-pill text-dark shadow`}
            >
              Join
            </CustomNavLink>
          </Nav>
        </Navbar.Collapse>
      </BSContainer>
    </Navbar>
  );
};
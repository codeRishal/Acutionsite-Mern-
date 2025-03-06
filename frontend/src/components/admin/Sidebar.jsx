import { Caption, CustomNavLink, Title } from "../common/Design";
import { CiGrid41 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { User1 } from "../hero/Hero";
import { IoIosLogOut } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Nav, Image, Button } from 'react-bootstrap';
import React from 'react';

export const Sidebar = () => {
  const location = useLocation();
  const role = "admin";
  const navLinkClass = "d-flex align-items-center gap-3 mb-2 p-3 rounded-pill";

  return (
    <Nav className="d-flex flex-column justify-content-between h-100">
      <div className="text-center mb-4">
        <Image 
          src={User1} 
          alt="Profile" 
          roundedCircle 
          className="mb-3"
          style={{ width: '128px', height: '128px', objectFit: 'cover' }} 
        />
        <div>
          <Title className="text-capitalize">Sunil B.K</Title>
          <Caption>example@gmail.com</Caption>
        </div>
      </div>

      <Nav className="flex-grow-1">
        <CustomNavLink href="/dashboard" isActive={location.pathname === "/dashboard"} className={navLinkClass}>
          <CiGrid41 size={22} />
          <span>Dashboard</span>
        </CustomNavLink>

        {(role === "seller" || role === "admin") && (
          <>
            <CustomNavLink href="/product" isActive={location.pathname === "/product"} className={navLinkClass}>
              <MdOutlineCategory size={22} />
              <span>My Products</span>
            </CustomNavLink>
            <CustomNavLink href="/add" isActive={location.pathname === "/add"} className={navLinkClass}>
              <FaPlusCircle size={22} />
              <span>Create Product</span>
            </CustomNavLink>
          </>
        )}

        {role === "admin" && (
          <>
            <CustomNavLink href="/userlist" isActive={location.pathname === "/userlist"} className={navLinkClass}>
              <FiUser size={22} />
              <span>All Users</span>
            </CustomNavLink>

            <CustomNavLink href="/product/admin" isActive={location.pathname === "/product/admin"} className={navLinkClass}>
              <CgProductHunt size={22} />
              <span>All Product List</span>
            </CustomNavLink>

            <CustomNavLink href="/category" isActive={location.pathname === "/category"} className={navLinkClass}>
              <MdOutlineCategory size={22} />
              <span>Categories</span>
            </CustomNavLink>

            <CustomNavLink href="/admin/income" isActive={location.pathname === "/admin/income"} className={navLinkClass}>
              <TbCurrencyDollar size={22} />
              <span>Income</span>
            </CustomNavLink>
          </>
        )}

        <CustomNavLink href="/winning-products" isActive={location.pathname === "/winning-products"} className={navLinkClass}>
          <RiAuctionLine size={22} />
          <span>Winning Bids</span>
        </CustomNavLink>

        <CustomNavLink href="/favorites" isActive={location.pathname === "/favorites"} className={navLinkClass}>
          <IoIosHeartEmpty size={22} />
          <span>My Favorites</span>
        </CustomNavLink>

        <CustomNavLink href="/profile" isActive={location.pathname === "/profile"} className={navLinkClass}>
          <IoSettingsOutline size={22} />
          <span>Personal Profile</span>
        </CustomNavLink>

        <Button 
          variant="danger" 
          className="d-flex align-items-center gap-3 w-100 mt-4 mb-3 rounded-pill"
        >
          <IoIosLogOut size={22} />
          <span>Log Out</span>
        </Button>
      </Nav>
    </Nav>
  );
};
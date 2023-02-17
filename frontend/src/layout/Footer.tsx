import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2   items-center">
      <span className="">2023 Aufal Store | All Right reserved</span>
      <div className="inline-flex gap-2 items-center">
        <Link to={"/"}>
          <AiFillInstagram className="w-6 h-6" />
        </Link>
        <Link to={"/"}>
          <AiFillFacebook className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

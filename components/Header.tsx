import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.head}>
      <Link href='/'>
        <Image
          width={200}
          height={200}
          src={logo}
          alt='pokemon pic'
          style={{ width: "200px", cursor: "pointer" }}
        />
      </Link>
      <Link href='/'>
        <a href=''>HOME</a>
      </Link>
      <Link href='/About'>
        <a href=''>ABOUT US</a>
      </Link>
    </div>
  );
};

export default Header;

"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 72,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className="container">
          <header className={styles.header}>
            <div className={styles.headerLogo}>
              <Link href="/">Ayxan Mustafayev</Link>
            </div>
            <nav className={styles.headerNav}>
              {/* <Link href="/">Profile</Link>
              <Link href="/">Projects</Link>
              <Link href="#target">Skills</Link> */}
              <li onClick={() => handleScroll("profile")}>Profile</li>
              <li onClick={() => handleScroll("project")}>Projects</li>
              <li onClick={() => handleScroll("skill")}>Skills</li>
            </nav>
          </header>
        </div>
      </div>
      <div className={styles.headerSpace} id="profile"></div>
    </>
  );
};

export default Header;

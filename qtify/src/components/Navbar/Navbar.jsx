import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Button from "../button/Button";

function Navbar({ searchData }) {
    const handleFeedbackClick = () => {
        alert("Feedback form will open!");
      };
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
       <Button text="Give Feedback" onClick={handleFeedbackClick} />
    </nav>
  );
}

export default Navbar;

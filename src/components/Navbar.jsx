import React from "react";
import logoimg from "../images/project_99acres_logo.png";
import headphoneimg from "../images/Headphone_symbol.png"
import userimg from "../images/User_symbol.png";
import optionimg from "../images/Options_symbol.png";
import css from "../CSS modules/Navbar.module.css";

const Navbar = () => {

    const rightNavbarItems = [
        "For Buyers",
        "For Tenants",
        "For Owner",
        "For Dealers/Builders",
        "Insights",
        "Post Property",
        <img src={headphoneimg} alt="Headphone symbol" />,
        <img src={userimg} alt="User symbol" />,
        <img src={optionimg} alt="Option symbol" />
    ];

    return (
        <React.Fragment>
            <div className={css['navbar-container']}>
                <div className={css['background-img']}></div>
                <div className={css['right-side-navbar']}>
                    <li><img className={css['adjust-logo']} src={logoimg} alt="NOT FOUND" /></li>
                    <li>All India</li>
                </div>
                <ul className={css['left-side-navbar']}>
                    {rightNavbarItems.map((item) => (
                        <li className={css['left-side-navbar-list-item']}>{item}</li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
};

export default Navbar;

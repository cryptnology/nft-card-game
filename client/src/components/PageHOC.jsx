import React from "react";
import { useNavigate } from "react-router-dom";

import { logo, heroImg } from "../assets";
import styles from "../styles";

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hocContainer}>
      <div className={styles.hocContentBox}>
        <img
          className={styles.hocLogo}
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <div className={styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
          </div>
          <p className={`${styles.normalText} my-10`}>{description}</p>
          <Component />
        </div>
        <p className={styles.footerText}>Made by Cryptnology.Dev</p>
      </div>
      <div className="flex flex-1">
        <img
          className="w-full xl:h-full object-cover"
          src={heroImg}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default PageHOC;

"use client"
import React, { useState } from "react";
import styles from "./style.module.css";

export default function CardPanel({ title, imageUrl }) {
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseOut = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`${styles.panel} ${isActive ? styles.active : ""}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h3>{title}</h3>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import itsme from "../../../public/images/itsme.jpg";
import style from "./style.module.css";

export default function About() {
  return (
    <div className={style.about_container}>
      <h1 className={style.about_title}>ABOUT</h1>
      <div className={style.aboutexp_container}>
        <Image
          alt="it's me"
          src={itsme}
          className={style.about_Image}
          quality={80}
        />
        <div className={style.aboutexp}>
          <h2>Hi, I am Mehmet Emin Karahaliloğlu</h2>
          <p>
            Lorem ipsum doctetur adipisicing elit. Esse, qui? e maiores a totam
            asporis aspernatur rem molestias? Saepe, minus reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
}

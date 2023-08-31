import React from "react";
import style from "./styles.module.css";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.icons_container}>
        <Link
          className={style.icon}
          target="_blank"
          href="https://github.com/mehmet-karahalil"
        >
          <GithubOutlined />
        </Link>
        <Link
          className={style.icon}
          target="_blank"
          href="https://twitter.com/mhmtkarahalil"
        >
          <TwitterOutlined />
        </Link>
        <Link
          className={style.icon}
          target="_blank"
          href="https://www.linkedin.com/in/mehmet-emin-karahaliloglu/"
        >
          <LinkedinOutlined />
        </Link>
        <Link
          className={style.icon}
          target="_blank"
          href="https://www.instagram.com/mhmtkarahalil/"
        >
          <InstagramOutlined />
        </Link>
      </div>
      <h2 className={style.isim} >MR.KARAHALİL</h2>
      <div className={style.mail}>
        <Link
        className={style.mailicon}
        href="/"
        >
          <MailOutlined />
          <span> GET IN TOUCH</span>         
        </Link>
      </div>
    </header>
  );
}

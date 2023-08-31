'use client'
import {  useTypewriter } from "react-simple-typewriter";
import style from "./style.module.css";
import itsme from "../../../public/images/itsme.jpg";
import Image from 'next/image';
import Link from "next/link";

export default function HeroCard() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }

  const [text] = useTypewriter({
    words: [
      "Hi, I am Mehmet Emin Karahaliloğlu",
      "Mr. KARAHALİL",
      "This is my portfolio site",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const [title] = useTypewriter({
    words: ["HTML-CSS-JS | React.js | Next.js"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className={style.hero_container}>
      <div className={style.herocont}>

      <Image 	priority={true}  alt='its me'  style={imageStyle} src={itsme} width={350} height={450} />
      <div  style={{textAlign:"center"}} >
        <h2><span>{title}</span></h2>
        <h1><span>{text}</span></h1>
       </div>
       <div>
       <div>
          <Link href="#about">
            <button className={style.heroButton}>About</button>
          </Link>
          <Link href="#skills">
            <button className={style.heroButton}>Skills</button>
          </Link>
          <Link href="#projects">
            <button className={style.heroButton}>Projects</button>
          </Link>
        </div>
       </div>
      </div>
    </div>
  );
}

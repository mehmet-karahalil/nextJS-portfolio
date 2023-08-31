import React from "react";
import style from "./style.module.css"


export default function Skill({  item }) {
  return (
    <div className={style.skillcont}>
      <img
        src={item.img}
        className={style.skill_image}
      />
      <div className={style.skilldiv}>
        <div className={style.skill_text_cont}>
          <p className={style.skill_text}>
            {item.name}
          </p>
        </div>
      </div>
    </div>
  )
}

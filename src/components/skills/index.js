import React from "react";
import { skillsData } from "../../data/skillsData";
import style from "./style.module.css";
import Skill from "../skill";

const Skills = () => {
  return (
    <div className={style.skillsContainer}>
      <h3 className={style.skillsTitle}>Skills</h3>
      <div className={style.skillsGrid}>
        {skillsData.map((item, index) =>
          index % 2 === 0 ? (
            <Skill key={index} item={item} />
          ) : (
            <Skill key={index} item={item} directionLeft={true} />
          )
        )}
      </div>
    </div>
  );
};

export default Skills;

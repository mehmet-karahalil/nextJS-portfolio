"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { projectsData } from "../../data/projectsData";
import { GithubOutlined, LeftOutlined, RightOutlined, ShareAltOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function Projects() {
  const [showProjects, setShowProjects] = useState(projectsData);
  const [lang, setLang] = useState("All");
  useEffect(() => {
    if (lang == "All") {  
      setShowProjects(projectsData);
    } else if (lang == "React.JS") {
      setShowProjects(
        projectsData.filter((project) => project.language == "React.JS")
      );
    } else if (lang == "Next.JS") {
      setShowProjects(
        projectsData.filter((project) => project.language == "Next.JS")
      );
    }else if (lang == "HTML") {
      setShowProjects(
        projectsData.filter((project) => project.language == "HTML")
      );
    }
  }, [lang]);

  return (
    <div className={style.projects_container}>
      <h3 className={style.projects_title}>projects</h3>
      <div className={style.projects_nav_container}>
        <button className={style.projects_btn} onClick={() => setLang("All")}>
          All Projects
        </button>
        <button
          className={style.projects_btn}
          onClick={() => setLang("HTML")}
        >
          HTML-CSS-JS
        </button>
        <button
          className={style.projects_btn}
          onClick={() => setLang("React.JS")}
        >
          React.JS
        </button>
        <button
          className={style.projects_btn}
          onClick={() => setLang("Next.JS")}
        >

          Next.JS
        </button>
      </div>
      <LeftOutlined className={style.projectLeft}/>
      <div className={style.projects_div1 }>
        {showProjects.map((project, index) => (
          <div key={index} className={style.projects_div2}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <Image
                width={800}
                height={385}
                src={project.img}
                alt={project.name}
                className={style.project_image}
              />
            </a>
            <div className={style.projects_div3}>
              <h4 className={style.projects_div3_h4}>
                <span style={{ borderBottom: "1px solid #ca3e47" }}>
                  <span>{lang}</span>Study {index + 1} of {showProjects.length}:{" "}
                </span>
                {project.name}
              </h4>
              <p style={{ fontSize: "0.875rem", textAlign: "center" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={style.project_github_link}
                >
                  <GithubOutlined style={{ fontSize: '46px' }}/>
                  <span className={style.github_span}>GitHub</span>
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={style.project_github_link}
                >
                  <ShareAltOutlined style={{ fontSize: '46px'}} />
                  <span className={style.github_span}>Project</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RightOutlined className={style.projectRight}/>
      
    </div>
  );
}

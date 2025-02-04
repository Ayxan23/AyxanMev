"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Items from "@/mocks/skill.json";

const Skills = () => {
  return (
    <div className="container">
      <section className={styles.skills} id="skill">
        <h2>SKILLS</h2>
        <div className={styles.skills__box}>
          {Items.map((item, index) => (
            <div key={index} className={styles.skills__item}>
              <div className={styles.skills__img}>
                <Image
                  src={`/photo/${item.img}`}
                  alt={`skill-${index}`}
                  fill={true}
                />
              </div>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;

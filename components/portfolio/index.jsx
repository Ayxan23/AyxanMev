import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import Items from "@/mocks/project.json";

const Portfolio = () => {
  return (
    <div className={styles.bg}>
      <div className="container">
        <section className={styles.portfolio} id="project">
          <h2>PROJECTS</h2>
          <div className={styles.portfolio__box}>
            {Items.map((item, index) => (
              <div key={index} className={styles.portfolio__item}>
                <div className={styles.portfolio__text}>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className={styles.portfolio__link}>
                    <Link href={item.liveLink} className={styles.see__live}>
                      See Live
                    </Link>
                    <Link href={item.sourceLink}>Source Code</Link>
                  </div>
                </div>
                <div className={styles.portfolio__img}>
                  <Image
                    src={`/photo/${item.img}`}
                    alt={`project-${item.id}`}
                    fill={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;

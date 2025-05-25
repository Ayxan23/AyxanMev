import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className={styles.underLine}></div>
      <div className="container">
        <section className={styles.hero} >
          <div className={styles.heroImage}>
            <Image src="/photo/pp.PNG" alt="Intro" fill={true} priority />
          </div>

          <div className={styles.heroContent}>
            <h1>Frontend Developer</h1>
            <p>
              I enjoy turning complex problems into simple designs, while
              continuously learning new technologies to improve my craft.
              Whether it’s building interactive UIs or optimizing the user
              experience, I’m driven by the challenge of creating web
              applications that people love to use
            </p>
            <div>
              <Link href="https://github.com/Ayxan23" target="_blank">
                <p>
                  <span>
                    <FaGithub />
                  </span>
                  Github
                </p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/aykhan-mustafayev23/"
                target="_blank"
              >
                <p>
                  <span>
                    <FaLinkedin />
                  </span>
                  Linkedin
                </p>
              </Link>
              {/* <p>
                <span>
                  <FaPhoneAlt />
                </span>
                +994(50) 390 00 31
              </p> */}
              <p>
                <span>
                  <IoMdMail />
                </span>
                ayxanmev23@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;

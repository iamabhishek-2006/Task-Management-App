import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/about.module.css"

const About = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.container}>
        <div className={styles.about_card}>
          <div className={styles.about_image}>
            <img
              src={
                "https://media.istockphoto.com/id/2150988877/photo/professional-man-working-on-laptop-in-modern-office.jpg?s=2048x2048&w=is&k=20&c=XHngIr8yzHIavPB_CN3E9FOOwJlPstH-j1qbMlu0jtc="
              }
              alt="Profile"
              className={styles.Profile_pic}
            />
          </div>
          <div className={styles.about_context}>
            <h1>
              hi, I'm <span className={styles.highlight}>Abhishek</span>😊
            </h1>
            <p className={styles.intro}>
              I'm a final-year BCA student passionate about building web
              applications, learning new technologies, and solving real-world
              problems with code.
            </p>
            <p>
              I enjoy working with<strong> React</strong>,
              <strong>Node.js</strong>,<strong>MongoDB</strong>,and other modern
              web tools. My goals is to become a full-stack developer and
              contribute to impact tech Projects.
            </p>
            <p>
              Outside of coding, I love reading tech blogs,exploring open-source
              projects, and mentoring juniors in web development.
            </p>
            <button className={styles.btn}>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );};

export default About;
import React from 'react'
import styles from "../styles/profile.module.css";
import myImage from "./../assets/myImage.png"
import { Settings } from 'lucide-react';
import { useState } from 'react';
import SettingDailog from '../dailogs/settingsDailog';

const Profile = () => {
  const [openDialog,setOpenDialog]=useState(false)


  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <div className={styles.settings_container}> 
            <Settings
              className={styles.Icon_container}
              onClick={() => setOpenDialog(true)}
              size={25}
            />
          </div>
        </div>
        <div className={styles.Profile_icon}>
         <img
         src="https://media.istockphoto.com/id/2150990067/photo/confident-young-professional-giving-thumbs-up-in-office.jpg?s=612x612&w=0&k=20&c=zrDhdSTUcdfkYVezN_LhOLfwTyQHXkNP2w9G6Nc1IQE="  alt="Profile"/>
        </div>
        <div className={styles.text}>
          <h3>Abhishek</h3>
          <h4>web developer</h4>
        </div>
        <div className={styles.Profile_container}>
          <div className={styles.About_me}>
            <h1>
              About <span>me</span>
            </h1>
            <p>
              I am Abhishek, a passionate web developer with a creative mind. I
              specialize in building responsive, user-friendly websites using
              modern tech. From clean code to captivating designs, I focus on
              every detail. I love turning ideas into real, functional web
              experiences. Always learning, always coding — that's the developer
              in me.
            </p>
          </div>
          <div className={styles.About_contact}>
            <h1>
              Contact <span>me</span>
            </h1>
            <div className={styles.content_details}>
              <ul>
                <li>Age:21</li>
                <li>Country:India</li>
                <li>Address: India</li>
                <li>E mail:abhishekshrivastav5920@gmail.com</li>
                <li>Phone:7900270607</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SettingDailog open={openDialog} onClose={() => setOpenDialog(false)} />
    </div>
  );
}

export default Profile;

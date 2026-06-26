import React from 'react'
import styles from "../styles/profile.module.css";
import { X } from 'lucide-react';

const SettingDailog = ({open,onClose}) => {

  const handleSave=(e)=>{
    e.preventDefault();
    onClose();
  }

  return (
    <div className={`${styles.dailog} ${open ? styles.open : ""}`}>
      <div className={styles.dailogContent}>
        <div className={styles.dailogHeader} >
          <h3>settings</h3>
          <X onClick={onClose} size={18}/>
        </div>
        <form onSubmit={handleSave}>
          <div className={styles.formgroup}>
            <label htmlFor="theme">Theme:</label>
            <select id="theme" name="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <button type="submit">Save Settings</button>
        </form>
      </div>
    </div>
  );
}

export default SettingDailog;
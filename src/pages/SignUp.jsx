import React from "react";
import styles from "../styles/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate=useNavigate();
  const [error, setError] = React.useState("");
  const [form, setForm] = React.useState({
    name: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  
  const handleInput = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [eleName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if ( !form.name ||  !form.username ||  !form.password || !form.confirm_password ) {
      setError("please fill all the fields");
      return;
    }
    if (form.password !== form.confirm_password) {
      setError("password does not match!");
      return;
    }

   try {
    const res = await fetch("https://server101-ge81.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (!data.success){
      setError(data.message || "sign Up failed ");
      return;
    }

    setForm({ name: "", username: "", password: "", confirm_password: "" });
    navigate("/signin");
    
   } catch (error) {
    console.log(error);
    setError("something went wrong!");
    return;
   }

  };


  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_form}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInput}
          />
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={form.username}
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            form={form.password}
            onChange={handleInput}
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={form.confirm_password}
            onChange={handleInput}
          />
          <button>Sign Up</button>
          {error && <span className={styles.error_msg}>{error}</span>}
        </form>
        <p>
          Already have an account <Link to="/signin">SignIn</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

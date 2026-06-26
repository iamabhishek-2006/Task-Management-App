import React from 'react'
import styles from "../styles/auth.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {authContext} from "../context/auth-context";
const SignIn = () => {
  const navigate=useNavigate();
   const {setCurrentUser}= useContext(authContext);
  
   const [error,setError]=React.useState("");
   const [form,setForm]=React.useState({
    username:"",
    password:"",
   });
   
   const handleInput=  (e)=>{
      const eleName=e.target.name;
      const value=e.target.value;

      setForm({...form,[eleName]:value})
   };

   const handleSubmit = async (e) => {
    
    try{
      e.preventDefault();
      setError("");
 
      if (form.username === "" || form.password === "") {
        setError("please fill all the fields");
        return;
      }
 
      const res = await fetch("http://localhost:5000/login",{
       method:"POST",
       headers:{
         "Content-Type":"application/json",
       },
       body:JSON.stringify(form),
      });
 
      const data=await res.json();

      if(!data.success){
         setError(data.message || "Login failed");
         return;
      }
 
      setCurrentUser({
        id: data.data._id,
        name: data.data.name,
        username: data.data.username,
      });
      setForm({username:"",password:""});
      navigate("/");
    }catch(error){
      console.log(error);
      setError("something went wrong ");
    }
    
   };
   
  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_form}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={handleInput} value={form.username} />
          <input type="password" name="password" placeholder="Password" onChange={handleInput} value={form.password} />
          <button>Sign In</button>
          {error && <span className={styles.error_msg}>{error}</span>}
        </form>
        <p>Don't have an account <Link to="/signup">SignUp</Link></p>
      </div>
    </div>
  );
};

export default SignIn;



// tailwind
// express 
// node
// api 
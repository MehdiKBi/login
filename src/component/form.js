import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import eye from "../img/eye.png"
import eyeOpen from "../img/ic-actions-closed-viewj.png"






const Form = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState("text");



const history=useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();
    const credentials= {email,password};
    // console.log(credentials);
    fetch("http://localhost:8000/credentials",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(credentials)
    }).then(()=>{
      console.log("new data added");
      console.log(credentials);
   
      
    }).catch((err)=>{
      console.log(err);

    })
    if(password!= 1234){
      history.push("/passwortvergessen") 
      }else{
        history.push("/Home")

      }

  };


  // useEffect(()=>{
  //   if(setPassword!==0){
  //     setError(true)
  //   }else{
  //     setError(false)
  //   }
  // },[])




  return (
    
    <form onSubmit={handelSubmit} className="m-5">
          <h1 id="title_in_box" className="">Bitte loggen Sie sich ein um fortzufahren</h1>

      <div className="text-start mt-5">
        <label className="form-lable text-start">
          Bitte fügen Sie Ihre E-Mail-Adresse ein
        </label>
      </div>
      <motion.input
        whileHover={{backgroundColor:"#0062ff25",borderColor:"blue"}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail-Adresse"
        className="form-control"
        type="text"
      />

      <div className="text-start">
        <label className="form-lable text-start mt-3">Passwort</label>

      </div>


      <div className="wraper">

        <motion.input

        whileHover={{backgroundColor:"#0062ff25",borderColor:"blue"}}

          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="the_eye_icon"
          type={passwordToggle}
          placeholder="Passwort"
          className="form-control"
        />
           {showPassword ?
           <motion.img  onClick={(e) =>{setShowPassword(false);setPasswordToggle("password");}} id="eye" src={eye}/>
           :
           <motion.img onClick={(e) =>{setShowPassword(true);setPasswordToggle("text");}}  id="eye" src={eyeOpen}/>}

      </div>

      <div className="text-end">
        <Link to="/passwortvergessen" className="form-lable">
          Passwort vergessen?
      {error&& <p className="text-end" style={{color:"red"}}>Password is wrong!</p>}
      

        </Link>
      </div>

      <button id="btn" className="mt-5">
        Login
      </button>

    </form>
  );
};

export default Form;

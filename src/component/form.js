import {  useState } from "react";
import {motion} from "framer-motion";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import eye from "../img/eye.png"
import eyeOpen from "../img/ic-actions-closed-viewj.png";



const Form = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [passwordToggle, setPasswordToggle] = useState("password");
  const [valid, setValid] = useState("form-control ");





const history=useHistory();
// const url = "http://localhost:8000/credentials"
// const api = "https://api.corplife.at/v0/auth/tokens"

// localStorage does required deviceName!!??

// async function Login(){
//   let item = {email,password}
//   console.warn(item);
//   let result = await fetch("https://api.corplife.at/v0/auth/tokens",{
//     method:"POST",
//     body: JSON.stringify(item),
//     headers:{"Content-Type": 'application/json',
//               "Accept": 'application/json',
//               "deviceName":"web"
//             }
//   })
//   result = await result.json();
//   localStorage.setItem("user-info" , JSON.stringify(result))
//   history.push("/home")
//   }




  const handelSubmit = (e) => {
    e.preventDefault();
    const credentials= {email,password};
     fetch("https://api.corplife.at/v0/auth/tokens",{
      method:'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(credentials)
    }).then(()=>{
      console.log("new data added");
      console.log(credentials);
   
      
    }).catch((err)=>{
      console.log(err);

    })
    if(password=== "Corplife2021!" && email==="admin@corplife.at"){
      setValid("form-control is-valid")
      setTimeout(()=>{
        history.push("/Home")
      },500)

      }else{
      setValid("form-control is-invalid")
        setError(true)
        setTimeout(()=>{
        history.push("/passwortvergessen") 
        },1000)
      }
  };

  const formVariant ={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        duration:.30
      }

    }
  }


  return (
    
    <motion.form 
      initial="hidden"
      animate="visible"
      variants={formVariant}
     onSubmit={handelSubmit} className="m-5">
          <h1 id="title_in_box" className="">Bitte loggen Sie sich ein um fortzufahren</h1>

      <div className="text-start mt-5">
        <label className="form-lable text-start">
          Bitte fügen Sie Ihre E-Mail-Adresse ein
        </label>
      </div>
      <motion.input
        whileFocus={{backgroundColor:"#0062ff25",borderColor:"blue"}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail-Adresse"
        className={valid}
        type="text"
        required
      />



      <div className="text-start">
        <label className="form-lable text-start mt-3">Passwort</label>
      </div>


      <div className="wraper">

        <motion.input
        whileFocus={{backgroundColor:"#0062ff25",borderColor:"blue"}}
        while
          id="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={passwordToggle}
          placeholder="Passwort"
          className={valid}
          required
        />


           {showPassword ?
           <motion.img  onClick={(e) =>{setShowPassword(false);setPasswordToggle("text");}} id="eye" src={eye}/>
           :
           <motion.img onClick={(e) =>{setShowPassword(true);setPasswordToggle("password");}}  id="eye" src={eyeOpen}/>}

      </div>

      <div className="text-end">
        <Link to="/passwortvergessen" className="form-lable">
          Passwort vergessen?
      
          {error&& <motion.p 
          animate={{y:-85}}
          transition={{ease:"easeInOut"}}
          className="text-end" style={{color:"red"}}>Password is wrong!</motion.p>}

        </Link>
      </div>

      <button 
      // onClick={Login} 
      id="btn" className="mt-5">
        Login
      </button>


    </motion.form>
  );
};

export default Form;

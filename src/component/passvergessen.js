import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { useState } from "react";
import { useHistory } from "react-router-dom";




const Passvergessen = () => {
  const [email, setEmail] = useState("");


  const history=useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();
    const credentials= {email};
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
  
        history.push("/Home")



  };



    return ( 
        <form onSubmit={handelSubmit} className="m-5">
        <h1 id="title_in_box">Password Vergessen?</h1>

    <div className="text-start mt-5">
      <label className="form-lable text-start">
      Bitte fügen Sie Ihre E-Mail-Adresse ein.
      </label>
    </div>

    <motion.input    
      whileHover={{backgroundColor:"#0062ff25",borderColor:"blue"}} 
      placeholder="E-Mail-Adresse"
      className="form-control"
      type="text"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />

    


    <button id="btn" className="mt-5">
    Wiederhertellungslink senden
    </button>

    <div className="text-center">
      <Link to="/" className="text-center">
      Zurück zur Anmeldung
      </Link>
    </div>
  </form>
     );
}
 
export default Passvergessen;
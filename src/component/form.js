import { useState } from "react";
import { useHistory } from "react-router-dom";


const Form = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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
  };





  return (
    <form onSubmit={handelSubmit} className="m-5">
      <div className="text-start">
        <label className="form-lable text-start">
          Bitte fügen Sie Ihre E-Mail-Adresse ein
        </label>
      </div>
      <input
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
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="the_eye_icon"
          type="password"
          placeholder="Passwort"
          className="form-control"
        />
      </div>

      <div className="text-end">
        <a href="#" className="form-lable">
          Passwort vergessen?
        </a>
      </div>

      <button id="btn" className="mt-5">
        Login
      </button>
    </form>
  );
};

export default Form;

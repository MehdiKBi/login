import { Link } from "react-router-dom";


const Passvergessen = () => {
    return ( 
        <form className="m-5">
        <h1 id="title_in_box">Password Vergessen?</h1>

    <div className="text-start mt-5">
      <label className="form-lable text-start">
      Bitte fügen Sie Ihre E-Mail-Adresse ein.
      </label>
    </div>

    <input     
      placeholder="E-Mail-Adresse"
      className="form-control"
      type="text"
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
const Form = () => {
    return ( 

<form className="m-5">
        
        <div className="text-start">
        <label className="form-lable text-start">Bitte fügen Sie Ihre E-Mail-Adresse ein</label>
        </div>

        <input  placeholder="E-Mail-Adresse" className="form-control"/>


        <div className="text-start">
        <label type="password" className="form-lable text-start mt-3">Passwort</label>
        </div>

        <input placeholder="Passwort" className="form-control" width="100px"/>

        <div className="text-end">
        <label className="form-lable">Passwort vergessen?</label>
        </div>

         <button id="btn" className="mt-5">Login</button>
</form>

     );
}
 
export default Form;
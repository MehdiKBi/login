import corplifeLogo from "../img/logo.png"



const Logo = () => {
    return ( 
        <div className="logo">
            <img id="img-logo" src={corplifeLogo}/>
            <h1 className="text-center text-white mt-5 fs-3 " >Willkommen auf der Corplife Plattform!</h1><br/>
            <p className="text-center text-white" >Wir haben die professionellsten HR-Tools der Welt an einem Ort für Sie zusammengeführt!</p>



        </div>
     );
}
 
export default Logo;
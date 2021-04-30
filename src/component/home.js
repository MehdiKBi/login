import { Link } from "react-router-dom";
import {motion} from "framer-motion";





const Home = () => {
  const formVariant ={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        duration:.70
      }

    }
  }


  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    variants={formVariant}
    className="home">
      <h1 className="m-5">Check your inbox</h1>
      <p>An email with further instructions has been sent to </p>

      

        <div className="wrap">
        <p className="text-start mt-5" id="issue_repor_message" >
        If you’re having issues and haven’t received an email please contact
        your HR Administrator.
      </p>
        </div>
      

      <Link to="/" className="text-start txt_1">Return to Log in </Link>
      <p className="text-end txt_2">Resent Recovery Link</p>

    </motion.div>
  );
};

export default Home;

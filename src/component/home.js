import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="m-5">Check your inbox</h1>
      <p>An email with further instructions has been sent to </p>

      <h3 className="mt-5">alex.mayer12 @gmail.com</h3>

        <div className="wrap">
        <p className="text-start mt-5" id="issue_repor_message" >
        If you’re having issues and haven’t received an email please contact
        your HR Administrator.
      </p>
        </div>
      

      <Link to="/" className="text-start txt_1">Return to Log in </Link>
      <p className="text-end txt_2">Resent Recovery Link</p>

    </div>
  );
};

export default Home;

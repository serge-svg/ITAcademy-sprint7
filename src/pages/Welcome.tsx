import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
        <h1>Budget configurator</h1>
        <p>
          Do you need a <strong> website?</strong> Follow this link 
          to set up your budget according to your needs😉
        </p>
        <br />
        <Link to="/budget">Let's configure it!</Link>
    </>        
  );
};

export default Welcome;
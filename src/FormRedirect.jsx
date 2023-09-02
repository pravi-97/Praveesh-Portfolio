import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const FormRedirect = () => {
  const history = useNavigate();
  function returnHome() {
    history("/redirect");
  }
  useEffect(() => {
    setTimeout(returnHome, 2000);
  }, []);
  return <h1>you will be redirected to home page</h1>;
};

export default FormRedirect;

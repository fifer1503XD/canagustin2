import { useEffect } from "react";
import { useSelector,} from 'react-redux'
import { Register } from "./RegisterComponent";

const RegisterScreen =()=> {
  const {isAutenticated,user} = useSelector((state) => state.auth)

  
  useEffect(() => {
  }, [isAutenticated,user]);
  return (
    <div className="App">
    <Register/>
    </div>
  );
}

export default RegisterScreen;

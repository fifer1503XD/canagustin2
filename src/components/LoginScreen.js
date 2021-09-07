import { useEffect } from "react";
import { useSelector,} from 'react-redux'
import { Login } from "./LoginComponent";


const LoginScreen =()=> {
  const {isAutenticated,user} = useSelector((state) => state.auth)

  
  useEffect(() => {
  }, [isAutenticated,user]);
  return (
    <div className="App">
    <Login/>
    </div>
  );
}

export default LoginScreen;

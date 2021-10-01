import { useEffect, useState } from "react";
import { useSelector,} from 'react-redux'
import { Login } from "./LoginComponent";
import { Register } from "./RegisterComponent";

const LoginScreen =()=> {
  const {isAutenticated,user} = useSelector((state) => state.auth)

  const [wantRegister, setRegister] = useState(false);
  useEffect(() => {
  }, [isAutenticated,user]);
  return (
    
    <div className="App">
      {
        wantRegister ?
        <Register wantRegister={setRegister}/>
        :
        <Login wantRegister={setRegister} />
        
       
      }
      
    </div>
  );
}

export default LoginScreen;

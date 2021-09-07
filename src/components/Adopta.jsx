import CardDog from "./cardDog";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import NewDog from "./newDog";
const Adopta = () => {
    const dataDogs = useSelector(state => state.dogs.dataDogs);
    return ( <div>
        <Navbar/>
        <div className="contanerDogs">
        {dataDogs.map((dog)=>{
            return(<CardDog info={dog}/>)
        })}
        </div>
        
        <NewDog/>
        
    </div> );
}
 
export default Adopta;
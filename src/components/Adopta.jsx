import CardDog from "./cardDog";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import NewDog from "./newDog";
import { useState } from "react";
import PublicationDog from "./PublicationDog";
import "./Card.css";
const Adopta = () => {
    const [card, setcard] = useState('');
    const dataDogs = useSelector(state => state.dogs.dataDogs);
    return ( <div>
        <Navbar/>
        
       
        {card ? 
        
        (<div> <PublicationDog
        info={card}
        />
        </div>) 
        :
        ( <div className="containerPublication">
        {dataDogs.map((dog)=>{
            return(<CardDog setcard={setcard} info={dog}/>)
        })}
        </div>
        ) 
        }
        
        <NewDog/>
        
    </div> );
}
 
export default Adopta;
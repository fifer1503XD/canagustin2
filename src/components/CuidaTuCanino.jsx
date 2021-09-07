import {useState} from "react"
import { CardPublication } from "./CardPublication";
import Navbar from "./Navbar";
import  dataCuida  from "../data/dataCuidaTuCanino"
import "./Card.css";
import Publication from "./Publication";
const CuidaTuCanino = () => {
    const [card, setcard] = useState('');
    return (<>
        <Navbar />
        {card ? 
        
        (<div><Publication
        information={card}/>
        </div>) 
        :
        (<div className="containerPublication">
        {dataCuida.map((publication) => {
            console.log(publication)
            const {recipeAuthor,recipeItem,isLiked,like}=publication
            return (
                <CardPublication
                    image={recipeItem.image}
                    setcard={setcard}
                    author={recipeAuthor}
                    title={recipeItem.title}
                    date={recipeItem.date}
                    description={recipeItem.description}
                    liked={isLiked}
                    likeCount={like}
                    content={recipeItem.textPublication}
                />
            )
        }

        )}
        </div>) 
        }
        
       

    </>);
}

export default CuidaTuCanino;
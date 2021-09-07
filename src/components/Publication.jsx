import "./blogcanagustin.css";
const Publication = (props) => {
    console.log(props)
    const { author, date, image, description,content, isLiked, like,title } = props.information
    return (
        <div>
            
            <div className="containerDescription">
            <div className="containerInfo">
            <h1><b>{title.toUpperCase() }</b></h1>
            <p className="infoPublication"><b>{content}</b></p>
            </div>
            <img className="containerImage" src={image} alt="" />

            </div>

            



         
        </div>
    );
}

export default Publication;
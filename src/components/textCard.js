import { Link } from 'react-router-dom';
import './textCard.css';
const TextCard=(props)=> {
  return (
    <div  className="card-contaier">
  <div className="container">
    <img src={props.url} alt="Avatar" className="image" />
    <div className="overlay">
      <div className="text">{props.name}</div>
    </div>
  </div>
    </div>
  
  );
}

export default TextCard;

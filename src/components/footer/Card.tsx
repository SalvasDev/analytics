import { Props } from "../../interfaces/interfaces"
import { ButtonFill} from "../styled.components"

const Card = ({titleCard, numUsers, price, cardId}: Props): JSX.Element => {
  
  return(

    <div className='card-item' style={ { backgroundColor : cardId === '2' ? '#FFF' : '#0F1F4B' } } >
          <h4 className="card__title" style={ { color : cardId == '2' ? '#172755' : 'white' } }>{titleCard}</h4>
          <p className="card__num-users" >up to {numUsers} users</p>
          <hr className="line" />
          <h4 className="price" style={ { color : cardId === '2' ? '#172755' : 'white' } }>{price}</h4>
          <p className="per-month">per month</p>
          { cardId === '2' 
          ? <ButtonFill width={20}>order</ButtonFill> 
          : <button className="button__outlined white border-dark btn__footer-margin">order</button> }                      
    </div> 
  )
}

export default Card 
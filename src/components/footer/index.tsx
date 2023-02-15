import { cardsPrices } from "../../utilities/cardsPrices"
import { FooterSection } from "../styled.components"
import { Wrapper } from "../styled.components"
import Card from "./Card"
import logo2 from "../../assets/img/logo2.svg"
import facebook from "../../assets/img/Facebook.svg"
import twitter from "../../assets/img/Twitter.svg"
import instagram from "../../assets/img/Instagram.svg"
import symbolFooter from "../../assets/img/symbol-back-footer.svg"


const Footer = ():JSX.Element => {
  
  return(
    <FooterSection>
      <Wrapper>
        <header className="footer__header">
          <h2 className="subtitle center white"> 
            Pricing Plans
          </h2>
          <p className="footer__text center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet
            volutpat pellentesque volutpat est. </p>
        </header>
        <div className="cards">
            { 
              cardsPrices.map(cardItem => {
                let cardNum = cardItem.cardId
                 return (
                  <Card 
                     key={cardItem.cardId}
                     cardId = {cardNum}
                     titleCard={cardItem.titleCard}
                     numUsers={cardItem.numUsers}
                     price={cardItem.price} 
                   />
                )})                             
            }
        </div> 
         <hr className="line-gral"/>

         <div className="footer__info">
          <img className="footer__logo" src={logo2} alt="Logo footer" />
          
          <nav className="main__menu">
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
          </nav>

          <div className="networks">
             <img className="icon__networks" src={facebook} alt="Logo facebook" /> 
             <img className="icon__networks" src={twitter} alt="Logo twitter" /> 
             <img className="icon__networks" src={instagram} alt="Logo instagram" /> 
          </div>
         </div>
         <img className="symbol__footer" src={symbolFooter} alt="Symbol for background footer" />
      </Wrapper>
    </FooterSection>
  )
}

export default Footer
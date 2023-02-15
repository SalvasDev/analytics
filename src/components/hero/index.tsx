import { ButtonFill, Wrapper } from "../styled.components"
import mainScreen from '../../assets/img/main-screen.png'
import { HeroSection } from "../styled.components"
import Header from "../header"
import symbolBack2 from '../../assets/img/symbol-back-hero2.png'
import symbolBack1 from '../../assets/img/symbol-back-hero1.png'
import mainScreenComplete from '../../assets/img/main-screen-complete.png'
const Hero = (): JSX.Element => {
  return (
    <HeroSection>
      <Wrapper>
        <Header />
        <div className="hero__group">
          <img className="hero__symbol-back1" src={symbolBack1} alt="Symbol back 1" />
          <img className="hero__symbol-back2" src={symbolBack2} alt="Symbol back 2" />
          <div className="hero__info">
              <h1 className="hero__title">Monitor your bussines on real-time dashboard</h1>
              <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
              <ButtonFill width={23}>Try for free</ButtonFill>
          </div>
          <img className="hero__image" src={mainScreen} alt="" />
          <img className="hero__image-complete" src={mainScreenComplete} alt="" />

        </div>
      </Wrapper>
    </HeroSection>    
  )
}

export default Hero
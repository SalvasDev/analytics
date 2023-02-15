import { Wrapper } from "../styled.components"
import { FeaturesSection } from "../styled.components"
import clock from "../../assets/img/Icon-clock.svg"
import compu from "../../assets/img/Icon-compu.svg"
import rocket from "../../assets/img/Icon-rocket.svg"



const Features = (): JSX.Element => {

  return (
    <FeaturesSection>
      <Wrapper>
        <header className="features__header">
          <h2 className="subtitle center"> 
            Main Features
          </h2>
          <p className="features__text center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
        </header>        
        <main className="features">
          <div className="feature">
            <img className="feature__icon" src={clock} alt="" />
            <h3 className="feature__title">Monitoring 24/7</h3>
            <p className="feature__text">Lorem ipsum dolor sit amet, consectetur adipis
              cing elit. Elementum nisi aliquet volutpat.</p>
          </div>

          <div className="feature">
            <img className="feature__icon" src={compu} alt="" />
            <h3 className="feature__title">Widget System</h3>
            <p className="feature__text">Sapien in etiam vitae nibh nunc mattis imperdiet
              sed nullam. Vitae et, tortor pulvinar risus pulvinar.</p>
          </div>

          <div className="feature">
            <img className="feature__icon" src={rocket} alt="" />
            <h3 className="feature__title">Best Performance</h3>
            <p className="feature__text">Lorem ipsum dolor sit amet, consectetur adipis
              cing elit. Elementum nisi aliquet volutpat.</p>
          </div>  
          
        </main>
      </Wrapper>
    </FeaturesSection>
  )

}

export default Features
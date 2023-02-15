import { MainSection } from "../styled.components"
import { Wrapper } from "../styled.components"
import Article from "./article"

const Main = (): JSX.Element => {
  return(
    <MainSection>
      <Wrapper>
        <Article
          subtitle='Automated Reports & Widget Alerts'
          textArticle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.'
          grid=''
          numArticle='01' 
        />

          <Article 
            subtitle = 'Fully customizable to address your needs'
            textArticle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.' 
            numArticle = '02'
            grid = 'left'    

          />

          <Article 
            subtitle='Pre-built Dashboard Templates'
            textArticle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.'
            grid=''
            numArticle='03' 
          />
      </Wrapper>
    </MainSection>
  ) 
}

export default Main 
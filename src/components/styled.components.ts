import styled from 'styled-components'
import { Props } from '../interfaces/interfaces';


export const HeaderBar = styled.div`
  margin-top: 5rem;
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto; 
  position: sticky;
  z-index: 100;

  @media screen and (max-width: 490px) {
   align-items: start;
  }
`;

export const ButtonFill = styled.button<Props>`
  border: none;
  background-color: #EF2A82;
  color: white;
  width: ${props => props.width}rem;
  height: 5rem;
  border-radius: 6.8rem;
  font-size: 1.6rem;
  margin-top: 4.9rem;
  cursor: pointer;
  
  &:hover {
    background-color: #F5509A;
  }
`;

export const HeroSection = styled.div`
  position: relative;
  margin-top: 0; 
  background: linear-gradient(-185deg, var(--bg-color) 75%, transparent 15%);
  width: 100%;
  height: auto;
  padding-bottom: 30rem;



  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -2%;
    content: '';        
    background: linear-gradient(-185deg, var(--pink-color) 75%, transparent 15%);
    z-index: -1;
  }

`;


export const Wrapper = styled.div`
  width: min(90%, 118rem);
  margin: auto;
  margin-top: 0;
`;


export const FeaturesSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;   

  @media screen  and (max-width: 1280px) {
    margin-top: -8rem;        
  }


  @media screen  and (max-width: 960px) {
    margin-top: -12rem;        
  }


  @media screen  and (max-width: 768px) {
    margin-top: -18rem;        
  }



`;

export const MainSection = styled.div`
  margin-top: 13rem; 
`;

export const FooterSection = styled.div`
  position: relative;
  margin-top: 50rem;
  background-color: var(--bg-color);
  width: 100%;
  height: auto;  
  padding-bottom: 5rem;
  position: relative;
  z-index: 1;

  &::before {
        position: absolute;
        width: 100%;
        height: 2%;
        bottom: 133%;
        content: '';
        background: var(--pink-color);
        transform-origin: top right;
        transform: skewY(-7deg);   

      @media screen  and (max-width: 1160px) {
        bottom: 121.5%;        
       }


      @media screen  and (max-width: 853px) {
        bottom: 121%;        
       }

      @media screen  and (max-width: 768px) {
        bottom: 116%;        
       }

      @media screen  and (max-width: 490px) {
        bottom: 115%;        
       }
}

  &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -30rem;
        content: '';        
        background: var(--dark-blue);
         transform-origin: top right;
        transform: skewY(-7deg);
        z-index: -2;

    }    
`;




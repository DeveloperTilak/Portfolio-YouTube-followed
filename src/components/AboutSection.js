import React from 'react'
import SectionTitle from './SectionTitle'
import Button from './Button'
import PText from './PText'
import AboutImg from '../assets/images/about-sec-img.png'
import styled from 'styled-components'


const AboutSectionStyles=styled.div`
    padding: 15rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
    width: 0;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width:1200px){
      .aboutSection__bottons{
        position:relative;
      }
  }
  

`;
export default function AboutSection() {
    return (
        <AboutSectionStyles>
            <div className='container'>
                <div className='aboutSection__left'>
                    <SectionTitle
                        subheading='Let me introduce myself'
                        heading='About Me'
                     />
                     <PText>
                     I am a freelance both frontend and backend. I live in INDIA.
                     I am a college student. 
                     </PText>
                     <div className='aboutSection__bottons'>
                         <Button btnText="works" btnLink="/projects" />
                     </div>
                     </div>
                     <div className='aboutSection__right'>
                         <img className='aboutImg' src={AboutImg} alt='aboutImage' />
                     </div>
                
                
            </div>
        </AboutSectionStyles>
    )
}

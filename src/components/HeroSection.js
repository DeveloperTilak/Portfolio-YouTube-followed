import React from 'react'
import styled from 'styled-components'
import HeroImg from '../assets/images/Av4.jpg'
import Button from './Button'
import PText from './PText'

const HeroStyles= styled.div`
.hero__heading{
    ${'' /* position:relative; */}
    font-size:2rem;
    margin: 56px;
    span{
        width:90%;
        display:inline-block;
    }
    .hero__name{
        font-family:'Montserrat SemiBold';
        font-size:3.5rem;
        margin: 0 70px;
        color:white;
    }
}
.hero__img{
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: -40px auto;
    border: 4px solid var(--gray-1);
}
.hero__info{
    margin:-9rem 0;
}
@media only screen and (max-width:768px){
    .hero{
        margin: 0 50px;
    }
    .hero__heading{
        font-size:1.5rem;
        .hero__name{
        font-family:'Montserrat SemiBold';
        font-size:2rem;
        margin: 0 70px;
        color:white;
    }
    }
    .hero__img{
    height:250px;
}
    
}
    

`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className='hero'>
            <div className='container'>
            <h1 className='hero__heading'>
            <span>Hello, This is</span>
            <span className='hero__name'>Developer💻Awdhesh</span>
            </h1>
            <div className='hero__img'>
                <img src={HeroImg} alt=" " />
            </div>
            <div className='hero__info'>
                <PText>  I am awdhesh a web developer and freelancer contact me if you need any Landing page of your business. </PText>
              <Button btnText='projects' btnLink='/projects'/>
            </div>

            </div>
            </div>
        </HeroStyles>
    )
}

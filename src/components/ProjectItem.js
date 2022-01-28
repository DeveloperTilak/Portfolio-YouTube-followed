import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles =styled.div`
  .projectItem__img{
      width:90%;
      height:300px;
      border-radius:12px;
      overflow:hidden;
      display:inline-block;
      border:3px solid var(--gray-2);
      img{
          height:100%;
      }
  }
  .projectItem__info{
      margin-top: 0.5rem;
      background-color:var(--deep-dark);
      padding:0.8rem;
      border-radius:12px;
      width:90%;
  }
  .projectItem__title{
    color:white;
    font-size:1.8rem;
  }
  .projectItem__desc{
      font-size:1.2rem;
      font-family:'RobotoMono Regualar';
      margin-top:0.8rem;
  }

`;

export default function ProjectsItems({
    img=ProjectImg,
    title='Project ame',
    desc= 'This is the project description.'
}) {
    return (
        <ProjectItemStyles>
            <Link to='/projects' className='projectItem__img'>
            <img src={img} alt='project img' />
            </Link>
            <div className='projectItem__info'>
                <Link to='#'>
                <h3 className='projectItem__title'>{title}</h3>

                </Link>
                <p className='projectItem__desc'>{desc}</p>

            </div>
        </ProjectItemStyles>
    )
}

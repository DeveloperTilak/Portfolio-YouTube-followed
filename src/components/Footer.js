import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    ${'' /* gap: 3rem; */}
  }
  .random{
    margin:0;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Developer Awdhesh</h1>
          
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+9187067598',
                path: 'tel:+9187067598',
              },
              {
                title: 'awdheshthinker@gmail.com',
                path: 'mailto:awdheshthinker@gmail.com',
              },
              {
                title: 'BASTI, UP, INDIA',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div> 
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Linkdin',
                path: 'https://www.linkedin.com/in/developer-awdhesh/',
              },
              {
                title: 'YouTupe',
                path: 'https://www.youtube.com/channel/UCeXgSrmmPFywmNzNfQzuI_g/videos',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/developer_awdhesh/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 -  | Designed By Developer Awdhesh
            {/* <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web
            </a>{' '} */}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

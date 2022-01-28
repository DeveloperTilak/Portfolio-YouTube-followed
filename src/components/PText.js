import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 730px;
  margin: 0 147px;
  font-size: 1.8rem;
  line-height: 1.3em;
  font-weight: 800;
  @media only screen and (max-width: 768px) {
    
    font-size: 1.5rem;
    margin: 0;
      
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}

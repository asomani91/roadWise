import styled from 'styled-components';

export const CardsContainer = styled.div `
  /* width: 100vw; */
  min-height: 10vh;
  /* padding: 5rem calc((100vw - 1300px) / 2); */
  background: #fff;
  color: #fff;
 margin: 0 auto;
`;

export const CardWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
export const Card = styled.div `
  margin: 0 2rem;
  line-height: 2;
border:solid 0.5px #333;
border-radius:5px;
padding:0;
`;
export const CardImg = styled.img `
  height: 300px;
  min-width: 300px;
  max-width: 100%;
`;
export const CardTitle = styled.h2 `
  font-weight: 400;
  font-size: 1.5rem;
  color:black;
  text-align:center;
`;
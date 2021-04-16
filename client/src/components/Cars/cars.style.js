import styled from "styled-components";


export const List = styled.ul `
    width:100px;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(2,1fr);
  justify-content:center;
    margin: 10rem auto 10rem auto;
    grid-gap:5rem;

`;
export const ListItem = styled.li `
      
      list-style-type:none;


`;

export const TechContainer = styled.div `
display:flex;
justify-content:center;
margin-bottom:5rem;


`;
export const Heading = styled.div `
    padding:20px;
    background:red;

`
export const TechBtn = styled.button `
    height:100px;
    border:solid red 3px; 
    padding:9rem;
    border-radius:5px;      
    background:red;
    font-size:20px;
    outline:none;
    box-shadow: 5px 10px #888888;

`
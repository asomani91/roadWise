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
    height:100px;
    border:solid red 3px;
    font-size:20px;
    list-style-type:none;
    padding:9rem;
    border-radius:5px;
    box-shadow: 5px 10px #888888;

`;
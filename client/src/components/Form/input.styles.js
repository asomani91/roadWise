import styled from "styled-components";



export const FormGroup = styled.div `
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 15px auto;
`;
export const Input = styled.input `
	padding:.3em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
`;
export const Label = styled.label `
	margin-bottom:10px;
	color: palevioletred;
    display: block;
`;

export const Submit = styled.input.attrs({
    type: 'submit',
    value: 'Submit'
})
`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  margin-top:50px;
  &:active {
    background-color: #f1ac15;
  }
  `
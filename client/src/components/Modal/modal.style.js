import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div `
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  top:0;
  left:0; 
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div `
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-column-gap:10px;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;

`;

export const ModalContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)
`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
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
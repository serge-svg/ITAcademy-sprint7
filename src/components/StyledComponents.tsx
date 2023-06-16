import styled from "styled-components";

export const StyledDiv = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => visible ? 'block' : 'none'};
`;

export const StyledForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;  
`;

export const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50vh;
  font-family: "Exo 2", sans-serif;
  border-radius: 16px;
  padding: 30px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  h2 {
    color: #e0e0e0;
  }
  
  a {
    border-radius: 4px;
    padding: 8px;
    color: #e0e0e0;
    background-color: #0a3d62;
    text-decoration: none;
    transition-duration: 0.4s;
  }

  a:hover {
    background-color: #bebebe;
  }
`;

export const StyledCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  

  padding: 10px;
  color: #8395a7;
  font-size: 0.9rem;

  button {
    border: 1px;
    border-radius: 5px;    
    margin: 2px;
    vertical-align: middle;
    transition-duration: 0.4s;
  }

  input {
    width: 40px;
  }

  .counter{
    margin-left: auto;
  }
  
`;
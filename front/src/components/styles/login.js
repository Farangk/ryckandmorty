import styled from 'styled-components'; 

export const FormLogin = styled.form`

height: 70vh;
width: 20%;
padding: 1px;
border-radius: 5%; 
background: rgb(101,172,255);
background: radial-gradient(circle, rgba(101,172,255,1) 0%, rgba(31,91,255,0.20910362435990026) 0%, rgba(59,78,189,1) 84%); 
-webkit-box-shadow: 0px 8px 21px 5px rgba(20,84,186,1);
-moz-box-shadow: 0px 8px 21px 5px rgba(20,84,186,1);
box-shadow: 0px 8px 21px 5px rgba(20,84,186,1);

`;

export const DivUserName = styled.div`
    display: flex;
    flex-direction: column; 
  
`;

export const Labels = styled.label`
    background: rgb(31,91,255);
    background: linear-gradient(360deg, rgba(31,91,255,0.20910362435990026) 51%, rgba(59,78,189,1) 99%); 
    margin-top: 22px; 
    font-weight: bold; 
    font-size: 22px; 
    
`;

export const Inputs = styled.input`
    margin-top: 10px; 
    width: 60%; 
    position: relative;
    left: 50px; 
    padding: 3px; 
`;

export const ButtonStyle =styled.button`
    -webkit-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
    font-weight: bold; 
    margin: 15px; 
    padding: 4px 20px;
   
`;
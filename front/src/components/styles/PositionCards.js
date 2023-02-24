import styled from "styled-components";

export const DivCard = styled.div`
position: relative;
border-radius: 15px; 
background: rgb(101,142,255);
background: radial-gradient(circle, rgba(101,142,255,0.20910362435990026) 0%, rgba(191,247,245,1) 44%, rgba(71,98,255,1) 100%); 
position: relative;  
padding-top: 10px;
-webkit-box-shadow: 9px 11px 6px 0px rgba(20,5,64,1);
-moz-box-shadow: 9px 11px 6px 0px rgba(20,5,64,1);
box-shadow: 9px 11px 6px 0px rgba(20,5,64,1);
width: 20%;
height: 70vh; 
`;
export const Button = styled.button`
   position: absolute; 
   right: 9px; 
   padding: 8px; 
   background-color: #6c9da7; 
   font-weight: bold;  
`;

export const H2Name = styled.h2`
   border: 1px solid; 
   padding: inherit;
   margin-top: 40px;   
   background: rgb(124,135,223);
   background: linear-gradient(356deg, rgba(124,135,223,1) 15%, rgba(9,69,236,0.20910362435990026) 39%, rgba(3,12,64,1) 100%); 
   -webkit-box-shadow: 0px 16px 9px -11px rgba(0,0,0,0.88);
   -moz-box-shadow: 0px 16px 9px -11px rgba(0,0,0,0.88);
   box-shadow: 0px 16px 9px -11px rgba(0,0,0,0.88);
   
   `;

export const H2Species = styled.h2`
   position: absolute;
   right: 13%; 
   -webkit-box-shadow: 4px 9px 8px 5px rgba(0,0,0,1);
   -moz-box-shadow: 4px 9px 8px 5px rgba(0,0,0,1);
   box-shadow: 4px 9px 8px 5px rgba(0,0,0,1);
   border: 1px solid;
   padding: 1.5px 11px; 
   text-align:center;
`;
export const H2Gender = styled.h2`
   position: absolute; 
   left: 13%;
   -webkit-box-shadow: 4px 9px 8px 5px rgba(0,0,0,1);
   -moz-box-shadow: 4px 9px 8px 5px rgba(0,0,0,1);
   box-shadow: 4px 9px 8px 5px rgba(0,0,0,1);
   border: 1px solid;
   border: 1px solid;
   padding: 1.5px 11px; 
   text-align:center;
`;

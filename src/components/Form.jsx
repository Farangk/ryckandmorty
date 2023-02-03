import React from 'react'; 
import validate from './validate.js'
import { FormLogin, DivUserName, Labels, Inputs, ButtonStyle } from './styles/login.js';


export default function Form(props) {
  //"testEmvioronment": "jsdom"
  const [userData, setUserData] = React.useState({
    username: '', 
    password: ''
  })
  const [errors, setErrors] = React.useState({
    username: '', 
    password: ''
  })
  function handleInputChange(evento){
    setUserData({
        ...userData,
        [evento.target.name]: evento.target.value
    });
    
    setErrors(validate({
        ...userData,
        [evento.target.name]: evento.target.value
    }))

  }

  function handleSubmit(evento) {
    evento.preventDefault(); 
    props.login(userData)
  }
  return (
    <>
      <FormLogin onSubmit={handleSubmit}>
        <DivUserName>
          <Labels>Username: </Labels>
          <Inputs type="text" name="username" placeholder="Escribe tu username..." onChange={handleInputChange}/>
        
        
          <Labels>Password: </Labels>
          <Inputs type="password" name="password" placeholder="Escribe tu password" onChange={handleInputChange}/>
          </DivUserName>
        {Object.keys(errors).length === 0 ? <ButtonStyle type="submit"> Login </ButtonStyle> :null}
        
      </FormLogin>
    </>
  );
}

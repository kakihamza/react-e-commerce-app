import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&dpr=650&w=900")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  border-radius: 15px 15px;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: Darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    color: black;
  }
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`

  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: Darkgray;
  color: black;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  border-radius: 15px 15px;
  &:hover {
    background-color: darkviolet;
    color: white;
   }
`;

const Linken = styled.a`
  color: black;
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  font-weight: italic;
  cursor: pointer;
  &:hover {
   color: blue;
  }
  ${mobile({ width: "60%" })}

`;
const Linke1 = styled.h1`
color: Darkgray;
margin: 5px 0px;
font-size: 15px;
text-decoration: none;
&:hover {
  color: blue;
}
margin-left: 78%;

${mobile({ width: "60%" })}


`

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title >SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error style={{diplay: "flex", marginBottom:"10px"}}>Something went wrong...</Error>}
          <Link to = "/ForgotPassword" style={{textDecoration: 'none'}}><Linken>DO NOT YOU REMEMBER THE PASSWORD?</Linken></Link>
          <Link to = "/register" style={{textDecoration: 'none'}}><Linken>CREATE A NEW ACCOUNT</Linken></Link>
         <Link to = "/" style={{textDecoration: 'none'}}> <Linke1> Shop Now </Linke1></Link> 

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

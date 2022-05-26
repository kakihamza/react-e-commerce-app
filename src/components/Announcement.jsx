import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #A67CEF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    transform: scale(1.3);

    color: white;
     font-weight:  bold;
     font-size: 20px;
     background-color: darkviolet;

      }
 

`;

const Announcement = () => {
  return <Container>Super Discount Over $100 !!! </Container>;
};

export default Announcement;

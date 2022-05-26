import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


const Container = styled.div`


`

const Text = styled.h1`
display: flex;
    flex-wrap: wrap;
    margin: 100px;

`

const Terms = () => {
  return (
      
    <Container>
   
<Announcement />
      <Navbar />
      <Text>
        Terms of Use
Our Terms of Use were posted on 25 May 2022 and last updated on 26 May 2022.

Please read these terms and conditions carefully before using Our Service.

Interpretation and Definitions
Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </Text>
      <Newsletter/>
      <Footer/>
    
  
    </Container>
  )
}

export default Terms
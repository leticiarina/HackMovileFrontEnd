import styled from "styled-components"

const Section = styled.section`
  background-color: #ffff;
  margin-top: 25px;
  min-height: 230px;
  padding-bottom: 25px;
  padding-left: 12vw;
  padding-right: 12vw;
  padding-top: 25px;
  text-align: center;  

  h3, p {
    text-align: ${props => props.alignment ? props.alignment : "left"};
  }
`

export default Section

import styled from "styled-components"

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 7px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.4);
  margin-top: ${props => props.top};
  margin-left: 12vw;
  margin-right: 12vw;
  margin-bottom: 17px;
  padding-bottom: ${props => props.bottom ? props.bottom : "49px"};
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 49px;
  text-align: center;
  width: 76vw;

  h1 {
    font-weight: bold;
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  p {
    color: #1c7d1c;
    font-weight: bold;
    margin-top: 23px;
 
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }

  }
`
export default Card

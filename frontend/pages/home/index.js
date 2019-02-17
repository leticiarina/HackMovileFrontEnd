import { GreyContainer } from "../../components/Container"
import Button from "../../components/Button"
import Card from "../../components/Card"
import Col from "react-bootstrap/Col"
import Footer from "../../components/Footer"
import Row from "react-bootstrap/Row"
import Section from "../../components/Section"

const Home = () => 
  <GreyContainer>
    <Row>
      <Col>
        <Card top="68px" bottom="13px">
          <h4>Meu saldo</h4>
          <h1>R$10,00</h1>
          <p>Ver meu extrato</p>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Section>
          <h3>Receber</h3>
          <p>
            Precisa receber dinheiro de alguma coisa?<br/>
            Fácil e prático, seu dinheiro na sua conta de forma descomplicada.
          </p>
          <Button>Receber</Button>
        </Section>
      </Col>
    </Row>
    <Row>
      <Col>
        <Section alignment="right">
          <h3>Pagar</h3>
          <p>
            Transfira dinheiro de forma prática!<br/>
            Pague tudo que precisar de maneira simples.
          </p>
          <Button>Pagar</Button>
        </Section>
      </Col>
    </Row>
    <Footer/>
  </GreyContainer>

export default Home
import { GreyContainer } from "../components/Container"
import Button from "../components/Button"
import Card from "../components/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Footer from "../components/Footer"
import Link from "next/link"
import Row from "react-bootstrap/Row"
import Section from "../components/Section"

const Home = () => 
  <GreyContainer>
    <Row>
      <Col>
        <Card top="68px" bottom="13px">
          <h4>Meu saldo</h4>
          <h1>R$10,00</h1>
          <Link href="/statement"><p>Ver meu extrato</p></Link>
        </Card>
      </Col>
    </Row>
    <Container>
      <Row>
        <Col lg={6}>
        <Section>
            <h3>Receber</h3>
            <p>
              Precisa receber dinheiro de alguma coisa?<br/>
              Fácil e prático, seu dinheiro na sua conta de forma descomplicada.
            </p>
            <Link href="/receive"><Button>Receber</Button></Link>
        </Section>
        </Col>
        <Col lg={6}>
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
    </Container>
    <Footer/>
  </GreyContainer>

export default Home
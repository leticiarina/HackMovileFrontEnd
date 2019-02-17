import Button from "../components/Button"
import Card from "../components/Card"
import Col from "react-bootstrap/Col"
import { GreenContainer } from "../components/Container"
import Form from "react-bootstrap/Form"
import Input from "../components/Input"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

import { connect } from "react-redux"
import { actions, effects, selectors } from "../store/login"

const Link = styled.div`
  color: #ffff;
  font-style: italic;
  text-align: center;

  :hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

const Login = ({ 
  checkPhone,
  onChangePhone,
  phone,
}) => 
  <GreenContainer>
    <Row>
      <Col xs={12}>
        <Card top="193px">
          <h1>Seja bem-vindo!</h1>
          <h4>Para logar, vamos pedir seu número de telefone:</h4>
          <Form>
            <Form.Group>
              <Input
                onChange={(e) => onChangePhone(e.target.value)}
                placeholder="Digite aqui seu número"
                type="number"
                value={phone}
              />
            </Form.Group>
            <Button onClick={checkPhone}>Enviar</Button>
          </Form>
        </Card>
        <Link>
          Não tenho número de celular, e agora?
        </Link>
      </Col>
    </Row>
  </GreenContainer>

const mapStateToProps = (state) => ({
  phone: selectors.getPhone(state),
})

const mapDispatchToProps = (dispatch) => ({
  onChangePhone: (phone) => dispatch(actions.onChangePhone(phone)),
  checkPhone: () => dispatch(effects.checkPhone()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

import { connect } from "react-redux"
import { actions, effects, selectors } from "../../store/login"

const Login = ({ 
  checkPhone,
  onChangePhone,
  phone,
}) => 
  <Row>
    <Col xs={10}>
      <Card>
        <Card.Title>Seja bem-vindo!</Card.Title>
        <Card.Subtitle>
          Para logar, vamos pedir seu número de telefone:
        </Card.Subtitle>
        <Form>
          <Form.Group>
            <Form.Label>Celular</Form.Label>
            <Form.Control
              onChange={(e) => onChangePhone(e.target.value)}
              placeholder="Digite aqui seu número"
              type="number"
              value={phone}
            />
          </Form.Group>
          <Button onClick={checkPhone}>Enviar</Button>
        </Form>
      </Card>
      <a>Não tenho número de celular, e agora?</a>
    </Col>
  </Row>

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

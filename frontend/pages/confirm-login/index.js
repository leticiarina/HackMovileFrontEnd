import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

import { connect } from "react-redux"
import { actions, effects, selectors } from "../../store/login"

const ConfirmLogin = ({ 
  token,
  onChangeToken,
  checkToken,
}) => 
  <Row>
    <Col xs={12}>
      <Card>
        <Card.Title>Quase lá!</Card.Title>
        <Card.Subtitle>
          Queremos confirmar que você é você! <br/>
          Enviamos um código de autenticação para seu número!
        </Card.Subtitle>
      </Card>
      <Form>
        <Form.Group>
          <Form.Control
            onChange={(e) => onChangeToken(e.target.value)}
            placeholder="Digite aqui o código que recebeu"
            type="number"
            value={token}
          />
        </Form.Group>
        <Button
          onClick={checkToken}
        >
         Enviar 
        </Button>
      </Form>
    </Col>
  </Row>

const mapDispatchToProps = (dispatch) => ({
  onChangeToken: (token) => dispatch(actions.onChangeToken(token)),
  checkToken: () => dispatch(effects.checkToken()),
})

const mapStateToProps = (state) => ({
  token: selectors.getToken(state),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmLogin)

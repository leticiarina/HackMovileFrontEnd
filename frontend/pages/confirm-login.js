import Button from '../components/Button';
import Card from '../components/Card';
import Col from 'react-bootstrap/Col';
import { GreenContainer } from '../components/Container';
import Form from 'react-bootstrap/Form';
import Input from '../components/Input';
import Row from 'react-bootstrap/Row';

import { connect } from 'react-redux';
import { actions, effects, selectors } from '../store/login';

const ConfirmLogin = ({ token, onChangeToken, checkToken }) => (
  <GreenContainer>
    <Row>
      <Col xs={12}>
        <Card top="193px">
          <h1>Quase lá!</h1>
          <h4>
            Queremos confirmar que você é você! <br />
            Enviamos um código de autenticação para seu número!
          </h4>
          <Form>
            <Form.Group>
              <Input
                onChange={e => onChangeToken(e.target.value)}
                placeholder="Digite aqui o código que recebeu"
                type="text"
                value={token}
              />
            </Form.Group>
          </Form>
          <Button onClick={checkToken}>Enviar</Button>
        </Card>
      </Col>
    </Row>
  </GreenContainer>
);

const mapDispatchToProps = dispatch => ({
  onChangeToken: token => dispatch(actions.onChangeToken(token)),
  checkToken: () => dispatch(effects.checkToken())
});

const mapStateToProps = state => ({
  token: selectors.getToken(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmLogin);

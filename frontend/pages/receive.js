import Col from "react-bootstrap/Col"
import Button from "../components/Button"
import Input from "../components/Input"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

import { connect } from "react-redux"
import { actions, effects } from "../store/account"

const ValueField = styled(Input)`
  font-size: 2em;
  font-style: normal;
  width: 20vw;
`

const Receive = ({
  createCharge,
  onChangeChargeValue,
}) => 
  <div>
    <Row>
      <Col
        style={{ 
          marginTop: "60px",
          textAlign: "center"
        }}
      >
        <h1>Receber</h1>
        <p>Fale pra gente <b>quanto</b> você precisa receber:</p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{ 
            marginTop: "60px",
            textAlign: "center"
          }}
        >
          <ValueField
            onChange={(e) => onChangeChargeValue(e.target.value)}
            step="0.01"
            type="number"
          />
        </Col>
      </Row>
      <Row>
        <Col
          style={{ 
            marginTop: "54px",
            textAlign: "center"
          }}        
        >
        <Button 
          onClick={createCharge}
        >
          Confirmar
        </Button>
      </Col>
    </Row>
  </div>

const mapDispatchToProps = (dispatch) => ({
  createCharge: () => dispatch(effects.createCharge()),
  onChangeChargeValue: (value) => dispatch(actions.onChangeChargeValue(value)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Receive)

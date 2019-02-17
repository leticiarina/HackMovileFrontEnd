import Col from "react-bootstrap/Col"
import Button from "../components/Button"
import Input from "../components/Input"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

import { connect } from "react-redux"
import { selectors } from "../store/account"

const ConfirmCharge = ({ chargeValue }) => 
  <div>
    <Row>
      <Col
        style={{ 
          marginTop: "60px",
          textAlign: "center"
        }}
      >
        <h1>Receber</h1>
        <p>
          Criamos esta cobrança para você!<br/>
          Você pode enviá-la para quem quiser, ou receber o pagamento usando um leitor de QR code.
        </p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{ 
            marginTop: "30px",
            textAlign: "center"
          }}
        >
          <img src="/static/img/qrcode.png"/>
          <p style={{ fontSize: "2em" }}>R${chargeValue}</p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{ 
            marginTop: "30px",
            textAlign: "center"
          }}        
        >
        <Button>Enviar</Button>
      </Col>
    </Row>
  </div>

const mapStateToProps = (state) => ({
  chargeValue: selectors.getChargeValue(state),
})

export default connect(
  mapStateToProps,
)(ConfirmCharge)

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { connect } from "react-redux"
import { selectors } from "../../store/account"

const operations = [
  "Abertura de conta",
  "Pagamento",
  "Transferência"
]

const Statement = ({ statement }) => 
  <Row>
    <Col
      style={{ 
        marginTop: "60px",
        textAlign: "center"
      }}
    >
      <h1>Extrato</h1>
      <p>Aqui você pode ver as suas últimas transações</p>
      {statement.map((op, index) =>
        <p key={index}>
          <b>{op.date}</b><br/>
          {operations[op.operation]}<br/>
          {op.destiny}<br/>
          {op.value ? `R$${op.value.toFixed(2)}` : null}
        </p>
      )}
    </Col>
  </Row>

const mapStateToProps = state => ({
  statement: selectors.getStatement(state),
})

export default connect(
  mapStateToProps,
)(Statement)

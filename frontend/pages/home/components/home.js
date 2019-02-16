import { connect } from "react-redux" 
import { selectors } from "../store"

const Home = ({ balance }) => 
  <h1>{balance}</h1>

export const mapStateToProps = state => ({
  balance: selectors.getBalance(state),
})

export default connect(
  mapStateToProps
)(Home)
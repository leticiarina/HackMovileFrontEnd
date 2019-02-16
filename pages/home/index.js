import { connect } from "react-redux" 
import { selectors } from "./store"

const Home = ({ title }) => 
  <h1>{title}</h1>

export const mapStateToProps = state => ({
  title: selectors.getTitle(state),
})

export default connect(
  mapStateToProps
)(Home)
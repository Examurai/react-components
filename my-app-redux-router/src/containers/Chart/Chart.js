import { connect } from "react-redux";
import Chart from "../../components/Chart/Chart";
import { random, reset, empty, getChartData } from "../../store/modules/chart";

const mapStateToProps = state => ({
  data: getChartData(state)
});

const mapDispatchToProps = dispatch => ({
  randomData: () => dispatch(random()),
  resetData: () => dispatch(reset()),
  emptyData: () => dispatch(empty())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);

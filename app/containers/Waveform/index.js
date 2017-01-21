/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { LineChart } from 'react-easy-chart';

/* Helpers / Services / Constants */
import { WAVEFORM_DATA_POINTS } from '../Ventilator/constants';

/* Components and Containers */
import TitleContainer from './TitleContainer';
import Wrapper from './Wrapper';

class Waveform extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    color: React.PropTypes.string,
    data: React.PropTypes.array,
    getChartHeight: React.PropTypes.func,
    getChartWidth: React.PropTypes.func,
    title: React.PropTypes.string,
  };

  render() {
    return (
      <Wrapper innerRef={(wrapperEl) => this.wrapperEl = wrapperEl}>
        <TitleContainer title={this.props.title} color={this.props.color} />
        <LineChart
          width={this.props.getChartWidth(this.wrapperEl)}
          height={this.props.getChartHeight(this.wrapperEl)}
          margin={{ top: 25, right: 60, bottom: 5, left: 0 }}
          xDomainRange={[0, WAVEFORM_DATA_POINTS]}
          lineColors={[this.props.color]}
          interpolate={'cardinal'}
          data={this.props.data}
        />
      </Wrapper>
    );
  }
}

const getChartHeight = (wrapperEl) => wrapperEl ? wrapperEl.clientHeight - 6 : 0;
const getChartWidth = (wrapperEl) => wrapperEl ? wrapperEl.clientWidth : 0;

function mapStateToProps(state, ownProps) {
  const data = state.getIn(['game', 'ventilator', 'waveforms', ownProps.name]);
  return {
    color: ownProps.color,
    title: ownProps.title,
    data: [data.map((y, x) => ({ x, y })).toJS()],
    getChartHeight,
    getChartWidth,
  };
}

export default connect(mapStateToProps)(Waveform);

/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { LineChart } from 'react-easy-chart';

/* Helpers / Services / Constants */
import { WAVEFORM_DATA_POINTS } from '../Ventilator/constants';

/* Components */
import Divider from '../../components/Divider';
import Title from './Title';
import Wrapper from './Wrapper';

class Waveform extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    name: React.PropTypes.string,
    color: React.PropTypes.string,
    data: React.PropTypes.array,
    getChartHeight: React.PropTypes.func,
    getChartWidth: React.PropTypes.func,
  };

  render() {
    return (
      <Wrapper innerRef={(wrapperEl) => this.wrapperEl = wrapperEl}>
        <Divider />
        <Title color={this.props.color}>
          {this.props.name}
        </Title>
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

function mapStateToProps(state, ownProps) {
  return {
    name: ownProps.name,
    color: ownProps.color,
    data: [ownProps.data.map((y, x) => ({ x, y }))],
    getChartHeight: (wrapperEl) => wrapperEl ? wrapperEl.clientHeight - 6 : 0,
    getChartWidth: (wrapperEl) => wrapperEl ? wrapperEl.clientWidth : 0,
  };
}

export default connect(mapStateToProps)(Waveform);

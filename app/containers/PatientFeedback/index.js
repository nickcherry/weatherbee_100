/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Components */
import Cell from '../../components/Cell';
import Feedback from './Feedback';
import Row from '../../components/Row';
import Wrapper from './Wrapper';

class PatientFeedback extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    pip: React.PropTypes.number,
    map: React.PropTypes.number,
    peep: React.PropTypes.number,
    ie: React.PropTypes.number,
    freq: React.PropTypes.number,
    tidalVolume: React.PropTypes.number,
    minuteVolume: React.PropTypes.number,
  };

  render() {
    return (
      <Wrapper>
        <Row>
          <Cell>
            <Feedback name="pip" value={this.props.pip} />
          </Cell>
          <Cell>
            <Feedback name="map" value={this.props.map} />
          </Cell>
          <Cell>
            <Feedback name="peep" value={this.props.peep} />
          </Cell>
          <Cell>
            <Feedback name="ie" value={this.props.ie} />
          </Cell>
          <Cell>
            <Feedback name="freq" value={this.props.freq} />
          </Cell>
          <Cell>
            <Feedback name="tidalVolume" value={this.props.tidalVolume} />
          </Cell>
          <Cell>
            <Feedback name="minuteVolume" value={this.props.minuteVolume} />
          </Cell>
        </Row>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const patientFeedback = state.getIn(['game', 'ventilator', 'patientFeedback']);
  return {
    pip: patientFeedback.get('pip'),
    map: patientFeedback.get('map'),
    peep: patientFeedback.get('peep'),
    ie: patientFeedback.get('ie'),
    freq: patientFeedback.get('freq'),
    tidalVolume: patientFeedback.get('tidalVolume'),
    minuteVolume: patientFeedback.get('minuteVolume'),
  };
}

export default connect(mapStateToProps)(PatientFeedback);

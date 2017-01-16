/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

/* Helpers / Services / Constants */
import { selectLocale } from './selectors';

class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    locale: React.PropTypes.string,
    messages: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
  }

  render() {
    return (
      <IntlProvider locale={this.props.locale} key={this.props.locale} messages={this.props.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createSelector(
  selectLocale(),
  (locale) => ({ locale })
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../../Input';
import Tooltip from '../../../Tooltip';
import { setProps } from '../../../../helpers/props';

import * as UI from './styles';
import iconHelp from '../../../../assets/images/icon-help.svg';
import { getDisplayValue } from '../../../../services/mapingInputs';

export default class Field extends Component {
  static propTypes = {
    item: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  };

  static defaultProps = {
    item: {
      label: '',
      value: '',
    },
  };

  renderCustomDisplay = () => {
    const { item, value } = this.props;
    const displayValue = getDisplayValue(item, value);
    const CustomDisplay = item.componentDisplay;
    return <CustomDisplay>{displayValue}</CustomDisplay>;
  };

  renderDisplay = () => {
    const { item, value } = this.props;
    const displayValue = getDisplayValue(item, value);
    if (item.componentDisplay) {
      return this.renderCustomDisplay();
    }
    return <UI.Detail>{displayValue}</UI.Detail>;
  };

  render() {
    const {
      item: {
        label,
        width,
        marginTop,
        marginLeft,
        helpText,
        component,
        isReadOnly,
      },
      value,
      isReadOnly: isReadOnlyMode,

    } = this.props;

		if (this.props.item.componentDisplay)
      return this.renderCustomDisplay();

    return (
      <UI.Container
        style={{
          width: width || 'px',
          marginTop: marginTop || '40px',
          marginLeft: marginLeft || '0px',
        }}
      >
        <UI.LabelContainer>
          <UI.Label>{label}</UI.Label>
          {!(isReadOnlyMode || (isReadOnly && value)) && helpText && (
            <Tooltip popupText={helpText} src={iconHelp} />
          )}
        </UI.LabelContainer>
        {isReadOnlyMode || (isReadOnly && value) ? (
          this.renderDisplay()
        ) : (
          <UI.InputContainer>
            {React.createElement(
              component,
              setProps(this.props.item, this.props),
            )}
          </UI.InputContainer>
        )}
      </UI.Container>
    );
  }
}

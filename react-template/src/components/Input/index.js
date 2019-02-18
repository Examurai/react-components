/* eslint-disable no-return-assign */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import * as UI from './styles';
import iconComplete from '../../assets/images/input-completed.svg';
import { keyCodes, keyValidate } from '../../constants/keyCode';

export default class Input extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    mask: PropTypes.string,
    postfix: PropTypes.string,
    errorMessage: PropTypes.string,
    isRequired: PropTypes.bool,
    value: PropTypes.any,
    lengthText: PropTypes.number,
    isError: PropTypes.bool,
    icon: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    name: '',
    placeholder: 'Заполните поле',
    mask: '',
	  emptyMessage: 'Поле должно быть заполнено',
    validateMessage: '',
    value: '',
    isError: false,
    onChange: () => {},
  };

  input = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
      postfixValue: null,
      isFocus: false,
	    isEmpty: this.props.value === '',
	    isChange: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.value && nextProps.value !== this.state.value)
      this.setState({ value: nextProps.value });
  }
	
	handleKeyDown = event => {
    // console.log(event.keyCode + ' : ' + event.key); // для определения кода клавиш
    const { type } = this.props;
    
    if (type === 'text') {
	    const { lengthText } = this.props;
	    if (!lengthText || event.target.value.length <= lengthText) return;
	    event.preventDefault();
    }
    
    if (type === 'number' && keyCodes.number.includes(event.key)) {
	    const { subtype } = this.props;
	    if (!keyValidate.hasOwnProperty(subtype)) return;
	    if (keyValidate[subtype](event.target.value, event.key)) return;
    }
		event.preventDefault();
  };

  change = event => {
    this.setState({ value: event.target.value }, () => {
	    const { value } = this.state;
	    const { id, onChange } = this.props;
	    if (onChange) onChange(id, value);
    });
  };
  
  getPureValue = value => {
	  const { postfix } = this.props;
	  return postfix ? value.replace(postfix, '') : value;
  };
  
  focus = () => {
    this.input.focus();
    this.setState({ isFocus: true, value: this.getPureValue(this.state.value) });
  };

	blur = () => {
	  const { value } = this.state;
	  const { values, isValidate, parentValidate } = this.props;
		console.log('validate0');
	  if (isValidate) {
	  	console.log('validate1');
		  if (parentValidate) {
			  if (!isValidate(value, values[parentValidate].value)) {
				  this.setState({isFocus: false, isValidate: true, isChange: true, isEmpty: value === ''});
				  return;
			  }
		  } else if (!isValidate(value)) {
			  console.log('validate2');
			  this.setState({isFocus: false, isValidate: true, isChange: true, isEmpty: value === ''});
			  return;
		  }
	  }
	  this.setState({ isFocus: false, isValidate: false, isChange: true, isEmpty: value === '' });
  };
  
  render() {
    const { value, isFocus, isEmpty, isValidate, isChange } = this.state;
    const { placeholder, postfix, emptyMessage, validateMessage, isRequired, icon } = this.props;
    const placeholderInput = (postfix && `_${postfix}`) || placeholder;
    const isShowError = isRequired && (this.props.isError || isChange);
    const isError = isRequired && (isEmpty || isValidate) && isShowError;
	  const isCompleted = value && value !== '' && !isFocus && !isEmpty && !isValidate;

    return (
      <Fragment>
        <UI.Container isFocus={isFocus} isError={isError} onClick={this.focus}>
          <UI.Input
            ref={ref => (this.input = ref)}
            value={isFocus ? value : (value ? `${value}${postfix || ''}` : '')}
            type="text"
            placeholder={placeholderInput}
            isCompleted={isCompleted}
            onChange={this.change}
            onBlur={this.blur}
            onKeyDown={this.handleKeyDown}
          />
          {(isCompleted && <UI.Icon src={iconComplete} />) ||
            (icon && <UI.Icon src={icon} />)}
        </UI.Container>
	      {isShowError &&
		      <UI.Empty>
			      {(isValidate && <UI.ErrorMessage>{validateMessage}</UI.ErrorMessage>) ||
			      (isEmpty && <UI.ErrorMessage>{emptyMessage}</UI.ErrorMessage>)}
		      </UI.Empty>
	      }
      </Fragment>
    );
  }
}

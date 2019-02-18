import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/modules/applications';

import FormInput from '../../components/FormInput';

import * as UI from './styles';

const itemsDefault = [
	{ lable: 'Label 1', value: 'Label 1' },
	{ lable: 'Label 2', value: 'Label 2' },
];

class ProjectInfo extends Component {
  render() {
		const { items } = this.props;
    return(
			items.map((item, idx) => 
				<FormInput key={idx} item={item}/>
			)
    );
  }
}
const mapStateToProps = state => ({
	items: itemsDefault,
});

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actionCreators, dispatch),
)(ProjectInfo);

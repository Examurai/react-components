import React, { Component } from 'react';
import './style.css';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  onCLickButton = (event) => {
    const { click } = this.props;
    if (!click) {
      return;
    }
    click();
  }

  render() {
    const { name } = this.props;
    return (
        <div className="ButtonContainer" onClick={this.onCLickButton}>
          {name || 'Кнопка'}
        </div>
    );
  }
}
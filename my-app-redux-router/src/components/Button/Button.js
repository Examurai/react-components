import React, { Component } from 'react';
import './style.css';

export default class Button extends Component {
  onCLickButton = () => {
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
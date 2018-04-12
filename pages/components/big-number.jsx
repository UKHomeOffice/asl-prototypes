import React from 'react';

class BigNumber extends React.Component {

  render() {
    return <div className="data">
      <span className="data-item bold-xlarge">{ this.props.number }</span>
      <span className="data-item bold-xsmall">{ this.props.label }</span>
    </div>;
  }

}

export default BigNumber;

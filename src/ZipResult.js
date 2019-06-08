import React from 'react';

class ZipResult extends React.Component {

  render() {
    return (
      <div className="container">
        <label>{this.props.City}</label> <br />
        <label>{this.props.State}</label> <br />
        <label>{this.props.EstimatedPopulation}</label> <br />
        <label>{this.props.TotalWages}</label> <br /> <br />
      </div>
    );
  }
}

export default ZipResult;
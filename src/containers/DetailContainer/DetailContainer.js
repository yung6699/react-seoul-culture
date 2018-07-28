import React, { Component } from 'react';
import { Header, Info } from 'components';

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <Header />
        <Info />
      </div>
    );
  }
}

export default DetailContainer;

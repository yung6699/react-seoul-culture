import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { DetailContainer, ListContainer } from 'containers';
import 'antd/dist/antd.min.css';
import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ListContainer} />
        <Route path="/detail/:name?" component={DetailContainer} />
      </div>
    );
  }
}

export default App;

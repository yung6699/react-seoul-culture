import { createStore, applyMiddleware } from 'redux';
import penderMiddleware from 'redux-pender';
import modules from './modules';

const configure = () => {
  const store = createStore(modules, applyMiddleware(penderMiddleware()));
  return store;
};

export default configure;

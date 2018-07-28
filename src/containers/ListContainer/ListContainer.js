import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import * as listActions from 'store/modules/list';
import { Header, List } from 'components';

class ListContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._callApi();
  }


  _callApi = async () => {
    const { getItems, appendItems } = this.props;
    await getItems(300);
    appendItems(10);
    this._scrollEvent(appendItems);
  }


  _handleChange = (e) => {
    const { change } = this.props;
    change([e.target.name, e.target.value]);
  }


  _handleOption = (value) => {
    const { change } = this.props;
    change(['option', value]);
  }

  _scrollEvent = (callback) => {
    window.onscroll = function () {
      if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
        callback(10);
      }
    };
  }

  render() {
    const { sliceItems, option } = this.props;
    return (
      <Layout>
        <Header
          _handleChange={this._handleChange}
          _handleOption={this._handleOption}
          option={option}
        />
        {sliceItems ? <List items={sliceItems} _handleSelected={this._handleSelected} /> : "Loading!!!!!!!!"}
      </Layout>

    );
  }
}

ListContainer.defaultProps = {
  option: 'title',
};

const listStateToProps = state => ({
  sliceItems: state.list.sliceItems,
  option: state.list.option,
  keyword: state.list.keyword,
});

const listDispatchToProps = dispatch => ({
  getItems: sum => dispatch(listActions.getItems(sum)),
  appendItems: sum => dispatch(listActions.appendItems(sum)),
  change: target => dispatch(listActions.change(target)),
  selectedItem: value => dispatch(listActions.selectedItem(value)),
});

export default connect(listStateToProps, listDispatchToProps)(ListContainer);

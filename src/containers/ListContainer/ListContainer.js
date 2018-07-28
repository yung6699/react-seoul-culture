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
    this.test("?????");
  }


  test = async () => {
    const { getItems, appendItems } = this.props;
    await getItems(300);
    appendItems(10);
    this.scrollEvent(appendItems);
  }

  scrollEvent = (callback) => {
    window.onscroll = function () {
      if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
        callback(10);
      }
    };
  }

  render() {
    const { sliceItems } = this.props;
    return (
      <Layout>
        <Header />
        {sliceItems ? <List items={sliceItems} /> : "Loading!!!!!!!!"}
      </Layout>

    );
  }
}


const listStateToProps = state => ({
  sliceItems: state.list.sliceItems,
  option: state.list.option,
  keyword: state.list.keyword,
});

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
const listDispatchToProps = dispatch => ({
  getItems: sum => dispatch(listActions.getItems(sum)),
  appendItems: sum => dispatch(listActions.appendItems(sum)),
  change: target => dispatch(listActions.change(target)),
  selectedItem: value => dispatch(listActions.selectedItem(value)),
});

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다. connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를
// 반환합니다. 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(listStateToProps, listDispatchToProps)(ListContainer);

import React, { Component } from 'react';
import { Info } from 'components';
import './DetailContainer.css';
import { Layout } from 'antd';
import * as listActions from 'store/modules/list';
import { connect } from 'react-redux';



const { Header, Content } = Layout;

class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    const {match } = this.props;
    this._callApi(match.params.name);
  }


  _callApi = async(value) =>{
    const { selectedItem } = this.props;
    await selectedItem(value);
  }

  render() {
    const { selected } = this.props;
    let data = (selected)? selected[0]:undefined;
    return (
      <Layout className="layout">
        { data ? 
          <div>
            <Header>문화 정보</Header>
            <Content>
              <Info data={data}/>
            </Content>
            <footer><a href={data.ORG_LINK}>행사정보 바로가기</a></footer>
          </div>
          : "Loading!!!" }
      </Layout>
    );
  }
}


const DetailStateToProps = (state) => {
  return  {
    selected: state.list.selected,
  };
};

const DetailDispatchToProps = dispatch => ({
  selectedItem: value => dispatch(listActions.selectedItem(value))
});

export default connect(DetailStateToProps, DetailDispatchToProps)(DetailContainer);

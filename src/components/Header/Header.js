import { Layout, Input, Select } from 'antd';
import classNames from 'classnames';
import React from 'react';
import styles from './Header.css';


const cx = classNames.bind(styles);
const { Header: AntdHeader } = Layout;
const { Search } = Input;
const { Option } = Select;


const Header = ({ _handleChange, _handleOption, option }) => {
  const HeaderStyle = {
    padding: '0 20px',
  };

  let template = '';
  if (option) {
    if (option === 'title') {
      template = (
        <Search
          placeholder="input Title text"
          onChange={_handleChange}
          name="title"
          className={cx('search')}
        />
      );
    } else if (option === 'genre') {
      template = (
        <Search
          placeholder="input Genre text"
          onChange={_handleChange}
          name="genre"
          className={cx('search')}
        />
      );
    }
  }

  return (
    <AntdHeader className={cx('header')} style={HeaderStyle}>

      <Select
        className={cx('select')}
        defaultValue="title"
        onChange={_handleOption}
      >
        <Option value="title">명칭</Option>
        <Option value="genre">장르</Option>
      </Select>

      { template }

    </AntdHeader>
  );
};

export default Header;
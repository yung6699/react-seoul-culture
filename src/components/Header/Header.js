import { Layout, Input, Select } from 'antd';
import classNames from 'classnames';
import React from 'react';
import styles from './Header.css';

const cx = classNames.bind(styles);
const { Header: AntdHeader } = Layout;
const { Search } = Input;
const { Option } = Select;

function handleChange(value) {
  console.log(`${value}`);
}

const Header = () => {
  const HeaderStyle = {
    padding: '0 20px',
  };

  return (
    <AntdHeader className={cx('header')} style={HeaderStyle}>

      <Select
        className={cx('select')}
        defaultValue="title"
        onChange={handleChange}
      >

        <Option value="title">명칭</Option>
        <Option value="genre">장르</Option>
        <Option value="date">날짜</Option>

      </Select>

      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        className={cx('search')}
      />

    </AntdHeader>
  );
};

export default Header;
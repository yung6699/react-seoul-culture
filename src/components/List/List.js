import React from 'react';
import { Layout } from 'antd';
import { Item } from 'components';
import classNames from 'classnames';
import styles from './List.css';

const cx = classNames.bind(styles);

const { Content } = Layout;

const List = ({ items }) => {
  return (
    <Content className={cx('List')}>
      {items.map((item, index) => {
        return <Item data={item} key={index} />;
      })}
    </Content>
  );
};

export default List;
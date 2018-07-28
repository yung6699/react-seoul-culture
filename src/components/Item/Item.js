import React from 'react';
import classNames from 'classnames';
import styles from './Item.css';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);
const Item = ({ data }) => {
  const itemStyle = {
    backgroundImage: `url(${data.MAIN_IMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: "100%",
    height: "250px",
  };


  const title = data.TITLE.trim();
  const url = '/detail/' + data.CULTCODE;
  return (
    <Link to={url}>
      <div
        className={cx('item')}
        name={data.CULTCODE}
      >
        <div className={cx('item-wrapper')}>
          <div style={itemStyle} />
          <div className={cx('item-content')}>
            <div className={cx('item-title')}>{title}</div>
            <div>{data.PLACE}</div>
            <div>{data.STRTDATE} ~ {data.END_DATE}</div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default Item;
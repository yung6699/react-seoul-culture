import React from 'react';
import classNames from 'classnames';

import styles from './Info.css';

const cx = classNames.bind(styles);
const Info = () => {
  const itemStyle = {
    backgroundImage: "url(http://culture.seoul.go.kr/data/ci/20180628143503.jpg)",
    backgroundSize: 'cover',
    width: "100%",
    height: "350px",
  };
  return (
    <div className={cx('Info')}>
      <div style={itemStyle} />
      <div className={cx('Info-content')}>
        <div>
          <div>장르</div>
          <div />
        </div>
        <div>
          <div>기간</div>
          <div />
        </div>
        <div>
          <div>시간</div>
          <div />
        </div>
        <div>
          <div>장소</div>
          <div />
        </div>
        <div>
          <div>이용대상</div>
          <div />
        </div>
        <div>
          <div>이용요금</div>
          <div />
        </div>
        <div>
          <div>주최</div>
          <div />
        </div>
        <div>
          <div>문의</div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Info;
import React from 'react';
import classNames from 'classnames';
import styles from './Info.css';

const cx = classNames.bind(styles);
const Info = ({ data }) => {
  const info = data;
  return (

    <div className={cx('Info')}>
      <div className={cx('Info-imgWrap')}>
        <img src={info.MAIN_IMG} alt=""/>
      </div>
      <div className={cx('Info-title')}>
        {info.TITLE}
      </div>
      <div className={cx('Info-content')}>
        <div>
          <div>장르</div>
          <div>{info.CODENAME}</div>
        </div>
        <div>
          <div>기간</div>
          <div>{info.STRTDATE} ~ {info.END_DATE}</div>
        </div>
        <div>
          <div>시간</div>
          <div>{info.TIME}</div>
        </div>
        <div>
          <div>장소</div>
          <div>{info.PLACE}</div>
        </div>
        <div>
          <div>이용대상</div>
          <div>{info.USE_TRGT}</div>
        </div>
        <div>
          <div>이용요금</div>
          <div>{info.USE_FEE}</div>
        </div>
        <div>
          <div>문의</div>
          <div>02-{info.INQUIRY}</div>
        </div>
      </div>
    </div>

  );
};

export default Info;
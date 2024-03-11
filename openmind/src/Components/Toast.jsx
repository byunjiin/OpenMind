import Styles from '../Styles/Toast.module.css';

const Toast = () => {
  return (
    <>
      <p className={`${Styles.toast}`}>URL이 복사되었습니다</p>
    </>
  );
};

export default Toast;

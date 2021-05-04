import './Alert.css';

const Alert = ({text = "A simple info alert!", type = "info"}) => {
  return (
    <div className={`alert alert--${type}`}>
      <div className="alert__text">{text}</div>
      <button className="alert__btn-close">Close</button>
    </div>
  );
};

export default Alert;
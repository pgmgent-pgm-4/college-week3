import Alert from './Alert';

const AlertWarning = ({text = "A simple warning alert!"}) => {
  return (
    <Alert text={text} type="warning" />
  );
};

export default AlertWarning;
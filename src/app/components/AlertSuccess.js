import Alert from './Alert';

const AlertSucces = ({text = "A simple success alert!"}) => {
  return (
    <Alert text={text} type="success" />
  );
};

export default AlertSucces;
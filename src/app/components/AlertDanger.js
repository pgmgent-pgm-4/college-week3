import Alert from './Alert';

const AlertDanger = ({text = "A simple danger alert!"}) => {
  return (
    <Alert text={text} type="danger" />
  );
};

export default AlertDanger;
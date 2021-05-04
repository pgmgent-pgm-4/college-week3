const SplitPane = ({children, left, right}) => {
  return (
    <div className="split-pane">
      <div className="split-pane__introduction">
        {children}
      </div>
      <div className="split-pane__left">
        {left}
      </div>
      <div className="split-pane__right">
        {right}
      </div>
    </div>
  );
};

export default SplitPane;
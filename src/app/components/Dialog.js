const Dialog = ({title, children}) => {
  return (
    <div className="dialog">
      <div className="dialog__title">
        {title}
      </div>
      <div className="dialog__message">
        {children}
      </div>
    </div>
  )
};

export default Dialog;
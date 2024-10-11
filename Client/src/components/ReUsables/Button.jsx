const Button = ({ children, onClick, style, type }) => {
  return (
    <button className={style} onClick={onClick} typeof={type}>
        {children}
    </button>
  )
}

export default Button
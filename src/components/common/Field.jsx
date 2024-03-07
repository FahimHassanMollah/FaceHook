/* eslint-disable react/prop-types */
const Field = ({label,children,htmlFor,error}) => {
  return (
    <div className="form-control">
        <label htmlFor={htmlFor} className="auth-label">
            {label}
        </label>
        {children}
        {!!error && <div role="alert" className='text-red-600'>{error?.message}</div>}
    </div>
  )
}

export default Field
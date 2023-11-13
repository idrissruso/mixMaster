function Button({ r, children }) {
  const rounded = r ? 'rounded-r-md' : 'rounded-md'

  return (
    <button
      type="submit"
      className={`bg-green-500 px-3 py-1 text-white ${rounded} hover:bg-green-700 transition-all duration-300`}
    >
      {children}
    </button>
  )
}

export default Button

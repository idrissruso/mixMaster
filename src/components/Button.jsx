function Button({ r, children, type }) {
  const rounded = r ? 'rounded-r-md' : 'rounded-md'
  const base = `bg-green-500 px-3 py-1 text-white ${rounded} transition-all duration-300`

  const styles =
    type === 'btn'
      ? base + ' hover:bg-green-700'
      : base + ' text-stone-600 cursor-text'

  return (
    <button type="submit" className={styles}>
      {children}
    </button>
  )
}

export default Button

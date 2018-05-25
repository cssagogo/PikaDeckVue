export default (value) => {
  const date = new Date(value)
  // TODO: Check browser support of toLocaleString
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}

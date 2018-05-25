export default (value) => {
  const dateTime = new Date(value)
  // TODO: Check browser support of toLocaleString
  return dateTime.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

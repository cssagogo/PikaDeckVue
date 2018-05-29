export default (value) => {
  return value.toLowerCase().replace(/[\W_]+/g, ' ').replace(' ', '-')
}

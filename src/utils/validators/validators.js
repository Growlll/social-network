export const required = value => {
  if (value) return undefined

  return "This field is required"
}

export const minLength = (length) => value => {
  if (value.length < length) return `Min length ${length} symbols`

  return ''
}

export const maxLength = (length) => value => {
  if (value.length > length) return `Max length ${length} symbols`

  return ''
}


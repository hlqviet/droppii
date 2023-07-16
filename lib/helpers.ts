export const createQueryString = (props: {
  name: string
  value: string
  searchParams: string
}) => {
  const { name, value, searchParams } = props

  const params = new URLSearchParams(searchParams)

  if (!value) {
    params.delete(name)
  } else {
    params.set(name, value)
  }

  return params.toString()
}

import { omitBy } from 'lodash'

import { API_ROOT, GOOGLE_API_KEY } from '@/lib/constants'
import { Font } from '@/lib/models'

export const getFonts = async (
  options: {
    subset?: string
    capability?: string
  } = {}
) => {
  const searchParams = new URLSearchParams({
    sort: 'trending',
    ...omitBy(options, (value) => !value)
  })

  const response = await fetch(
    `${API_ROOT}?key=${GOOGLE_API_KEY}&${searchParams.toString()}`
  )
  const data = await response.json()

  return data.items as Font[]
}

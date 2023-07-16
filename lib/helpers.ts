import { API_ROOT, GOOGLE_API_KEY } from '@/lib/constants'
import { Font } from '@/lib/models'

export const getFonts = async (options?: {
  subset?: string
  capability?: string
}) => {
  const params = options ? new URLSearchParams(options).toString() : ''
  const response = await fetch(`${API_ROOT}?key=${GOOGLE_API_KEY}${params}`)
  const data = await response.json()

  return data.items as Font[]
}

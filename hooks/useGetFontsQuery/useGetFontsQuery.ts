import { useEffect, useState } from 'react'

import { getFonts } from '@/lib/helpers'
import { Font } from '@/lib/models'

interface UseGetFontsQuery {
  options?: Parameters<typeof getFonts>[0]
}

const useGetFontsQuery = (props: UseGetFontsQuery = {}) => {
  const { options } = props
  const [loading, setLoading] = useState(false)
  const [fonts, setFonts] = useState<Font[]>([])
  const [error, setError] = useState<Error | undefined>()
  const optionStr = JSON.stringify(options)

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      try {
        const data = await getFonts(options)

        setFonts(data)
        setError(undefined)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionStr])

  return { loading, fonts, error }
}

export default useGetFontsQuery

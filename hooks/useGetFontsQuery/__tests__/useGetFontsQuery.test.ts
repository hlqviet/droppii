import { renderHook, waitFor } from '@testing-library/react'

import useGetFontsQuery from '@/hooks/useGetFontsQuery'
import { getFonts } from '@/lib/helpers'

jest.mock('@/lib/helpers')

describe(useGetFontsQuery.name, () => {
  it('should return fonts when the query is successful', async () => {
    ;(getFonts as jest.Mock).mockResolvedValue([{ family: 'Roboto' }])

    const { result } = renderHook(() => useGetFontsQuery())

    await waitFor(() =>
      expect(result.current).toMatchObject({
        loading: false,
        fonts: [{ family: 'Roboto' }]
      })
    )
  })

  it('should return an error when the query fails', async () => {
    ;(getFonts as jest.Mock).mockRejectedValue(new Error('test error'))

    const { result } = renderHook(() => useGetFontsQuery())

    await waitFor(() =>
      expect(result.current).toMatchObject({
        loading: false,
        fonts: [],
        error: new Error('test error')
      })
    )
  })
})

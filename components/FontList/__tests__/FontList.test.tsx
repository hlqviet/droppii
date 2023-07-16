import { render, screen } from '@testing-library/react'

import FontList from '@/components/FontList'
import useGetFontsQuery from '@/hooks/useGetFontsQuery'
import { PreviewTextType } from '@/lib/enums'
import { useStore } from '@/store/useStore'

jest.mock('@/hooks/useGetFontsQuery').mock('@/store/useStore')

describe(FontList.name, () => {
  it('should render an error when the query fails', () => {
    ;(useGetFontsQuery as jest.Mock).mockReturnValue({
      loading: false,
      fonts: [],
      error: new Error('test error')
    })
    ;(useStore as unknown as jest.Mock).mockReturnValue({
      query: '',
      preview: {
        size: 40,
        text: '',
        type: PreviewTextType.Sentence
      }
    })

    render(<FontList />)

    expect(screen.getByText('test error')).toBeInTheDocument()
  })

  it('should render a progress when the query is still loading', () => {
    ;(useGetFontsQuery as jest.Mock).mockReturnValue({
      loading: true,
      fonts: []
    })
    ;(useStore as unknown as jest.Mock).mockReturnValue({
      query: '',
      preview: {
        size: 40,
        text: '',
        type: PreviewTextType.Sentence
      }
    })

    render(<FontList />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should render the font list when the query is successful', () => {
    ;(useGetFontsQuery as jest.Mock).mockReturnValue({
      loading: false,
      fonts: [{ family: 'Roboto', category: 'serif' }]
    })
    ;(useStore as unknown as jest.Mock).mockReturnValue({
      query: '',
      preview: {
        size: 40,
        text: '',
        type: PreviewTextType.Sentence
      },
      categories: ['serif'],
      subset: '',
      variableOnly: false
    })

    render(<FontList />)

    expect(screen.getByText('Roboto')).toBeInTheDocument()
  })
})

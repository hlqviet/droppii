import { PreviewTextType } from '@/lib/enums'

type State = {
  query: string
  preview: {
    size: number
    text: string
    type: PreviewTextType
  }
}

export const initialState: State = {
  query: '',
  preview: {
    size: 40,
    text: '',
    type: PreviewTextType.Sentence
  }
}

export const createPreviewSlice = (set: (state: Partial<State>) => void) => ({
  ...initialState,
  setQuery: (query: string) => set({ query }),
  setPreview: (preview: State['preview']) => set({ preview })
})

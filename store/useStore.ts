import { create } from 'zustand'

import {
  createFontFilterSlice,
  initialState as fontFilterInitialState
} from '@/store/fontFilterSlice'
import {
  createPreviewSlice,
  initialState as previewInitialState
} from '@/store/previewSlice'

type UseStore = ReturnType<typeof createPreviewSlice> &
  ReturnType<typeof createFontFilterSlice> & {
    reset: () => void
  }

export const useStore = create<UseStore>((set) => ({
  reset: () => set({ ...previewInitialState, ...fontFilterInitialState }),
  ...createPreviewSlice(set),
  ...createFontFilterSlice(set)
}))

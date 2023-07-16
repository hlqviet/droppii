import { create } from 'zustand'

import {
  createPreviewSlice,
  initialState as previewInitialState
} from '@/store/previewSlice'

type UseBoundStore = ReturnType<typeof createPreviewSlice> & {
  reset: () => void
}

export const useBoundStore = create<UseBoundStore>((set) => ({
  reset: () => set({ ...previewInitialState }),
  ...createPreviewSlice(set)
}))

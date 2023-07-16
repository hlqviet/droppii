import categories from '@/data/categories.json'

type State = {
  categories: string[]
  subset: string
  variableOnly: boolean
}

export const initialState: State = {
  categories: categories.map(({ value }) => value),
  subset: '',
  variableOnly: false
}

export const createFontFilterSlice = (
  set: (state: Partial<State>) => void
) => ({
  ...initialState,
  setCategories: (categories: string[]) => set({ categories }),
  setSubset: (subset: string) => set({ subset }),
  setVariableOnly: (variableOnly: boolean) => set({ variableOnly })
})

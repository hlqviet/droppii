import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CategoryFilter from '@/components/Toolbar/components/CategoryFilter'
import { useStore } from '@/store/useStore'

jest.mock('@/store/useStore')

describe(CategoryFilter.name, () => {
  it('should call setCategories when an item is clicked', async () => {
    const user = userEvent.setup()
    const setCategories = jest.fn()

    ;(useStore as unknown as jest.Mock).mockReturnValue({
      categories: ['serif'],
      setCategories
    })

    render(<CategoryFilter />)

    await user.click(screen.getByRole('button'))
    await user.click(screen.getByRole('option', { name: 'Serif' }))

    expect(setCategories).toHaveBeenCalledWith([])
  })
})

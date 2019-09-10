import SudokuUtils from '@/utils/sudoku.utils'

describe('sudoku.utils', () => {
    it('should create an empty array with 9 elements', () => {
        const result = SudokuUtils.generateEmptyGrid()
        expect(result).toHaveLength(9)
      })
})
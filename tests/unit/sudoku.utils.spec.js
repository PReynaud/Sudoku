import SudokuUtils from '@/utils/sudoku.utils'
import cloneDeep from 'lodash/cloneDeep'

describe('sudoku.utils', () => {
    const validGrid = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [3, 1, 2, 6, 4, 5, 9, 7, 8],
        [6, 4, 5, 9, 7, 8, 3, 1, 2],
        [9, 7, 8, 3, 1, 2, 6, 4, 5],
        [2, 3, 1, 5, 6, 4, 8, 9, 7],
        [5, 6, 4, 8, 9, 7, 2, 3, 1],
        [8, 9, 7, 2, 3, 1, 5, 6, 4]
    ]

    it('should create an empty array with 9 elements', () => {
        const result = SudokuUtils.generateEmptyGrid()
        expect(result).toHaveLength(9)
        expect(result[0]).toHaveLength(9)
        expect(result[1]).toHaveLength(9)
        expect(result[2]).toHaveLength(9)
        expect(result[3]).toHaveLength(9)
        expect(result[4]).toHaveLength(9)
        expect(result[5]).toHaveLength(9)
        expect(result[6]).toHaveLength(9)
        expect(result[7]).toHaveLength(9)
        expect(result[8]).toHaveLength(9)
    })

    it('should select the row given in param', () => {
        const firstRow = SudokuUtils.selectRow(validGrid, 0)
        expect(firstRow).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

        const secondRow = SudokuUtils.selectRow(validGrid, 1)
        expect(secondRow).toEqual([4, 5, 6, 7, 8, 9, 1, 2, 3])

        const thirdRow = SudokuUtils.selectRow(validGrid, 2)
        expect(thirdRow).toEqual([7, 8, 9, 1, 2, 3, 4, 5, 6])

        const fourthRow = SudokuUtils.selectRow(validGrid, 3)
        expect(fourthRow).toEqual([3, 1, 2, 6, 4, 5, 9, 7, 8])

        const lastRow = SudokuUtils.selectRow(validGrid, 8)
        expect(lastRow).toEqual([8, 9, 7, 2, 3, 1, 5, 6, 4])
    })

    it('should check if a row is valid', () => {
        const grid = cloneDeep(validGrid)
        expect(SudokuUtils.checkRow(grid, 0)).toBe(true)

        grid[0] = [1, 1, 3, 4, 5, 6, 7, 8, 9]
        expect(SudokuUtils.checkRow(grid, 0)).toBe(false)
        
        grid[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        grid[1] = [1, 5, 6, 7, 8, 9, 1, 2, 3]
        expect(SudokuUtils.checkRow(grid, 0)).toBe(false)
    })
})
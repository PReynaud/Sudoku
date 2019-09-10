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

    it('should select the column given in param', () => {
        const firstColumn = SudokuUtils.selectColumn(validGrid, 0)
        expect(firstColumn).toEqual([1, 4, 7, 3, 6, 9, 2, 5, 8])

        const secondColumn = SudokuUtils.selectColumn(validGrid, 1)
        expect(secondColumn).toEqual([2, 5, 8, 1, 4, 7, 3, 6, 9])

        const thirdColumn = SudokuUtils.selectColumn(validGrid, 2)
        expect(thirdColumn).toEqual([3, 6, 9, 2, 5, 8, 1, 4, 7])

        const fourthColumn = SudokuUtils.selectColumn(validGrid, 3)
        expect(fourthColumn).toEqual([4, 7, 1, 6, 9, 3, 5, 8, 2])

        const lastColumn = SudokuUtils.selectColumn(validGrid, 8)
        expect(lastColumn).toEqual([9, 3, 6, 8, 2, 5, 7, 1, 4])
    })

    it('should check if a column is valid', () => {
        const grid = cloneDeep(validGrid)
        expect(SudokuUtils.checkColumn(grid, 0)).toBe(true)

        grid[0] = [1, 2, 3, 1, 5, 6, 7, 8, 9]
        expect(SudokuUtils.checkColumn(grid, 0)).toBe(false)
        
        grid[0] = [1, 2, 3, 4, 5, 6, 2, 8, 9]
        expect(SudokuUtils.checkColumn(grid, 0)).toBe(false)
    })

    it('should check if a sector is valid', () => {
        const grid = cloneDeep(validGrid)
        expect(SudokuUtils.checkSector(grid, 0)).toBe(true)

        grid[0] = [1, 2, 3, 1, 5, 6, 7, 8, 9]
        expect(SudokuUtils.checkSector(grid, 0)).toBe(false)
        
        grid[0] = [1, 2, 3, 4, 2, 6, 7, 8, 9]
        expect(SudokuUtils.checkSector(grid, 0)).toBe(false)
    })
})
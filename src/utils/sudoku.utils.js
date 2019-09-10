import uniq from 'lodash/uniq'

export default {
    generateEmptyGrid() {
        const grid = []
        for (let i = 0; i < 9; i++) {
            grid.push(new Array(9))
        }
        return grid;
    },

    selectRow(grid, rowIndex) {
        // To select a row we must take the same sub-array indexes of a group of 3
        const firstIndexOfRowsToSelect = Math.floor(rowIndex / 3) * 3
        const firstIndexOfArraysToSelect = (rowIndex % 3) * 3
        const result = []
        for (let i = firstIndexOfRowsToSelect; i < firstIndexOfRowsToSelect + 3; i++) {
            for (let j = firstIndexOfArraysToSelect; j < firstIndexOfArraysToSelect + 3; j++) {
                result.push(grid[i][j])
            }
        }
        return result
    },

    checkRow(grid, indexOfRowToCheck) {
        const rowToCheck = this.selectRow(grid, indexOfRowToCheck)
        return rowToCheck.length === uniq(rowToCheck).length
    }, 
    
    checkColumn() {

    },

    checkSector() {
        
    }
}
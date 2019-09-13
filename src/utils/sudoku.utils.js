import uniq from 'lodash/uniq'
import cloneDeep from 'lodash/cloneDeep'
import forEach from 'lodash/forEach'

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

    selectColumn(grid, columnIndex) {
        // to select a column we take the same index in (modulo 3) row
        const firstIndexOfRowsToSelect = Math.floor(columnIndex / 3)
        const firstIndexOfArraysToSelect = (columnIndex % 3)

        const result = []
        for (let i = firstIndexOfRowsToSelect; i < 9; i = i + 3) {
            for (let j = firstIndexOfArraysToSelect; j < 9; j = j + 3) {
                result.push(grid[i][j])
            }
        }
        return result
    },

    checkColumn(grid, indexOfColumnToCheck) {
        const columnToCheck = this.selectColumn(grid, indexOfColumnToCheck)
        return columnToCheck.length === uniq(columnToCheck).length
    },

    checkSector(grid, indexOfSectorToCheck) {
        const sectorToCheck = grid[indexOfSectorToCheck]
        return sectorToCheck.length === uniq(sectorToCheck).length
    },

    gridToObject(stringToConvert) {
        return stringToConvert.map(sectors => {
            return sectors.map(value => ({
                startValue: false,
                color: null,
                value
            }))
        })
    },

    objectToGrid(gridToConvert) {
        return gridToConvert.map(sectors => {
            return sectors.map(valueObject => valueObject.value)
        })
    }
}
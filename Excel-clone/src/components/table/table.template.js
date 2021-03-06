import {toInlineStyles} from '@core/utils'
import {defaultStyles} from '@/constants'
import {parse} from '@core/parse'

const CODES = {
	A: 65,
	Z: 90
}

const DEFAULT_WIDTH = 120
const DEFAULT_HEIGHT = 24

function getWidth(state, index) {
	return (state[index] || DEFAULT_WIDTH) + 'px'
}

function getHeight(state, index) {
	return (state[index] || DEFAULT_HEIGHT) + 'px'
}

function toCell(row, state) {
	return function(_, col) {
		const id = `${row}:${col}`
		const width = getWidth(state.colState, col)
		const data = state.dataState[id]
		const styles = toInlineStyles({...defaultStyles, ...state.stylesState[id]})
		return `
			<div 
				class="table__cell" 
				data-type="cell"
				data-col="${col}" 
				data-id="${id}" 
				data-value="${data || ''}"
				contenteditable
				style="${styles}; width: ${width}"
			>
			${parse(data) || ''}
			</div>
		`
	}
}

function toColumn({col, index, width}) {
	return `
		<div 
			class="table__column" 
			data-type="resizable" 
			data-col="${index}" 
			style="width: ${width}"
		>
			${col}
			<div class="table__column--resize" data-resize="col"></div>
		</div>
	`
}

function createRow(index, content, state) {
	const resize = index 
		? `<div class="table__row--resize" data-resize="row"></div>` 
		: ''
	const height = getHeight(state, index)
	return `
		<div 
			class="table__row" 
			data-type="resizable"
			data-row="${index}"
			style="height: ${height}"
		>

			<div class="table__row-info">
				${index ? index : ''}
				${resize}
			</div>

			<div class="table__data">${content}</div>

		</div>
	`
}

function toChar(_, index) {
	return String.fromCharCode( CODES.A + index)
}


function withWidthFrom(state) {
	return function(col, index) {
		return {
			col, index, width: getWidth(state.colState, index)
		}
	}
}

export function createTable(rowsCount = 15, state) {
	const colsCount = CODES.Z - CODES.A + 1
	const rows = []

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(withWidthFrom(state))
		.map(toColumn)
		.join('')

	rows.push(createRow('', cols, {}))
	
	for (let row = 0; row < rowsCount; row++) {
		const cells = new Array(colsCount)
			.fill('')
			.map(toCell(row, state))
			.join('')

		rows.push(createRow(row+1, cells, state.rowState))
	}

	return rows.join('')
}
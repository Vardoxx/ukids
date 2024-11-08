import { createSlice } from '@reduxjs/toolkit'
import { TOptionalDisplayTheme } from '../../types/optional-display.types'

interface IInitialState {
	theme: TOptionalDisplayTheme
	columnCount: number
	stoneCount: number
}

const initialState: IInitialState = {
	theme: 'white',
	columnCount: 10,
	stoneCount: 5,
}

export const optionalDisplaySlice = createSlice({
	name: 'optional_display',
	initialState,
	reducers: {
		theme: (state, action) => {
			state.theme = action.payload
		},
		columnCount: (state, action) => {
			state.columnCount = action.payload
		},
		stoneCount: (state, action) => {
			state.stoneCount = action.payload
		},
	},
})

export default optionalDisplaySlice.reducer

export const { theme, columnCount, stoneCount } = optionalDisplaySlice.actions

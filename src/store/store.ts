import { combineReducers, configureStore } from '@reduxjs/toolkit'
import optionalDisplaySliceReducer from './slices/optional-display.slice'

const reducers = combineReducers({
	optionalDisplay: optionalDisplaySliceReducer,
})

export const store = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

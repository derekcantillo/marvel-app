import { combineReducers, configureStore } from '@reduxjs/toolkit'
import votingSlice from './voting/votingSlice'

const combinedReducers = combineReducers({
	voting: votingSlice
})

export const store = configureStore({
	reducer: combinedReducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

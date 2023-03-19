import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { votingState } from '../../interfaces/store'
const storedData = localStorage.getItem('heroes')

const initialState: votingState = {
	heroes: JSON.parse(storedData || '[]')
}
export const votingSlice = createSlice({
	name: 'voting',
	initialState,
	reducers: {
		likeHero: (state, { payload }: PayloadAction<string>) => {
			const hero = state.heroes.find(hero => hero.id === payload)
			hero && hero.likes ? hero.likes++ : hero && (hero.likes = 1)
			localStorage.setItem('heroes', JSON.stringify(state.heroes))
		},
		dislikeHero: (state, { payload }: PayloadAction<string>) => {
			const hero = state.heroes.find(hero => hero.id === payload)
			hero && hero.dislikes ? hero.dislikes++ : hero && (hero.dislikes = 1)
			localStorage.setItem('heroes', JSON.stringify(state.heroes))
		}
	}
})

export const { likeHero, dislikeHero } = votingSlice.actions
export default votingSlice.reducer

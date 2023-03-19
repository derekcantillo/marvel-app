import { useEffect, useState } from 'react'
import { Hero } from '../interfaces/heroes'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
export const useHero = (id: string) => {
	const { heroes } = useSelector((state: RootState) => state.voting)
	const [hero, setHero] = useState<Hero | undefined>({
		id: '',
		alter_ego: '',
		characters: '',
		first_appearance: '',
		image: '',
		publisher: '',
		superhero: '',
		likes: 0,
		dislikes: 0
	})
	const getHeroById = () => {
		setHero(heroes.find(hero => hero.id === id))
	}
	useEffect(() => {
		getHeroById()
	}, [id, heroes])

	return { hero }
}

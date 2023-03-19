import React, { useEffect, useState } from 'react'
import { Typography } from '../typography/Typography'
import { Icon } from '../icon/Icon'
import { icons } from '../../interfaces/media'
import clsx from 'clsx'
import { Button } from '../button/Button'
import { useLocation } from 'react-router-dom'
import { useHero } from '../../hooks/useHero'
import { useDispatch } from 'react-redux'
import { dislikeHero, likeHero } from '../../store/voting/votingSlice'

export const VoteCard = () => {
	const [voteState, setVoteState] = useState<null | 'like' | 'dislike'>(null)
	const location = useLocation()
	const dispatch = useDispatch()
	const { hero } = useHero(location.pathname.replace('/', ''))
	useEffect(() => {
		console.log(hero)
	}, [location])

	return (
		<div className="w-[500px] h-[500px] flex flex-col justify-between">
			<div
				className="h-full flex flex-col justify-between p-6"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
			>
				{voteState ? (
					<>
						<Typography type="subtitle" className="text-start text-[34px]">
							Hero - <b>{hero?.superhero}</b>
						</Typography>
						<div className="flex flex-row gap-2">
							<div
								className={clsx(
									'w-28 h-28 p-1',
									{
										'bg-primary': voteState === 'like'
									},
									{
										'bg-secondary': voteState === 'dislike'
									}
								)}
							>
								<Icon
									src={voteState === 'like' ? icons.thumbsUp : icons.thumbsDown}
									className="text-white w-full h-full"
									fillPath
								/>
							</div>
							<Typography type="title" className="text-xl text-start">
								{' '}
								Tu voto ha sido registrado!
							</Typography>
						</div>
						<Typography type="paragraph" className="text-white text-start">
							{hero?.characters} - {hero?.publisher} - {hero?.first_appearance}{' '}
							- {hero?.alter_ego}
						</Typography>
						<div className="flex w-full items-center justify-center">
							<Button
								label="<< Volver a votar"
								onClick={() => setVoteState(null)}
							/>
						</div>
					</>
				) : (
					<>
						<div>
							<Typography type="paragraph" className="text-white text-start">
								Dinos tu opinión sobre
							</Typography>
							<Typography type="title" className="text-white text-start">
								{hero?.superhero}?
							</Typography>
						</div>
						<Typography type="subtitle" className="text-white text-start">
							{hero?.characters} - {hero?.publisher} - {hero?.first_appearance}{' '}
							- {hero?.alter_ego}
						</Typography>
						<Typography type="subtitle" className="text-white text-start">
							¿Cuál es tu voto?
						</Typography>
						<div className="h-16 flex justify-between w-full">
							<button
								className="w-[50%] h-full border-none border-white bg-primary  flex flex-row justify-center items-center gap-2"
								onClick={() => {
									setVoteState('like')
									dispatch(likeHero(hero?.id as string))
								}}
							>
								<div className="w-12 h-12">
									<Icon
										src={icons.thumbsUp}
										className="text-white w-full h-full"
										fillPath
									/>
								</div>
							</button>
							<button
								className="w-[50%] bg-secondary  flex flex-row justify-center items-center gap-2"
								onClick={() => {
									setVoteState('dislike')
									dispatch(dislikeHero(hero?.id as string))
								}}
							>
								<div className="w-12 h-12">
									<Icon
										src={icons.thumbsDown}
										className="text-white w-full h-full"
										fillPath
									/>
								</div>
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

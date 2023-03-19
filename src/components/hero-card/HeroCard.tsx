import React from 'react'
import { Typography } from '../typography/Typography'
import { Icon } from '../icon/Icon'
import { icons } from '../../interfaces/media'
import { Button } from '../button/Button'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { percentage } from '../../helpers/percentage'

interface HeroCardProps {
	title: string
	description: string
	image: string
	id: string
	likes: number
	dislikes: number
	totalVotes: number
}
export const HeroCard = ({
	title,
	description,
	image,
	id,
	likes,
	dislikes,
	totalVotes
}: HeroCardProps) => {
	const navigate = useNavigate()
	const isPositive = (): boolean => {
		const percentLikes = Number(percentage(likes, totalVotes))
		const percentDislikes = Number(percentage(dislikes, totalVotes))

		if (percentLikes > percentDislikes) {
			return false
		}
		return true
	}

	return (
		<div
			className={clsx(' relative h-[500px] mt-5 flex flex-col justify-end ')}
		>
			<div className="relative w-full h-full">
				<img
					src={image}
					className="relative w-full h-full object-cover object-top  top-0"
				/>
			</div>
			<div className="flex flex-row items-start justify-start bottom-16 pr-10 absolute w-full">
				<div
					className={clsx(
						{ 'w-8 h-8 bg-primary p-1': isPositive() },
						{ 'w-8 h-8 bg-secondary p-1': !isPositive() }
					)}
				>
					<Icon
						src={isPositive() ? icons.thumbsUp : icons.thumbsDown}
						className="text-white w-full h-full"
						fillPath
					/>
				</div>
				<div className="flex flex-col gap-4 w-full">
					<Typography type="title" className="text-white">
						{title}
					</Typography>
					<Typography
						type="paragraph"
						className="text-white line-clamp-2 leading-4"
					>
						{description}
					</Typography>
					<div className="flex flex-row w-full justify-between">
						<Button
							label="Ver detalle"
							onClick={() => {
								navigate(`/${id}`)
								window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
							}}
						/>
						<Typography type="paragraph" className="text-white">
							1 mes atrás
						</Typography>
					</div>
				</div>
			</div>

			<div className="absolute h-12 flex flex-row justify-between w-full">
				<div
					className="bg-primary opacity-80 flex flex-row justify-start items-center gap-2 px-2"
					style={{ width: `${percentage(totalVotes, likes)}%` }}
				>
					<div className="w-6 h-6">
						<Icon
							src={icons.thumbsUp}
							className="text-white w-full h-full"
							fillPath
						/>
					</div>
					<h1 className="text-white">{percentage(totalVotes, likes)}%</h1>
				</div>
				<div
					className="bg-secondary opacity-80 flex flex-row justify-start items-center gap-2"
					style={{ width: `${percentage(totalVotes, dislikes)}%` }}
				>
					<div className="w-6 h-6">
						<Icon
							src={icons.thumbsDown}
							className="text-white w-full h-full"
							fillPath
						/>
					</div>
					<h1 className="text-white">{percentage(totalVotes, dislikes)}%</h1>
				</div>
			</div>
		</div>
	)
}

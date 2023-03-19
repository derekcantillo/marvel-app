import React, { useEffect } from 'react'
import { VoteCard } from '../votation/VoteCard'
import { Navbar } from '../navbar/Navbar'
import { Icon } from '../icon/Icon'
import { icons } from '../../interfaces/media'
import { Typography } from '../typography/Typography'
import { useLocation } from 'react-router-dom'
import { useHero } from '../../hooks/useHero'
import { percentage } from '../../helpers/percentage'

export const HeroBanner = (): JSX.Element => {
	const location = useLocation()
	const { hero } = useHero(location.pathname.replace('/', ''))
	const totalVotes =
		hero?.likes && hero.dislikes && hero?.likes + hero?.dislikes

	return (
		<div className="relative flex h-[750px] content-center items-center justify-center pt-8 pb-32">
			<div
				className={`absolute top-0 h-full w-full  bg-cover bg-center`}
				style={{ backgroundImage: `url(${hero && hero.image && hero.image})` }}
			/>
			<div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
			<div className="max-w-8xl container relative mx-auto h-full">
				<div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 top-0 px-24 ">
					<Navbar />
				</div>
				<div className=" absolute flex flex-wrap items-center bottom-0">
					<div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
						<VoteCard />
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 h-16 flex w-full">
				<div
					className="w-[50%] bg-primary opacity-60 flex flex-row justify-end items-center gap-2 px-3"
					style={{
						width: `${percentage(
							totalVotes as number,
							hero?.likes as number
						)}%`
					}}
				>
					<div className="w-12 h-12">
						<Icon
							src={icons.thumbsUp}
							className="text-white w-full h-full"
							fillPath
						/>
					</div>
					<Typography type="title" className="text-white">
						{percentage(totalVotes as number, hero?.likes as number)}%
					</Typography>
				</div>
				<div
					className="w-[50%] bg-secondary opacity-60 flex flex-row justify-start items-center gap-2 px-3"
					style={{
						width: `${percentage(
							totalVotes as number,
							hero?.dislikes as number
						)}%`
					}}
				>
					<Typography type="title" className="text-white">
						{percentage(totalVotes as number, hero?.dislikes as number)}%
					</Typography>
					<div className="w-12 h-12">
						<Icon
							src={icons.thumbsDown}
							className="text-white w-full h-full"
							fillPath
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

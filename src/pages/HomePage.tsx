import React from 'react'
import { HeroBanner } from '../components/hero-banner/HeroBanner'
import { HeroCard } from '../components/hero-card/HeroCard'
import { Typography } from '../components/typography/Typography'
import { Icon } from '../components/icon/Icon'
import { icons } from '../interfaces/media'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const HomePage = () => {
	const { heroes } = useSelector((state: RootState) => state.voting)
	return (
		<div className="w-screen h-screen px-40">
			<HeroBanner />
			<div className="w-full px-32 py-12 flex flex-col gap-12">
				<div className="w-full h-20 bg-gray flex items-center px-5">
					<div className="basis-11/12">
						<Typography type="subtitle" className="!text-black">
							Super Heroes
						</Typography>
						<Typography type="title" className="!text-lg !text-black">
							Super Heroes
						</Typography>
					</div>
					<div>
						<Typography type="paragraph" className="line-clamp-2 !text-black">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here,
							content here', making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on
							purpose (injected humour and the like).
						</Typography>
					</div>
					<div className="w-26 h-26">
						<Icon src={icons.closeIcon} className="w-full h-full " />
					</div>
				</div>
				<Typography type="subtitle" className="text-5xl font-title !text-black">
					Super Heroes anteriores
				</Typography>
				<div className="grid grid-cols-2 w-full gap-5">
					{heroes.map(hero => (
						<HeroCard
							title={hero.superhero}
							description={hero.characters}
							image={hero.image}
							id={hero.id}
							likes={hero.likes}
							dislikes={hero.dislikes}
							totalVotes={hero.likes + hero.dislikes}
							key={hero.id}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

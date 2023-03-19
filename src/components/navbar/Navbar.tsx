import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { Icon } from '../icon/Icon'
import { icons } from '../../interfaces/media'

export const Navbar = () => {
	return (
		<div className="flex flex-row bg-transaparent w-full justify-end">
			<div className="flex flex-row gap-3 justify-end items-center">
				{routes.map((route, index) => (
					<div key={index} className="text-white">
						{route.title}
					</div>
				))}
				<div className="w-8 h-8">
					<Icon src={icons.searchIcon} fillPath className="text-white" />
				</div>
			</div>
		</div>
	)
}

import { TypographyProps } from 'interfaces'
import React from 'react'

export const Typography = ({
	text,
	type,
	className,
	children
}: TypographyProps) => {
	switch (type) {
		case 'title':
			return (
				<h1 className={`text-4xl font-bold text-white ${className}`}>
					{text ? text : children}
				</h1>
			)
		case 'subtitle':
			return (
				<h2 className={`text-2xl text-white ${className}`}>{text ? text : children}</h2>
			)
		case 'paragraph':
			return <p className={`text-lg text-white ${className}`}>{text ? text : children}</p>
		default:
			return null
	}
}

import { PropsWithChildren } from 'react'

export interface TypographyProps extends PropsWithChildren {
	type: 'title' | 'paragraph' | 'subtitle'
	text?: string
	className?: string
}

export interface IconProps {
	src: string
	className?: string
	pointer?: boolean
	fillPath?: boolean
	fillLine?: boolean
	fillCircle?: boolean
	fillRect?: boolean
}

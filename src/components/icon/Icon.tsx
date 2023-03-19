import React from 'react'
import SVG from 'react-inlinesvg'
import clsx from 'clsx'
import { IconProps } from '../../interfaces/components'
import styles from './icon.module.scss'

export const Icon: React.FC<IconProps> = ({
	src,
	className,
	pointer = false,
	fillPath = false,
	fillLine = false,
	fillRect = false,
	fillCircle = false
}): JSX.Element => {
	return (
		<SVG
			src={src}
			className={clsx(
				`w-full max-w-full h-full max-h-full p-0 m-0`,
				className,
				{ 'cursor-pointer': pointer },
				[fillPath && styles.svgFillPath],
				[fillCircle && styles.svgFillCircle],
				[fillLine && styles.svgFillLine],
				[fillRect && styles.svgFillRectfillRect]
			)}
		/>
	)
}

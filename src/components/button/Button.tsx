import React from 'react'
import clsx from 'clsx'
import { Typography } from '../typography/Typography'
interface ButtonProps {
	label?: string
	onClick?: () => void
	iconLeft?: string
	iconRight?: string
	variant?: 'primary' | 'secondary' | 'tertiary'
	className?: string
}
export const Button: React.FC<
	ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, onClick, iconLeft, iconRight, variant, className }) => {
	return (
		<button
			className={clsx('border-2 border-white w-40 h-12', className)}
			onClick={onClick}
		>
			<Typography type="paragraph" className="text-white font-title">
				{label}
			</Typography>
		</button>
	)
}

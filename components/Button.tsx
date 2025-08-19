import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	type?: 'button' | 'submit' | 'reset'
}

export default function Button({
	type = 'button',
	children,
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className='w-full h-13 bg-red-100 rounded justify-start text-black text-base font-bold cursor-pointer mb-6'
			{...props}
		>
			{children}
		</button>
	)
}

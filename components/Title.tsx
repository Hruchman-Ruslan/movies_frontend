import { ElementType, HtmlHTMLAttributes, ReactNode } from 'react'

export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadElement> {
	level: ElementType
	children: ReactNode
}

export default function Title({
	level: Tag = 'h1',
	children,
	...props
}: TitleProps) {
	return (
		<Tag className={'mb-6'} {...props}>
			{children}
		</Tag>
	)
}

import { ReactNode } from 'react'

import Link, { LinkProps } from 'next/link'

interface NavItemProps extends LinkProps {
	children?: ReactNode
}

export default function NavItem({ children, href, ...props }: NavItemProps) {
	return (
		<Link href={href} {...props}>
			{children}
		</Link>
	)
}

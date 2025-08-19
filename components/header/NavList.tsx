import NavItem, { NavItemProps } from './NavItem'

interface NavListProps {
	data: NavItemProps[]
}

export default function NavList({ data }: NavListProps) {
	return (
		<ul className='flex flex-col gap-y-4 mb-8'>
			{data.map(({ href, children, ...props }) => (
				<NavItem key={href.toString()} href={href} {...props}>
					{children}
				</NavItem>
			))}
		</ul>
	)
}

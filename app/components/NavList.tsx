import NavItem from './NavItem'

const navItems = [
	{ title: 'Home', href: '/' },
	{ title: 'Community', href: '/Community' },
	{ title: 'Discover', href: '/Discover' },
	{ title: 'Awards', href: '/Awards' },
	{ title: 'Celebs', href: '/Celebs' },
]

export default function NavList() {
	return (
		<nav>
			<ul className='flex flex-col '>
				{navItems.map(({ title, href }) => (
					<NavItem key={href} href={href}>
						{title}
					</NavItem>
				))}
			</ul>
		</nav>
	)
}

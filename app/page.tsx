import Title from './components/Title'
import NavList from './components/NavList'

export default function Home() {
	return (
		<div className='flex justify-between items-center h-screen'>
			<header>
				<aside>
					<Title level={'h2'}>Menu</Title>
					<NavList />
				</aside>
			</header>
			<main>Main Page</main>
			<footer>Footer</footer>
		</div>
	)
}

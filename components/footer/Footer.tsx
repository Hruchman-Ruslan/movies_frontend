import Options from '@/assets/icons/options.svg'

import Form from '@/components/Form'
import Title from '@/components/Title'
import Button from '@/components/Button'
import MoviesList from '@/components/MoviesList'

import king_man from '@/public/king_man.png'
import resident from '@/public/resident.png'
import money from '@/public/money.png'
import navalny from '@/public/navalny.png'
import enternals from '@/public/enternals.png'

const popularMoviesData = [
	{
		src: king_man,
		title: 'The Kings Man',
		genre: 'Action, Adventure',
		rating: 4,
	},
	{
		src: resident,
		title: 'Resident Alien',
		genre: 'Action, Science',
		rating: 3,
	},
]

const watchListData = [
	// {
	// 	src: king_man,
	// 	title: 'The Kings Man',
	// 	genre: 'Adventure, Crime',
	// 	rating: 4,
	// },
	{ src: money, title: 'Money Heist', genre: 'Action, Sci-Fi', rating: 5 },
	{ src: navalny, title: 'Navalny', genre: 'Adventure, Drama', rating: 4 },
	{ src: enternals, title: 'Enternals', genre: 'Crime, War', rating: 3 },
]

export default function Footer() {
	return (
		<footer className='flex flex-col justify-start items-center w-80 h-screen bg-stone-900 pt-5 px-4 gap-4'>
			<div>
				<Form />
				<div className='flex justify-between items-center mb-6'>
					<Title level={'h2'} className='mb-0'>
						Popular Movies
					</Title>
					<Options className='cursor-pointer' />
				</div>
				<MoviesList moviesData={popularMoviesData} />
				<Button>See More</Button>
				<div className='flex justify-between items-center mb-6'>
					<Title level={'h3'} className='mb-0'>
						Watch Lists
					</Title>
					<Options className='cursor-pointer' />
				</div>
				<MoviesList moviesData={watchListData} />
				<Button>See More</Button>
			</div>
		</footer>
	)
}

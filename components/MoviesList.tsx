import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import Rating from '@/components/Rating'

interface Movie {
	title: string
	genre: string
	rating: number
	src: StaticImageData
}

interface MoviesListProps {
	moviesData: Movie[]
}

export default function MoviesList({ moviesData }: MoviesListProps) {
	return (
		<ul className='flex items-start flex-col mb-4	gap-y-4'>
			{moviesData.map(({ title, genre, rating, src }) => (
				<li key={title}>
					<div className='flex justify-baseline gap-x-4'>
						<div>
							<Link href='#'>
								<Image
									src={src || '/default.webp'}
									alt='default image'
									width={64}
									height={90}
								/>
							</Link>
						</div>
						<div>
							<p className='text-base font-semibold mb-0.5'>{title}</p>
							<p className='text-base font-semibold mb-2'>{genre}</p>
							<Rating value={rating} />
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

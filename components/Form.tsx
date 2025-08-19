'use client'

import { searchMovies } from '@/actions/action-search'

import Search from '@/assets/icons/search.svg'

export default function Form() {
	async function handleSubmit(formData: FormData) {
		const movies = await searchMovies(formData)
		console.log('movies client:', movies)
	}

	return (
		<form action={handleSubmit} className='w-full relative mb-6'>
			<label htmlFor='movie-search' className='sr-only'>
				Search movies
			</label>

			<input
				id='movie-search'
				name='query'
				type='text'
				placeholder='Search movies...'
				className='w-full h-12 bg-stone-100 rounded-[20px] px-12 text-black text-base font-medium'
			/>

			<button
				type='submit'
				className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer'
			>
				<Search className='text-stone-500' />
			</button>
		</form>
	)
}

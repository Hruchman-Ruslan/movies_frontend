import Image from 'next/image'

export default function Logo() {
	return (
		<div className='flex justify-center gap-2.5 text-xl mb-8'>
			<Image
				src='/logo@1x.png'
				alt='logo'
				width={24}
				height={24}
				sizes='24px'
				priority
			/>
			<h1 className='#FFF'>Peacock</h1>
		</div>
	)
}

import Star from '@/assets/icons/star.svg'
import NoStar from '@/assets/icons/no-star.svg'

interface RatingProps {
	value: number
	max?: number
}

export default function Rating({ value, max = 5 }: RatingProps) {
	return (
		<div className='flex gap-1'>
			{Array.from({ length: max }, (_, i) =>
				i < value ? <Star key={i} /> : <NoStar key={i} />
			)}
		</div>
	)
}

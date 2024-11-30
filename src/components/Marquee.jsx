import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

// Skills data
const skills = [
	{
		logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/javascript.svg',
		name: 'JavaScript',
	},
	{
		logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/react.svg',
		name: 'React',
	},
	{
		logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/node-dot-js.svg',
		name: 'Node.js',
	},
	{
		logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/html5.svg',
		name: 'HTML5',
	},
	{
		logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/css3.svg',
		name: 'CSS3',
	},
	{
		logo: 'https://cdn.jsdelivr.net/npm/simple-icons@5.15.0/icons/mongodb.svg',
		name: 'MongoDB',
	},
];

const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
const secondRow = skills.slice(Math.ceil(skills.length / 2));

// SkillCard Component
const SkillCard = ({ logo, name }) => {
	return (
		<div
			className={cn(
				'relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-center gap-2',
				// light styles
				'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
				// dark styles
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
			)}
		>
			<img
				src={logo}
				alt={name}
				width='40'
				height='40'
				className='rounded-full'
			/>
			<p className='text-sm font-medium dark:text-white'>{name}</p>
		</div>
	);
};

// MarqueeDemo Component
export function MarqueeDemo() {
	return (
		<div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
			{/* First Marquee Row */}
			<Marquee pauseOnHover className='[--duration:20s]'>
				{firstRow.map((skill, index) => (
					<SkillCard key={index} {...skill} />
				))}
			</Marquee>
			{/* Second Marquee Row (Reversed) */}
			<Marquee reverse pauseOnHover className='[--duration:20s]'>
				{secondRow.map((skill, index) => (
					<SkillCard key={index} {...skill} />
				))}
			</Marquee>
			{/* Gradient Overlay */}
			<div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
			<div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
		</div>
	);
}

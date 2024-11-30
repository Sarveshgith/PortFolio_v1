import { frameworks, databases, tools, languages } from '@/lib/skills';

const Skills = () => {
	return (
		<div className='bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-6'>
			{/* Title */}
			<div className='mb-12 text-center'>
				<h1 className='text-5xl font-extrabold text-violet-500'>Skills</h1>
				<p className='text-gray-400 mt-2 text-lg'>
					A collection of frameworks, tools, and languages I work with.
				</p>
			</div>

			{/* Skills Section */}
			<div className='space-y-12'>
				{/* Frameworks */}
				<SkillSection title='Frameworks' skills={frameworks} />

				{/* Languages */}
				<SkillSection title='Languages' skills={languages} />

				{/* Databases */}
				<SkillSection title='Databases' skills={databases} />

				{/* Tools */}
				<SkillSection title='Tools' skills={tools} />
			</div>
		</div>
	);
};

const SkillSection = ({ title, skills }) => (
	<div>
		<h2 className='text-3xl font-semibold text-violet-400 mb-6'>{title}</h2>
		<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4'>
			{skills.map((skill) => (
				<div
					key={skill.name}
					className='flex flex-col items-center gap-2 p-3 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300'
				>
					<skill.icon className='w-8 h-8 text-violet-500' />
					<p className='text-sm font-medium'>{skill.name}</p>
				</div>
			))}
		</div>
	</div>
);

export default Skills;

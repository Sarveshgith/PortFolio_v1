import { FaLaptopCode, FaJava, FaHtml5, FaPython } from 'react-icons/fa6';
import { FaCss3Alt, FaReact, FaNode, FaGitAlt, FaGithub } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import {
	SiExpress,
	SiSpringboot,
	SiDjango,
	SiMongodb,
	SiFirebase,
} from 'react-icons/si';
import { DiMysql, DiPostgresql } from 'react-icons/di';

const languages = [
	{ name: 'C/C++', icon: FaLaptopCode },
	{ name: 'Java', icon: FaJava },
	{ name: 'HTML', icon: FaHtml5 },
	{ name: 'CSS', icon: FaCss3Alt },
	{ name: 'Python', icon: FaPython },
	{ name: 'SQL', icon: TbSql },
];

const frameworks = [
	{ name: 'React', icon: FaReact },
	{ name: 'NodeJS', icon: FaNode },
	{ name: 'Express', icon: SiExpress },
	{ name: 'Spring Boot', icon: SiSpringboot },
	{ name: 'Django', icon: SiDjango },
];

const databases = [
	{ name: 'MongoDB', icon: SiMongodb },
	{ name: 'MySQL', icon: DiMysql },
	{ name: 'PostgreSQL', icon: DiPostgresql },
	{ name: 'Firebase', icon: SiFirebase },
];

const tools = [
	{ name: 'Git', icon: FaGitAlt },
	{ name: 'GitHub', icon: FaGithub },
];

export { languages, frameworks, databases, tools };

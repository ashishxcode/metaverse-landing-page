'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<div className="gradient-02 z-0" />
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
		>
			<TypingText
				title="About Metaverses"
				textStyle="text-center text-[20px]"
			/>
			<motion.p
				variants={fadeIn('up', 'tween', 0.2, 1)}
				className="text-center mt-6 font-normal sm:text-[24px] text-[20px] text-secondary-white"
			>
				<span className="font-extrabold text-white">Metaverse </span>
				is a new things in the future, where you can enjoy the
				<span className="font-extrabold text-white"> Virtual Reality </span>
				world by feeling like you are in the
				<span className="font-extrabold text-white"> real world. </span> you can
				do anything in the metaverse, such as playing games, watching movies,
				and even working. you can also meet new people and make new friends in
				the metaverse. this is the future of the world. this is the
				<span className="font-extrabold text-white">
					{' '}
					metaverse of the madness.{' '}
				</span>
				Let's explore the metaverse together. by scrolling down, you can see the
				metaverse.
			</motion.p>
			<motion.img
				src="/arrow-down.svg"
				variants={fadeIn('up', 'tween', 0.3, 1)}
				className="w-6 h-6 mt-8 animate-bounce"
			/>
		</motion.div>
	</section>
);

export default About;

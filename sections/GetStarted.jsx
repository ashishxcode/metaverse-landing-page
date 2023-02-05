'use client';
import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { startingFeatures } from '../constants/';
import styles from '../styles';

const GetStarted = () => (
	<section className={`${styles.paddings}relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 `}
		>
			<motion.div
				variants={planetVariants('left')}
				className={`flex-1 ${styles.flexCenter}`}
			>
				<img
					src="/get-started.png"
					alt="get started"
					className="w-[90%] h-[90%] object-contain"
				/>
			</motion.div>
			<motion.div
				variants={fadeIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] flex flex-col justify-center"
			>
				<TypingText title="How Metaverse Works" textStyle="text-[20px]" />
				<TitleText title={<>Get Started in 60 sec.</>} />
				<div className="flex flex-col gap-[24px] max-w-[370px] mt-[30px]">
					{startingFeatures.map((feature, index) => (
						<StartSteps key={index} text={feature} number={index + 1} />
					))}
				</div>
			</motion.div>
		</motion.div>
	</section>
);

export default GetStarted;

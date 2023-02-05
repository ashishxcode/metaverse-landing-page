'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants/';
import styles from '../styles';

const Explore = () => {
	const [active, setActive] = useState('world-3');
	return (
		<section className={`${styles.paddings} z-10`} id="explore">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} flex flex-col mx-auto`}
			>
				<TypingText title="The Worlds" textStyle="text-center text-[20px]" />
				<TitleText
					title={
						<>
							Choose the world you want <br className="hidden md:block" /> to
							explore
						</>
					}
					textStyle="text-center"
				/>
				<div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							{...world}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Explore;

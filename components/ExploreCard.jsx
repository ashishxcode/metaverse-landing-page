'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';

const ExploreCard = ({ active, index, handleClick, id, imgUrl, title }) => (
	<motion.div
		variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
		className={`relative ${
			active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
		} flex items-center justify-center min-w-[170px] h-[700px] transition-all duration-[0.7s] ease-out cursor-pointer overflow-hidden`}
		onClick={() => handleClick(id)}
	>
		<img
			src={imgUrl}
			alt="planet-04"
			className="absolute w-full h-full object-cover rounded-[24px]"
		/>
		{active !== id ? (
			<h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] p-4">
				{title}
			</h3>
		) : (
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className="absolute bottom-0 sm-p-[2rem] p-[1rem] justify-start w-full  flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] items-center "
			>
				<div className="flex sm-flex-col flex-row items-center gap-4">
					<div
						className={`${styles.flexCenter} sm-w-[60px] sm-h-[60px] w-[40px] h-[40px]  rounded-[10px] glassmorphism`}
					>
						<img
							src="/headset.svg"
							alt="headset"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
					<p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
						Enter Metaverse
					</p>
				</div>
				<h2 className="sm:mt-[24px] mt-[10px] font-semibold sm:text-[32px] text-[20px] text-white">
					{title}
				</h2>
			</motion.div>
		)}
	</motion.div>
);

export default ExploreCard;

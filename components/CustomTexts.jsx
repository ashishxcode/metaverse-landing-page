'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyle }) => (
	<motion.p
		variants={textContainer}
		initial="hidden"
		whileInView="show"
		className={`${textStyle} font-normal text-[14px] text-secondary-white`}
	>
		{Array.from(title).map((letter, index) => (
			<motion.span variants={textVariant2} key={index}>
				{letter === ' ' ? '\u00A0' : letter}
			</motion.span>
		))}
	</motion.p>
);

export const TitleText = ({ title, textStyle }) => <h2>Title Text</h2>;

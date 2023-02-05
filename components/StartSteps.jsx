import styles from '../styles';
const StartSteps = ({ text, number }) => (
	<div className={`${styles.flexCenter} flex-row`}>
		<div
			className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[20px] bg-[#323f5d]`}
		>
			<p className="text-white text-[18px] font-bold">0{number}</p>
		</div>
		<p className="flex-1 ml-[20px] text-[18px] leading-[27.6px] font-normal text-[#b0b0b0]">
			{text}
		</p>
	</div>
);

export default StartSteps;

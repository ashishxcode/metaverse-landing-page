'use client';
import styles from '../styles';
const NewFeatures = ({ imgUrl, title, subtitle }) => (
	<div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
		<div
			className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[20px] bg-[#323f5d]`}
		>
			<img
				src={imgUrl}
				alt={title}
				className="w-[30px] h-[30px] object-contain"
			/>
		</div>
		<div className="mt-8">
			<h3 className="text-[20px] font-bold text-white">{title}</h3>
			<p className="text-[16px] text-[#b0b0b0] mt-2">{subtitle}</p>
		</div>
	</div>
);

export default NewFeatures;

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styles from '@/styles/Laptop.module.css';

interface Earpod {
	brand: string;
	image: string;
	model: string;
	price: number;
	strikePrice: number;
	name: string;
}

interface Props {
	earpod: Earpod;
	setLaptopModel: Function;
	setOpen: Function;
}
const EarpodCard: React.FC<Props> = ({ earpod, setLaptopModel, setOpen }) => {
	function handleOpen() {
		setLaptopModel(earpod.model);
		setOpen(true);
	}
	return (
		<div className={styles.laptopCard}>
			<Image
				className={styles.laptopCardImg}
				src={earpod.image}
				alt={earpod.model}
				width={200}
				height={200}
			/>
			<div className={styles.laptopInfo}>
				<p
					style={{
						gridColumn: 'span 2',
						fontWeight: 800,
						textTransform: 'capitalize',
					}}>
					{earpod.name}
				</p>
				<p>
					<b> Brand</b> <br /> {earpod.brand}
				</p>
				<p>
					<b>Model</b>
					<br /> {earpod.model}
				</p>
				<p>
					<b>Price</b> <br />{' '}
					<span style={{ color: '	#A9A9A9', textDecoration: 'red' }}>
						<s>Rs {earpod.strikePrice}</s>{' '}
					</span>{' '}
					Rs {earpod.price}
				</p>
			</div>
			<button className={styles.infoButton} onClick={handleOpen}>
				Place an Order
			</button>
		</div>
	);
};

export default EarpodCard;

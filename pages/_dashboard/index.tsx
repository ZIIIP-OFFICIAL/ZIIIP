import React from 'react';
import LaptopCard from './_laptopCard';

export default function Dashboard() {
	const laptops = [
		{
			image:
				'https://rukminim1.flixcart.com/image/416/416/kuwzssw0/computer/f/y/7/redmibook-15-pro-thin-and-light-laptop-redmi-original-imag7xhnkfezfush.jpeg?q=70',
			brand: 'brand',
			model: 'model',
			price: 99,
			strikePrice: 200,
			ram: '16 GB',
			gpu: '1050 ti 4 GB',
			processor: 'Ryzen 5 4500',
			disk: '1TB HDD',
			os: 'Windows 10',
			display: 'Windows 10',
			name: 'ASUS ROG STH STH PRO',
		},
	];

	return (
		<div>
			{laptops.map((laptop, index) => (
				<LaptopCard laptop={laptop} key={index}></LaptopCard>
			))}
		</div>
	);
}

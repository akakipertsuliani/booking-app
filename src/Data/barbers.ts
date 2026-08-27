export type Service = {
	id: number;
	name: string;
	price: number;
	duration: number;
};

export type Barber = {
	id: number;
	name: string;
	rating: number;
	address: string;
	image: string;
	services: Service[];
};

export const barbers: Barber[] = [
	{
		id: 1,
		name: "Alex Barber",
		rating: 4.9,
		address: "Kutaisi",
		image: "/HairCut/HairCut_1.jpg",
		services: [
			{
				id: 1,
				name: "Classic Cut",
				price: 25,
				duration: 30,
			},
			{
				id: 2,
				name: "Skin Fade",
				price: 30,
				duration: 40,
			},
			{
				id: 3,
				name: "Hair + Beard",
				price: 40,
				duration: 55,
			},
		],
	},

	{
		id: 2,
		name: "Nika Barber",
		rating: 4.8,
		address: "Kutaisi",
		image: "/HairCut/HairCut_4.jpg",
		services: [
			{
				id: 4,
				name: "Classic Cut",
				price: 20,
				duration: 30,
			},
			{
				id: 5,
				name: "Beard Trim",
				price: 15,
				duration: 20,
			},
		],
	},

    {
		id: 3,
		name: "Anna Barber",
		rating: 4.9,
		address: "Kutaisi",
		image: "/HairCut/HairCut_2.jpg",
		services: [
			{
				id: 4,
				name: "Classic Cut",
				price: 20,
				duration: 30,
			},
			{
				id: 5,
				name: "Beard Trim",
				price: 15,
				duration: 20,
			},
		],
	},
];

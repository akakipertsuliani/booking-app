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
	location: string;
	address: string;
	image: string;
	services: Service[];
};

export const barbers: Barber[] = [
	{
		id: 1,
		name: "Alex Barber",
		rating: 4.9,
		location: "City Center",
		address: "12 Rustaveli Street",
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
		],
	},

	{
		id: 2,
		name: "Nika Barber",
		rating: 4.8,
		location: "Bagrati",
		address: "8 Bagrati Street",
		image: "/HairCut/HairCut_4.jpg",
		services: [
			{
				id: 3,
				name: "Classic Cut",
				price: 20,
				duration: 30,
			},
		],
	},

	{
		id: 3,
		name: "Giorgi Barber",
		rating: 4.7,
		location: "City Center",
		address: "24 Rustaveli Street",
		image: "/HairCut/HairCut_5.jpg",
		services: [
			{
				id: 4,
				name: "Hair + Beard",
				price: 35,
				duration: 50,
			},
		],
	},
];

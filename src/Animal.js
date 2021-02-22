export default class Animal{
static properties = {
	size: { label: 'Grosse', unit: 's'},
	weight: {label: 'Gewicht', unit: 'kg'},
	age: {label: 'Alter', unit: 'Jahre'},
	offsprings: {label: 'Nachkommen', unit: ''},
	speed: {label: 'Geschwiendihkeit', unit:'km/h'},
};

	constructor(name, image, size, weight, age, offsprings, speed){
		this.name = name;
		this.image = image;
		this.size = size;
		this.weight = weight;
		this.age = age;
		this.offsprings = offsprings;
		this.speed = speed;
	}
}

import * as faker from "faker";

const generateRandomHouse = (number) => {
  const address = faker.address.streetAddress();
  const city = faker.address.city();
  const price = faker.datatype.number({ min: 100000, max: 1000000 });
  const area = faker.datatype.number({ min: 80, max: 250 });
  const bedrooms = faker.datatype.number({ min: 2, max: 5 });
  const bathrooms = faker.datatype.number({ min: 1, max: 4 });
  const squareFootage = faker.datatype.number({ min: 800, max: 3000 });
  const old = Boolean(Math.round(Math.random()));
  return {
    image: `images/house${number}.jpg`,
    address,
    city,
    area,
    price,
    bedrooms,
    bathrooms,
    squareFootage,
    old,
  };
};

const houses = [
  // {
  //   image: "images/house1",
  //   address: "024 Sanford Stream",
  //   city: "New Leslymouth",
  //   price: 845119,
  //   bedrooms: 3,
  // },
  // {
  //   image: "images/house2",
  //   address: "0207 Tyshawn Lights",
  //   city: "Cadenstad",
  //   price: 158195,
  //   bedrooms: 4,
  // },
  // {
  //   image: "images/house3",
  //   address: "27366 Halie Streets",
  //   city: "New Kaitlinborough",
  //   price: 837736,
  //   bedrooms: 5,
  // },
  // {
  //   image: "images/house4",
  //   address: "3550 Collier Circles",
  //   city: "Novato",
  //   price: 933599,
  //   bedrooms: 2,
  // },
  // {
  //   image: "images/house5",
  //   address: "095 Dietrich Passage",
  //   city: "Aufderharberg",
  //   price: 242998,
  //   bedrooms: 1,
  // },
];

for (let i = 1; i <= 12; i++) {
  const house = generateRandomHouse(i);
  houses.push(house);
}

export default houses;

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
    id: number,
    image: `/images/house${number}.jpg`,
    address,
    city,
    area,
    price,
    bedrooms,
    bathrooms,
    squareFootage,
    old,
    liked: false,
  };
};

const houses = [];

for (let i = 1; i <= 12; i++) {
  const house = generateRandomHouse(i);
  houses.push(house);
}
export default houses;

import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const classs = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  title: faker.name.fullName(),
  hours: "9-5pm",
  pricing: "$50",
  descriptionShort: 'short desciption',
  descriptionLong: 'long description',
  background: "bgClr",
}));

export default classs;

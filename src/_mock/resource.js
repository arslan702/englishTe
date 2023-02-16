import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// ----------------------------------------------------------------------

const resources = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  title: faker.name.fullName(),
  descriptionShort: faker.company.name(),
  descriptionLong: 'long desctiption',
  background:'bgColr',


}));

export default resources;

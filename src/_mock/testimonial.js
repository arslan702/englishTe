import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const testimonials = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  title: faker.name.fullName(),
  background: 'back clr',
}));

export default testimonials;

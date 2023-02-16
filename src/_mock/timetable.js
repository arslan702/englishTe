import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const timetables = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  title: faker.name.fullName(),
  day: 'day',
  time: '5-6pm',
  
}));

export default timetables;

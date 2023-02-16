import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const courses = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  title: faker.name.fullName(),
  date: "9-5-22",
  time: "4-5pm",
  fee: "$50",
  location: "location",
  descriptionShort: 'front desc',
  descriptionLong: 'long description',
  bookingLink: "booking link",
  // image:'image'
}));

export default courses;

import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const childprofiles = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  email: 'email@gmail.com',
  childName: 'child name',
  currentSchool: faker.company.name(),
  yearGroup:'year group',
  info: 'this is info',
  
}));

export default childprofiles;

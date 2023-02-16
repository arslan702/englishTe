import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const contacts = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  email: 'email@gmail.com',
  phone: '0900-68585',
  howDidYou: faker.company.name(),
  enquiryAbout:'reception',
  enquiry: 'this is enquiry',
  
}));

export default contacts;

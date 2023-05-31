import { faker } from "@faker-js/faker";

export function randomPerson() {
  return {
    fullName: faker.person.fullName(),
    bio: faker.person.bio(),
    job: faker.person.jobTitle(),
    email: faker.internet.email(),
  };
}

export function randomCompany() {
  return {
    name: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
}

export function randomLoremIpsum() {
  return {
    title: faker.lorem.sentence({ min: 3, max: 15 }),
    description: faker.lorem.paragraphs({ min: 1, max: 3 }),
  };
}

export type User = {
    firstName: string;
    lastName: string;
    dob: string;
    country: string;
    postcode: string;
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    phone: string;
    email: string;
    password: string;
  };
  
  export function buildUser(): User {
    const id = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    return {
      firstName: 'Test',
      lastName: 'Learner',
      dob: '1995-05-20',
      country: 'US',
      postcode: '90001',
      houseNumber: '42',
      street: '1 Practice Street',
      city: 'Los Angeles',
      state: 'California',
      phone: '0771234567',
      email: `learner.${id}@example.com`,
      password: 'Str0ng!Pass#2026',
    };
  }
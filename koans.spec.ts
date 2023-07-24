// Define an interface representing an immutable person object
interface ImmutablePerson {
  readonly name: string;
  readonly age: number;
  readonly email: string;
}

// Define a function that creates an immutable person object
function createImmutablePerson(name: string, age: number, email: string): ImmutablePerson {
  return {
    name,
    age,
    email,
  };
}

describe('TypeScript Koans - Test Suite 1', () => {
  it('Immutability in TypeScript', () => {
    // Koan 1: Creating an immutable person object
    const person: ImmutablePerson = createImmutablePerson('Alice', 28, 'alice@example.com');

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(person.name).toEqual();
    // expect(person.age).toEqual();
    // expect(person.email).toEqual();

    // Koan 2: Attempting to modify properties of an immutable person
    // person.name = 'Bob'; // Uncomment this line and observe the error

    // Failing Test 2: Uncomment the expect statement below and provide the expected value
    // expect(person.name).toEqual();

    // Koan 3: Creating an array of immutable persons
    const immutablePeople: ImmutablePerson[] = [
      createImmutablePerson('John', 30, 'john@example.com'),
      createImmutablePerson('Sarah', 25, 'sarah@example.com'),
    ];

    // Failing Test 3: Uncomment the expect statements below and provide the expected values
    // expect(immutablePeople.length).toEqual();
    // expect(immutablePeople[0].name).toEqual();
    // expect(immutablePeople[1].age).toEqual();

    // Koan 4: Attempting to modify properties of an immutable person in the array
    // immutablePeople[0].name = 'Michael'; // Uncomment this line and observe the error

    // Failing Test 4: Uncomment the expect statement below and provide the expected value
    // expect(immutablePeople[0].name).toEqual();
  });
});

// Define a function that returns a promise
function fetchUserData(userId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve('John Doe');
      } else if (userId === 2) {
        resolve('Alice Smith');
      } else {
        reject(new Error('User not found'));
      }
    }, 100);
  });
}

describe('TypeScript Koans - Test Suite 2', () => {
  it('Async functions and promises in TypeScript', async () => {
    // Koan 1: Using async/await with promises
    let userData: string;

    try {
      userData = await fetchUserData(1);
    } catch (error) {
      userData = 'Unknown User';
    }

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(userData).toEqual();
    // expect(userData).toEqual('John Doe');
    // expect(userData).toEqual('Alice Smith');

    // Koan 2: Using Promise.all to fetch multiple data asynchronously
    const userIds = [1, 2];
    const fetchPromises: Promise<string>[] = userIds.map(id => fetchUserData(id));
    const usersData = await Promise.all(fetchPromises);

    // Failing Test 2: Uncomment the expect statements below and provide the expected values
    // expect(usersData.length).toEqual();
    // expect(usersData).toEqual();
    // expect(usersData).toEqual(['John Doe', 'Alice Smith']);

    // Koan 3: Using Promise.race to fetch data from the fastest resolved promise
    const racePromises: Promise<string>[] = [
      fetchUserData(1),
      new Promise((resolve) => setTimeout(() => resolve('Winner'), 50)),
    ];
    const winner = await Promise.race(racePromises);

    // Failing Test 3: Uncomment the expect statements below and provide the expected values
    // expect(winner).toEqual();
    // expect(winner).toEqual('John Doe');
    // expect(winner).toEqual('Winner');
  });
});

import axios, { AxiosResponse } from 'axios';

// Define a TypeScript interface for the Post object
interface Post {
  id: number;
  title: string;
  body: string;
}

// Fetch posts from the mock API
async function fetchPosts(): Promise<Post[]> {
  try {
    const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

describe('TypeScript Koans - Test Suite 3', () => {
  it('Fetching data with Axios in TypeScript', async () => {
    // Koan 1: Fetching posts from the mock API
    let posts: Post[];

    try {
      posts = await fetchPosts();
    } catch (error) {
      // If an error occurs, set posts to an empty array
      posts = [];
    }

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(posts.length).toEqual();
    // expect(posts[0].title).toEqual();
    // expect(posts[1].body).toEqual();
    // expect(posts[2].id).toEqual();

    // Koan 2: Fetching non-existent data from the mock API (simulating an error)
    try {
      await axios.get('/nonexistent-route'); // Uncomment this line to observe the error
    } catch (error) {
      // Failing Test 2: Uncomment the expect statement below and provide the expected value
      // expect(error.message).toContain();
    }
  });
});


// Define a union type
type NumberOrString = number | string;

describe('TypeScript Koans - Test Suite 4', () => {
  it('Narrowing types in TypeScript', () => {
    // Koan 1: Using typeof to narrow types
    function logType(input: NumberOrString): string {
      if (typeof input === 'number') {
        return `It's a number: ${input}`;
      } else if (typeof input === 'string') {
        return `It's a string: ${input}`;
      }

      return 'something else'
      // Failing Test 1: Uncomment the expect statement below and provide the expected value
      // expect(logType(true)).toEqual();
    }

    // Koan 2: Using instanceof to narrow types
    class Dog {
      woof() {
        return 'Woof! Woof!';
      }
    }

    class Cat {
      meow() {
        return 'Meow! Meow!';
      }
    }

    function makeSound(animal: Dog | Cat): string {
      if (animal instanceof Dog) {
        return animal.woof();
      } else if (animal instanceof Cat) {
        return animal.meow();
      }

      return 'sound'
      // Failing Test 2: Uncomment the expect statement below and provide the expected value
      // expect(makeSound({ bark: 'Loud!' })).toEqual();
    }

    // Koan 3: Using custom type guards to narrow types
    function isObject(input: unknown): input is object {
      return typeof input === 'object' && input !== null;
    }

    function stringifyIfObject(input: unknown): string {
      if (isObject(input)) {
        return JSON.stringify(input);
      } else {
        return String(input);
      }
      // Failing Test 3: Uncomment the expect statement below and provide the expected value
      // expect(stringifyIfObject(42)).toEqual();
    }
  });
});

// Define some basic types
type Numeric = number;
type StringOrNumber = string | number;
type Person = {
  name: string;
  age: number;
};
type Employee = {
  company: string;
  position: string;
};

describe('TypeScript Koans - Test Suite 5', () => {
  it('should understand union and intersection types in TypeScript', () => {
    // Koan 1: Using union types
    function addToStringOrNumber(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
      // Type guard to narrow the types before addition
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      } else {
        return `${a}${b}`;
      }
    }

    // Failing Test 1: Uncomment the expect statement below and provide the expected value
    // expect(addToStringOrNumber(3, 5)).toEqual();

    // Koan 2: Using intersection types
    function mergePersonAndEmployee(person: Person, employee: Employee): Person & Employee {
      return { ...person, ...employee };
    }

    // Failing Test 2: Uncomment the expect statement below and provide the expected value
    // expect(mergePersonAndEmployee({ name: 'John', age: 30 }, { company: 'ABC', position: 'Developer' })).toEqual();

    // Koan 3: Using type guards with union types
    function printStringOrNumber(input: StringOrNumber): string {
      if (typeof input === 'string') {
        return `The input is a string: ${input}`;
      } else {
        return `The input is a number: ${input}`;
      }
    }

    // Failing Test 3: Uncomment the expect statement below and provide the expected value
    // expect(printStringOrNumber('Hello')).toEqual();

    // Koan 4: Using type guards with intersection types
    function isPersonAndEmployee(input: any): input is Person & Employee {
      return 'name' in input && 'age' in input && 'company' in input && 'position' in input;
    }

    function printPersonAndEmployee(data: any): string {
      if (isPersonAndEmployee(data)) {
        return `Name: ${data.name}, Age: ${data.age}, Company: ${data.company}, Position: ${data.position}`;
      } else {
        return 'Invalid data';
      }
    }

    // Failing Test 4: Uncomment the expect statement below and provide the expected value
    // expect(printPersonAndEmployee({ name: 'Alice', age: 28, company: 'XYZ', position: 'Manager' })).toEqual();
  });
});

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | TS Koans Advanced

## Learning Goals

Upon completion of this exercise, you will be able to:

- Understand the significance of Koans in Zen Buddhism and its application in programming.
- Apply the Test-Driven Development (TDD) methodology in TypeScript.
- Deepen your comprehension of TypeScript by resolving Koans.

## Introduction

In this lab, we'll work with TypeScript Koans, assertions that provide insights into the language's principles. These Koans have their roots in Zen Buddhism and provide both philosophical and technical enlightenment.

## Koan Story

![](https://i.imgur.com/9Ug9NBn.png)

```
Two monks were arguing on top of a hill about a big
flag at the top of a temple. One monk reflected:

> "The flag is moving."

The other thought for a while and said:

> "The wind is moving."

The sixth patriarch happened to be passing by.

He told them:

> "Not the wind, not the flag; The mind is moving."
```

## What are the Koans?

[Koans](https://en.wikipedia.org/wiki/K%C5%8Dan) (公案) originate from Zen Buddhism and are paradoxical riddles or stories used to test "students" on their path to enlightenment. They are designed to provoke thought or doubt in the student's mind. The Koans are a series of assertions you must solve to understand how a programming language works. This is the first step to become a better developer. As you continue, they become increasingly challenging, so don't get discouraged.

## Testing

When we are coding, we have to ensure our code works as expected. As our applications grow and evolve, manually confirming that all features work can become a daunting task. **Testing** provides a way to automate this verification process.

Testing ensures that when we introduce new features, our existing features remain intact and unbroken. Tests become a safety net, giving developers confidence in making changes or adding features without inadvertently introducing bugs.

### Anatomy of a Test

Understanding how a test is structured is crucial. While the syntax can vary depending on the framework, the core idea remains consistent. Given some input parameters to a function, you expect a specific result. If the actual output matches the expected result, the test passes; otherwise, it fails.

For instance, consider a function:

```javascript
function add(num1, num2) {
  // ...
}
```

If you pass `1` and `2` to this function, you'd expect `3` as the result. In pseudocode:

```
given the parameters 1 and 2 to the add function, we expect to get 3 as a result
```

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Solved lab"
$ git push origin main
```

Create Pull Request so your TAs can check up your work.

## Instructions

> **Note**: You should not have any ts error. If you see some when uncommenting code, analyze it and comment it if necessary to avoid them.

### Iteration 1: Reflect on the Koan Story

- Ponder on the story of the two monks and the patriarch.
- Grasp the depth and layers of Koans in Zen Buddhism and their role in challenging conventional wisdom.

### Iteration 2: Grasp the Application of Koans in Programming

- Recognize Koans as a series of assertions that test your understanding of a language.
- Realize that the goal isn't just to solve the Koans, but to thoroughly understand the language's intricacies.

### Iteration 3: Understand the Significance of Testing

- Delve into the importance of testing in software development.
- Recognize the value of automated tests in maintaining and scaling applications.

### Iteration 4: Explore the Anatomy of a Test

- Dive into the structure of a test using pseudocode as a guide.
- Understand the given-expected-result pattern of a test using the `add` function example.

### Iteration 5: Dive Deep into TypeScript Koans

- Begin with the `koans.spec.ts` file.
- Uncomment the first test, determine why it's failing, and modify the TypeScript code accordingly.
- Refresh to see that the test passes now.
- Tackle each test in a similar fashion, focusing on one at a time to maximize understanding.

### Bonus

#### Bonus Iteration: Reflect and Explore

- After all tests are successful, spend some time reflecting on each Koan.
- Dive deeper into TypeScript resources to understand the underlying concepts each Koan touches upon.

**Happy coding!** ❤️

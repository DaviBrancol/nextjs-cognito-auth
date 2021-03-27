[![N|Solid](https://i.imgur.com/VYaKx4o.png)](https://nodesource.com/products/nsolid)

# Next.js Boiderplate

Welcome to the brand new boiderplate for React's framework Next.js, last updated at 03/25/2021. You can learn more about the architecture design, modules used, and the testing patterns in the description below. Feel free to give me any feedbacks in my personal email or in the issues of this repository.
<br />
<br />

## Versions

This boiderplate has many variations for state managment and styling frameworks, you can choose what best suits your project by checking out the different branches and implementations.

| Branch                | State Manager | Style Framework   | Status            |
| --------------------- | ------------- | ----------------- | ----------------- |
| master                | context       | tailwind          | ready to use      |
| feat/redux-pure       | redux-toolkit | pure css          | under development |
| feat/redux-sc         | redux-toolkit | styled components | under development |
| feat/redux-tailwind   | redux-toolkit | tailwind          | under development |
| feat/zustand-pure     | zustand       | pure css          | under development |
| feat/zustand-sc       | zustand       | styled components | under development |
| feat/zustand-tailwind | zustand       | tailwind          | under development |
| feat/context-pure     | context       | pure css          | ready to use      |
| feat/context-sc       | context       | styled components | under development |
| feat/context-tailwind | context       | tailwind          | ready to use      |

Status for this branches will be updated in the changelog.
<br />
<br />

## Installation

I recommend you to use the package manager yarn, but you may also use npm.

```sh
yarn
# or
npm install
```

<br />

# Architecture Patterns

OBS: For more information about an specific pattern, checkout the branch and read its README file.
<br />
<br />

## Directory Schema

This project uses the following directory schema inside the src folder, other files outside the src folder are the default Next.js files.

- components
  - Layout
  - Screens
  - UI
- constants
- context
- css
- hooks
- lib
- mock
- pages
- services
- typings

As a design pattern for code styling, I use the following schema for the creation of anything inside the primary directory schema.

- context
  - ContextName
    - contextname.spec.tsx <-- tests here
    - index.tsx <-- add here
  - index.tsx <-- export here

<br />
<br />

## State Flow

This branch uses the React Context for managing the state of the application.

To add a new context to your application, create one following the path style of the code and export the ContextProvider and the useContext inside your context index. You can also create your test files inside the context path.

- context
  - ContextName
    - contextname.spec.tsx <-- tests here
    - index.tsx <-- add here
  - index.tsx <-- export here

<br />
<br />

## Style System

This branch uses the TailwindCSS framework for styling its components. TailwindCSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

I highly recommend you to use tailwind in your projects, since it saves you a lot of time on creating components and layouts for your application.

You can learn more about this approach and see all of its features into the [official tailwind website](https://tailwindcss.com)

<br />
<br />

## Package Commands

Below are described all commands available in the package.json file.

```sh
yarn dev # Starts the applcation in the developer mode.
yarn build # Creates a build pack and exports as a static version
yarn commit # Module commitzen for commits
yarn start # Starts the application with builded version.
yarn lint # Applies all lint rules defined in prettier and eslint.
yarn test # Runs all spec.tsx and spec.ts test files.
yarn test-errors # Runs all spec.tsx and spec.ts test files showing logs.
yarn test:coverage # Runs the coverage of the tests through the application.
```

<br />
<br />

## Default Port

This project uses the default PORT 3000

```sh
127.0.0.1:3000
# or
http://localhost:3000
```

<br />
<br />

## Copyright

MIT License, Free Software - Boiderplate.

Made by Davi Brancol ❤️

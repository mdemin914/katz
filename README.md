# Adopting Cats

A simple application using [NextJS](https://nextjs.org/) that allows you to add cats to a cart.

## Demo

The app is deployed to vercel. See it [here](https://katz-mdemin914.vercel.app/).

## Install

```bash
yarn
```

## Run

```bash
yarn start
```

## Technology

- NextJS - react/typescript framework
- Material UI - styles
- Redux (Toolkit) - state management
- react-query - data fetching and caching

## Features

### Frontend

- Fetch cats
- Render cats in a grid
- Add cat to Cart
- Remove cat from Cart
- Show a cart
  - clear the cart
  - show the cart total

### Backend

- /api/cat
  - fetch all the cats from the mock endpoint
- /api/cats/filter
  - filter the cats based on
  - if the price is greater than the GTE param
  - if the price is less than the LTE param
  - if the cat name is contains the name param

## Testing

I am a fan of end to end testing using a tool like Cypress.io, its a JS based solution that is a better version of Selenium. I would write a few test cases that would cover the basic flows of the application. I would setup the deployment pipleline to run the test suite on a merge request into the production / staging branches and not deploy the app if any (or an acceptable percentage of test fail, sometimes tests are flaky and are false positives).

For this app I would test the following:

- Adding one cat
- Adding all the cats
- Adding no cats and trying to checkout
- Clearing the cart
- Opening the shopping cart and making sure that the total is what I expect for X cats.

As the application grows, having end to end test makes refactoring easier and as new people join they can feel confident that they did not break major functionality upon committing something. You just have to be disciplined to maintain good tests and establish a proper framework to generate test data and ensure everyone is writing and running the tests.

## More Filtering

If we wanted to implement more filtering in the `/api/cats/filter` endpoint, we would need to defined what else we would want to filter on. Given the data, other things that we can filter on would be

- Name
  - It would be similar to the LTE / GTE filter but you would check if the lower cased name
  ```
  output = json.filter((c) =>
    c.name.toLowerCase().includes(name.toLowerCase())
  );
  ```
- createdAt
  - convert the date using something like Luxon or Moment and the use the library to compare the dates
- image source
  - do something similar to the name but check the image instead of the name for the value

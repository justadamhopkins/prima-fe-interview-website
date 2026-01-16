# Frontend Interview - Website

Hey 👋

This is the base repository for the home test. The repository is created with `vite` and is empty, but contains some packages already installed, in particular:

- `react`
- `vitest`

## Install and run

```bash
# Install dependencies
# This project use `pnpm` as package manager, but you can use also `npm` or `yarn`.
pnpm install

# And run the project
pnpm dev
```

## Figma file

The figma file of the home test is available [here](https://www.figma.com/design/ESP3mNtKRj1aI458c08QBb/%F0%9F%92%BB-Website-Home-Test?node-id=0-1&t=tmrCaYq4wADJCHvD-1).


## Notes

## What's been done

The UI is complete and fully responsive.

1. I followed the atomic design methodology when building the UI components.
2. I wrote a unit test for every component, using a custom abstraction with centralized setup functions to keep the tests clean, readable, and consistent.
3. I used CSS modules with BEM selectors for styling, and I also showed how I’d add a semantic naming layer to keep components agnostic of the brand styling. This makes theming and white labeling much easier.
4. I set up Storybook, and every component has its own story.
5. I scaffolded the project using a structure I use in my personal projects.
6. The app is accessible: filters are in a toggle group with keyboard navigation, the search is inside a form for screen readers and supports submitting with the Enter key, and the dialog component can be closed with keyboard actions. I have used the correct semantic HTML elements where possible.
7. I added MSW to mock backend API calls—if you check the console, you’ll see mocking is enabled. This same API mock is also used in the unit test for the page. When users search or add filters, I sync everything to the URL as query params, so search states are shareable and not locked inside React context.
8. I followed conventional commit messages.


## What's I would like to improve on

1. I want to improve state management in the app, ideally by using React Query for backend data fetching. This would help me avoid writing custom loading states and simplify other aspects.
2. I’d also like to refine my approach to typography. It works for now, but I think there’s room for improvement.
3. I would like to add lint-staged and Husky to enforce consistent code styling and formatting.


Overall, I’m happy with the result and feel it’s a solid demonstration of frontend development skills.

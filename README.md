## Getting Started

To get a local environment up and running follow these steps:

### Installation

1. Clone this repo

```sh
git clone https://github.com/malewis5/matt_lewis_we_transfer.git
```

2. Install NPM packages

```sh
npm install
```

3. Run the Vite Local Server

```sh
npm run dev
```

4. Build for Production

```sh
npm run build
```

5. Preview Production Build

```sh
npm run preview
```

<!-- USAGE EXAMPLES -->

## Routing

This project uses React Router for client-side routing. To create a new route do the following:

1.  Create a folder in the `./pages` directory.
    - This folder should contain a `page.tsx` file. This is what will render on the route.
    - This folder should contain a `page.test.tsx` file. This will include tests for the route.
2.  In the `./routes/routes.tsx` add your new route using the following pattern:

        ```tsx
        <Route path="/" element={<Home />} />
        ```

    _For more routing examples, please refer to the [Documentation](https://reactrouter.com/en/main)_

## Queries and Mutations

This project uses `@tanstack/react-query` for all data fetching and mutations. The queries and mutations are inside the `./hooks` folder and are custom react hooks.

_For more examples, please refer to the [Documentation](https://tanstack.com/query/latest/docs/react/overview)_

<!-- CONTRIBUTING -->

## Contributing

This repository takes advantage of conventional commits. For more information please visit: https://www.conventionalcommits.org/en/v1.0.0/

1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

2. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)

3. Push to the Branch (`git push origin feature/AmazingFeature`)

4. Open a Pull Request

## Internal Notes

Given a two hour time span I was able to setup a fully functional SPA application with performant routing and data fetching. Given more time this is what I'd focus on:

1. Create more in-depth tests: I wrote tests for both routes that encompassed a large part of the app. I wanted to prove my knowledge of testing, but I wasn't able to fully test everything. It's important to test all your components, therefore I would create tests for each component inside the ./components/ui directory. I would want to further test the loading and error states, as well as the optimistic updates.
2. Modularize code where possible: I believe I did a good job of separating concerns within this project. Given more time I'd focus more on the modularization of making sure the folder structure is intuitive.
3. Polish UI: Given a simple design I was able to create a basic component library that other developers could extend. Given more time I would of liked to polish the components to make them pixel perfect as well as make them more reusable and extensible.
4. Lastly, I would have liked to go more in-depth on the README when it cames to proper contributing standards. I would have setup release-please with semantic versioning and enforced conventional commits to keep the git history standardized and clean. I would have also spent more time on the Queries and Mutations segment to ensure proper practices were followed. IMO reusable and extensible queries and mutations are essential for large scale applications. A single source of truth (SSOT) as well as strongly a typed SSOT is essential for developer experience and robustness of apps. This also helps improve velocity.

P.S. my queries have a cache and stale time attached to them. To properly witness this, run the build command followed by the preview command. You will then see that data is read from the cache if it's not stale and it's defined. React Query also refetches data if a user leaves the window and comes back. For some reason, if your Chrome DevTools are open and you're inspecting network requests it will not read from the cache because it believes your are coming "back to the window".

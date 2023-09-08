## Getting Started

  To get a local environment up and running follow these steps:

### Installation

1. Clone this repo

```sh
git clone https://github.com/github_username/repo_name.git
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

1. Create a folder in the `./pages` directory.
	* This folder should contain a `page.tsx` file. This is what will render on the route.
	* This folder should contain a `page.test.tsx` file. This will include tests for the route.
2. In the `./routes/routes.tsx` add your new route using the following pattern:

   
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

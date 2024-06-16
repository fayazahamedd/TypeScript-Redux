# React + TypeScript + Vite


# The application fetches posts from an API and displays them in a list format. Each post item includes an ID, title, and body. Users can delete a post by clicking the "Delete" button next to the respective post. This functionality is managed through Redux actions, reducers, and Redux-Saga to handle asynchronous API calls.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```


```react-redux-posts-comments-app
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── CommentsList.tsx
│   ├── pages
│   │   ├── Post.tsx
│   │   ├── Comments.tsx
│   ├── redux
│   │   ├── actions
│   │   │   ├── actionTypes.ts
│   │   │   ├── postActions.ts
│   │   │   ├── commentActions.ts
│   │   ├── reducers
│   │   │   ├── postReducer.ts
│   │   │   ├── commentReducer.ts
│   │   ├── sagas
│   │   │   ├── postSaga.ts
│   │   │   ├── commentSaga.ts
│   ├── services
│   │   ├── postService.ts
│   │   ├── commentService.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── store.ts
├── package.json
└── README.md ```


- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

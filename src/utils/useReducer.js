import { useReducer as useReactReducer } from 'react';

export default (reducer, initialState) => {
  const [state, dispatch] = useReactReducer(
    reducer,
    initialState,
  );
  return { state, dispatch };
};

export default function counter (state = {counter: 0}, action) {
  console.log('Reducer1 was called with state:', state, 'and action:', action)
  switch (action.type) {
          case 'INCREMENT':
              return {...state, counter: state.counter += 1}
          case 'DECREMENT':
            return {...state, counter: state.counter -= 1}
          default:
              return state;
      }
}

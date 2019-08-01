export function manageFriends(state = { friends: [] }, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] }
      
    case "REMOVE_FRIEND":
      // return state.friends.filter(person => person.id !== action.id);
      const removeIndex = state.friends.findIndex(i => i.id === action.id);

      return {...state, friends: [
        ...state.friends.slice(0, removeIndex), ...state.friends.slice(removeIndex + 1)
      ]}

      default:
        return state;
  } 
}

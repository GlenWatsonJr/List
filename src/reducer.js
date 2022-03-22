export const initialState = {
  dataList: [],
  user: null,
  lists: [],
  completeList: []
};

//Actions to creat, update, and delete data in the data layer.
const reducer = (state, action) => {
  switch (action.type) {
    
    //add an item to the list
    case "ADD_TO_LIST":
      return {
        ...state,
        dataList: [...state.dataList, action.item],
      };

    //create a new list
    case "CREATE_LIST":
      return {
        ...state,
        lists: [...state.lists, action.list],
      };

    //delete and item from list
    case "REMOVE_FROM_LIST":
      return {
        ...state,
        dataList: state.dataList.filter((item) => item.id !== action.id),
      };

    //set the current user
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      //unused atm
    case "CLEAR_STORE":
      return {
        ...state,
        dataList: state.dataList.splice(0, state.dataList.length),
        lists: state.lists.splice(0, state.lists.length)
      };

      //creates the completed list
      case "CREATE_COMPLETE_LIST":
        return {
          ...state,
         completeList: [...state.completeList, action.item],
        };
  
        

    default:
      return state;
  }
};

export default reducer;

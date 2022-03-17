export const initialState = {
  dataList: [],
  user: null,
  lists: [],
  completeList: []
};

//Actions to update the data layer.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        dataList: [...state.dataList, action.item],
      };

    case "CREATE_LIST":
      return {
        ...state,
        lists: [...state.lists, action.list],
      };

    case "REMOVE_FROM_LIST":
      return {
        ...state,
        dataList: state.dataList.filter((item) => item.id !== action.id),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "CLEAR_STORE":
      return {
        ...state,
        dataList: state.dataList.splice(0, state.dataList.length),
        lists: state.lists.splice(0, state.lists.length)
      };

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

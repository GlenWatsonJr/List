export const initialState = {
  dataList: [],
  user: null,
};

//Actions to update the data layer.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        dataList: [...state.dataList, action.item],
      };
    case "REMOVE_FROM_LIST":
      return{ 
        ...state, 
        dataList: state.dataList.filter(
          item => item.id !== action.id)
        }


    case "SORT_LIST":
      return {
        ...state,
        dataList: state.dataList.sort(
          (a, b) => b.listPriority - a.listPriority
        ),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

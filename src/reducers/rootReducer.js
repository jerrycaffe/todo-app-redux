
import {ON_CHANGE, ADD_TODO, CLEAR_LIST, DELETE_ITEM, EDIT_ITEM} from '../actions';



const initialState ={
  item: '',
  items: [],
  editItem: false
}

const rootReducer = (state= initialState, action)=>{
  switch(action.type){
    case ON_CHANGE:
      return {
        ...state,
        item: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        item: '',
        editItem: false,
        items: [...state.items, action.payload]
      }
    case CLEAR_LIST:
      return{
        ...state,
        items: []
      }
    case DELETE_ITEM:
      {const copied = {...state};
        const id = action.payload;
        const deleted = copied.items.filter((items)=>
        { return items.id !== id}
        )
      return{
        ...state,
        items: deleted
      }}
    case EDIT_ITEM:{

      const copied = {...state}
        const id = action.payload;
        const getItem = copied.items.filter((items)=>
        { return items.id !== id})

      const found = copied.items.find(item=>{return item.id === id})
        
      return {
        item: found.title,
        editItem: true,
        items: getItem,
        id: id
      }}

    default:
      return state;
  }
}

export default rootReducer;
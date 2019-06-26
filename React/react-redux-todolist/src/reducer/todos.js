// [
//   {
//     id: '',
//     text: '',
//     completed: ''
//   }
// ]
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        {
          text: action.text , 
          completed: action.completed || false
        },
        ...state
      ]
    default:
      return state
  }
}
const initState ={
  projects: [
    {id: '1', title: 'help me find peach', content:"fhajkdafhdk"},
    {id: '2', title: 'We find her', content:"dfadfa"},
    {id: '3', title: 'We lost her', content:"ertwetrg"}
  ]
}
const projectReducer =(state = initState, action)=>{
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    default: 
      return state;
  }
}

export default projectReducer;
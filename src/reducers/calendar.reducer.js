const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEMP':
      return {...state}
    default:
      return state
  }
}

export default calendarReducer
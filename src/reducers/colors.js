import {ADD_COLOR, TOGGLE_COLOR} from '../actions/colors'

const initialState = [
    { value: '#ff0000', name: 'Red', selected: false },
    { value: '#00ff00', name: 'Green', selected: false },
    { value: '#0000ff', name: 'Blue', selected: false }
  ]

function colors(state = initialState, {type, payload}) {
  switch(type) {
    case ADD_COLOR:
      return [...state, {...payload, selected: false}]
    case TOGGLE_COLOR:
      const newState = [...state]
      newState[payload].selected = !newState[payload].selected
      return newState
    default:
      return state
  }
}

export default colors
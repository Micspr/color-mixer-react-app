

export const ADD_COLOR = 'ADD_COLOR'

export const TOGGLE_COLOR = 'TOGGLE_COLOR'

export const addColor = (colorObj) => ({ type: ADD_COLOR, payload: colorObj})

export const selectColor = (index) => ({ type: TOGGLE_COLOR, payload: index})
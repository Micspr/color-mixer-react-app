import { mix } from 'ryb-color-mixer'
import React from 'react'
import {connect} from 'react-redux'

const ColorMixer = ({ colors }) => {
  const selected = colors.filter(color => color.selected).map(color => color.value)
  const backgroundColor = selected.length ? `#${mix(selected)}` : ''
  return (
    <section style={{ height: '20vh', backgroundColor }} className="border rounded"></section>
  )
}

const mapStateToProps = (state) => ({colors: state.colors})

export default connect(mapStateToProps, null)(ColorMixer)

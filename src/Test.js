import React from 'react'
import PropTypes from 'prop-types';

export const Test = (props) => {
  return (
    <div>Helow {props.name} name lenght is {props.name.length} </div>
  )
}


Test.propTypes = {
    name: PropTypes.string.isRequired
};

Test.defaultProps={
    name:""
}
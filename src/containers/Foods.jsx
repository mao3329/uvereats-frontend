import React, { Fragment } from 'react';

export const Foods = (props) => {
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは {props.match.params.restaurantsId} です
      </p>
    </Fragment>
  )
}
export function setName(value) {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: "SET_NAME",
  //       payload: value
  //     })
  //   }, 2000)
  // }
  return {
    type: "SET_NAME",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value)
      },2000)
    })
  }
}

export function setAge(number) {
  return {
    type: "SET_AGE",
    payload: number
  };
}

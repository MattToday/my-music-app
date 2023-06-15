const app = {
  state: {
    test: 5
  },
  reducers: {
    setTest(state) {
      return {...state, test: state.test + 1}
    }
  },
  effects: {

  }
}

export default app

export default {
  login(state, payload) {
    state.userInfo = payload
    // state.userInfo=state.userInfo.concat(payload)
  },
  logOut(state) {
    state.userInfo = []
  }
}

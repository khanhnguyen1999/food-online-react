const keyToken = "ACCESS_TOKEN"
const Storage = {
  setToken(token: string) {
    localStorage.setItem(keyToken, token)
  },
  getToken() {
    const token = localStorage.getItem(keyToken)
    try {
      const parseObj = localStorage.getItem("token")
      if (parseObj) {
        return {
          token
        }
      }
      return ""
    }
    catch (e) {
      return ""
    }
  }
}
export default Storage;

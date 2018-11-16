export default {
  saveToken(a, b) {
    localStorage.setItem("a", a);
    localStorage.setItem("b", b);
  },
  getToken() {
    return {"pro-author": localStorage.getItem("b"), "pro-access": localStorage.getItem("a")};
  },
  saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUser() {
    let item = localStorage.getItem("user");
    if (item) {
      return '';
    }
    return JSON.parse(item);
  }
}

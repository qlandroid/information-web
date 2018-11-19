// import { getFetch, getFetchUser, postFetchUser} from './axiosConfig'
import {getFetch, getFetchUser, postFetchUser, postFetch} from './axiosConfig'

export default {
  login(params) {
    return postFetch("/login", params);
  },
  userDetails() {
    return postFetchUser("/userDetails");
  },
  getCities() {
    return getFetch("/getCities");
  },
  getProjectTypes() {
    return postFetchUser("/bproject/types")
  },
  insertProjectTypes(params) {
    return postFetchUser("/bproject/insert", params);
  }
}

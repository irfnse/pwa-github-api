// import APi dari direktori /services/Api.js
import Api from '@/services/Api'

// mendeklarasikan method
// searchUser akan menerima params yang digunakan untuk get API dengan endpoint users/ concate params username
export default {
  searchUser (params) {
    return Api().get('users/' + params.username)
  }
}

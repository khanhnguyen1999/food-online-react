import { apiService } from "./index";

// types
import { IUserInfo } from 'models/IRoute';

const authService = {
  login({ email, password }: IUserInfo) {
    return apiService
      .call()
      .post('/member/login.php', { email, password });
  }
}

export default authService;
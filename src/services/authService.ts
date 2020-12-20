import { apiService } from "./index";

// types
import { IRouteAuth } from 'models/IRoute';

const authService = {
  login({ email, password }: IRouteAuth) {
    return apiService
      .call()
      .post('/member/login.php', { email, password });
  }
}

export default authService;
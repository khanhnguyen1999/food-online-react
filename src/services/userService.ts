import { apiService } from "./index";

// types
import { IUserInfo } from 'models/IRoute';

const userService = {
  getUserById({ userid }: IUserInfo) {
    return apiService
      .callWithAuth()
      .get(`/member/member.php?userid=${userid}`);
  }
}

export default userService;

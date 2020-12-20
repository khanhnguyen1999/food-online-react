import { apiService } from "./index";

// types
import { IRouteAuth } from 'models/IRoute';

const userService = {
  getUserById({ userid }: IRouteAuth) {
    return apiService
      .callWithAuth()
      .get(`/member/member.php?userid=${userid}`);
  }
}

export default userService;

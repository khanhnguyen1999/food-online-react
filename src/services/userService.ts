import { apiService } from "./index";


const userService = {
  getUserById({ userid }: { userid: number }) {
    return apiService
      .callWithAuth()
      .get(`/users/userid=${userid}`);
  }
}

export default userService;

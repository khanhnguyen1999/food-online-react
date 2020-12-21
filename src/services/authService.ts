import { apiService } from "./index";

// types

const authService = {
  // login({ email, password }: IUserInfo) {
  login({ email }: { email: string }) {
    return apiService
      .call()
      .get(`/users?email=${email}`);
  }
}

export default authService;
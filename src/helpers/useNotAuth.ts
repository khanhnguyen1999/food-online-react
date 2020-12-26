import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from '../selectors'
// Custom Hook

// Không đăng nhập thì mới được phép vào.
export default function useNotAuth() {
  const history = useHistory();
  const location = useLocation();
  const token = useSelector(authSelector);

  // Lắng nghe sự thay đổi của location (Router)
  // Mỗi lần đường dẫn URL thay đổi mình đều phải check
  useEffect(() => {
    if (token.ACCESS_TOKEN) {
      // Đã dăng nhập không cho phép vào
      history.push('/');
    }
  }, [location, history, token])
}
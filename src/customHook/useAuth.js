import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const useAuth = props => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push('/login')
      swal({
        button: false,
        text: "Đăng nhập để thực hiện",
        timer: 1000
      });
    }

  }, [currentUser]);

  return currentUser;
};


export default useAuth;
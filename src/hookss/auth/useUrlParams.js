import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserTocken } from '../../store/slice/userSlice';
const useUrlParams = () => {
  const [userId, setUserId] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdParam = urlParams.get('userId');
    const accessTokenParam = urlParams.get('token');

    if (userIdParam) {
      setUserId(userIdParam);
    }

    if (accessTokenParam) {
      setAccessToken(accessTokenParam);
      dispatch(getUserTocken({ accessToken: accessTokenParam }));
    }
  }, []);

  return { userId, accessToken };
};
export default useUrlParams;

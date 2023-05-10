import React, { useEffect } from 'react';
import useUrlParams from './useUrlParams';
import axios from 'axios';
import { getUserData } from '../../store/slice/userSlice';
import { useDispatch } from 'react-redux';
function useAuth() {
  const { userId, accessToken } = useUrlParams();
  const dispatch = useDispatch();

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  };
  const getData = async () => {
    const user = await axios.get(
      `https://invoteams-onboarding.invo.zone/api/auth/users?userId=${userId}`,
      config
    );
    const userData = user.data.result.content[0];
    dispatch(getUserData(userData));
  };
  useEffect(() => {
    if (userId) {
      getData();
    }
  }, [userId]);
  return {
    userId,
  };
}

export default useAuth;

import { tokenUrl } from './constants';
import { ITokenResponse } from './types';
import axios from 'axios';

const fetchToken = async () => {
  const response = await axios.get<ITokenResponse>(tokenUrl);

  return response.data;
};

export default fetchToken;

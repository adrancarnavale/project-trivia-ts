import axios from 'axios';
import { urlToFetchQuestions } from './constants';
import { getToken } from '../../helpers';

const fetchQuestions = async () => {
  const token = getToken();

  const response = await axios.get(`${urlToFetchQuestions}${token}`);

  return response.data;
};

export { fetchQuestions };

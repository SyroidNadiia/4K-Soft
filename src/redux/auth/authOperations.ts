import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://form-register-back.onrender.com';
// axios.defaults.headers.common['Content-Type'] = 'application/json';


interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterData, thunkApi) => {
    try {
      const response = await axios.post('/api/auth/register', credentials);
      Notiflix.Notify.success('Реєстрацію завершено успішно');
      return response;
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        Notiflix.Notify.failure('Користувач з таким email вже існує');
      } else {
        Notiflix.Notify.failure('Помилка реєстрації');
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

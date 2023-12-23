import { redirect } from 'react-router-dom';
import users from './users'

export async function Auth(email, password){
    try {
      const user = users.find(user => user.email === email && user.password === password);
      if(user){
          localStorage.setItem('user', JSON.stringify(user));
          return user;
      }
      return null;
    } catch (error) {
      console.error('Error during authentication:', error);
      throw error; 
  }
}
import { redirect } from 'react-router-dom';
import users from './users'

export async function auth(email, password){
    try {
      const user = users.find(user => user.email === email && user.password === password);
      if(user){
          localStorage.setItem('loggedIn', true);
          return user;
      }
      return null;
    } catch (error) {
      console.error('Error during authentication:', error);
      throw error; 
  }
}

export async function checkAuth(request){
  const pathname = new URL(request.url).pathname;
  const userLogin = localStorage.getItem('loggedIn');
  if (userLogin != 'true') {
    return redirect(`/login?message=Login to continue&redirectTo=${pathname}`)
  }
  return null
}

export async function logout(){
  localStorage.removeItem('loggedIn');
  return redirect("/login?message=Logout successful")
}
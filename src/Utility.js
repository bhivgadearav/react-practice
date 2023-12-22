import { redirect } from 'react-router-dom';

export async function Auth(){
    const loggedIn = false;
      if (!loggedIn) {
        throw redirect("/login?message=You need to log in first");
      }
}
export default async function ({$auth, redirect, store}) {
  let user = $auth.user
  if(user && user.role){

  } 
  else{
    // store.dispatch()
    redirect('/')
  } 
}
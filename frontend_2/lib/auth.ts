export function loginUser(user:any){

  localStorage.setItem(
    "isLoggedIn",
    "true"
  );


  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );

}



export function logoutUser(){

  localStorage.removeItem(
    "isLoggedIn"
  );


  localStorage.removeItem(
    "user"
  );

}



export function getUser(){

  if(typeof window === "undefined")
    return null;


  const user =
    localStorage.getItem("user");


  return user
    ? JSON.parse(user)
    : null;

}

import supabase from "./supabase";
export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  }); //automatically stores the session in the local storage
  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession(); //get data from local storage
  if (!session.session) return null; // if no data then you should login/signup

  const { data, error } = await supabase.auth.getUser(); // it is more safely to get user data from the server again. So based on that received from the local storage cache we get the user FROM the supabase
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut(); //clear the local storage

  if (error) throw new Error(error.message);
}

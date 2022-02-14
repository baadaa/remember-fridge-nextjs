export type UserInfo = {
  id: string;
  email: string;
  token: string;
  name: string;
  profilePic: string;
};

export const mapUserData = (user) => {
  const { uid, email, xa, displayName, photoURL } = user;
  // console.log('mapping', user);
  // console.log(uid, email, xa, displayName, photoURL);
  return {
    id: uid,
    email,
    token: xa,
    name: displayName,
    profilePic: photoURL,
  } as UserInfo;
};

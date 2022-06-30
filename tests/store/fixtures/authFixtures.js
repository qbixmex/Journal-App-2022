export const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: '123abc',
  email: 'jhony@domain.com',
  displayName: 'John Doe',
  photoURL: 'https://somedomain.com/johndoe.jpg',
};

export const authenticatedState = {
  status: 'authenticated',
  uid: demoUser.uid,
  email: demoUser.email,
  displayName: demoUser.displayName,
  photoURL: demoUser.photoURL,
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

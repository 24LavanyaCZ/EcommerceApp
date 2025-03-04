import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getApp } from '@react-native-firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';


const app = getApp();
const auth = getAuth(app);

GoogleSignin.configure({
  offlineAccess: false,
  webClientId:
    '839044060553-e7cnihha1rpqkdrpth12mvudjaqtbht7.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});



// export const signOutGoogle = async () => {
//   try {
//     await GoogleSignin.revokeAccess(); // Revoke Google Sign-In access
//     await GoogleSignin.signOut(); // Sign out from Google
//     const auth = getAuth();
//     await signOut(auth); // Sign out from Firebase auth
//     console.log('User signed out successfully');
//   } catch (error) {
//     console.error('Error signing out:', error);
//   }
// };



//IF IT DOESN'T WORK ONCE DOWNLOAD GOOGLE-SERVICES FILE FROM FIREBASE BECAUSE I HAVE ADDED SHA256
export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.signOut()
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token

    console.log('Before Google Sign-In');
    const signInResult = await GoogleSignin.signIn();
    console.log('After Google Sign-In', signInResult);

    // Try the new style of google-sign in result, from v13+ of that module
    const idToken = signInResult.data?.idToken;
    console.log('Id', idToken);
    if (!idToken) {
      // if you are using older versions of google-signin, try old style result
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }

    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(auth, googleCredential);
    console.log('Signed in with Google:', {...userCredential.user._user});
    return userCredential.user;
  } catch (err) {
    console.log(err);
  }
};


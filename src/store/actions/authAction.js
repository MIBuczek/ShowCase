export const signIn = (credentials) => {
    return ( dispatch, getState, {getFirebase})=> {
        const firebase = getFirebase();
    
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(( resp ) =>{
            console.log(resp);
            dispatch({ type: 'LOGIN_SUCCESS' , resp})
        }).catch((err)=> { 
            dispatch({ type: 'LOGIN_ERROR', err})
        });
    };
};

export const signOut = () => {
    return ( dispatch, getState, {getFirebase})=> {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type : 'SIGNOUT_SUCCESS'});
        })
    };
};

export const signUp = (newUser)=>{
    return( dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection("users").doc(resp.user.uid).set({
                name: newUser.name,
                company: newUser.company,
                position: newUser.position,
                proffesion: newUser.proffesion
            });
        }).then(() => {
            dispatch({ type : "SIGNUP_SUCCESS" })
        }).catch( err => {
            dispatch({ type : "SIGNUP_ERROR", err });
        });
    };
};

export const editUserProfile = (id , user) =>{
    return ( dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("users").doc(id).update({
            ...user
        }).then(() => {
            dispatch({ type : "UPDATE_PRFILE_SUCCESS"})
        }).catch( err => {
            dispatch({ type : "UPDATE_PRFILE_ERROR"}, err)
        });
    };
};
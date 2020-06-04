
export const createContact = (contact) => {
    return (dispatch, getState, { getFirebase, getFirestore })=>{
        const firestore = getFirestore();
        firestore.collection('contacts').add({
            ...contact,
            authorFirstName: 'Mib',
            authorLastName : 'Bucz',
            // authorId: 1234,
            createAt: new Date()
        }).then(()=>{
            dispatch({ type : 'CREATE_CONTACT_SUCCESS', contact});
        }).catch((err)=>{
            dispatch({ type: 'CREATE_CONTACT_ERROR', err});
        });
    };
};

export const deleteContact = (id)=>{
    return (dispatch, getState,{ getFirebase, getFirestore } )=>{
        const firestore = getFirestore();
        firestore.collection('contacts').doc(id).delete()
        .then(() => { 
            dispatch({ type : 'DELETE_CONTACT_SUCCESS'});
        }).catch( err => {
            dispatch({ type : 'DELETE_CONTACT_ERROR', err })
        })
    }

}

export const editContact = (contact)=>{
    return (dispatch, getState,{ getFirebase, getFirestore } )=>{
        const firestore = getFirestore();
        firestore.collection("contacts").doc(contact.contactId).update({
            ...contact
        }).then(()=>{
            dispatch({ type : 'EDIT_CONTACT_SUCCESS'});
        }).catch( err=>{
            dispatch({ type : 'EDIT_CONTACT_ERROR', err })
        })
    }
}
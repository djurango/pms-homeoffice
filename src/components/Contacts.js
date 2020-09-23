import React, {useState, useEffect} from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase"

const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({});
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})
        })
    }, []);

    const addOrEdit = obj => {

        if (currentId === '')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log("error");
                    else
                        setCurrentId('')
                }
            );
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log("error");
                    else
                        setCurrentId('')
                }
            );
    };

    const onDelete = key => {
        if (window.confirm('are you sure?')) {
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log("error");
                    else
                        setCurrentId('')
                }
            );
        }
    }

    return (
        <>
            <div className="row">
                <ContactForm {...({addOrEdit, currentId, contactObjects})}/>
            </div>

            <>{
                Object.keys(contactObjects).map(id => {
                    return <>
                        <div key={id}>
                            {contactObjects[id].fullName} <br/>

                            <button onClick={() => {
                                setCurrentId(id)
                            }}>edit
                            </button>
                            |

                            <button onClick={() => onDelete(id)}> delete</button>

                        </div>
                    </>
                })
            }</>


        </>
    );
};

export default Contacts
import React, {useState, useEffect} from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: ''
    };

    var [values, setValues] = useState(initialFieldValues);


    useEffect(() => {
        if (props.currentId === '')
            setValues({
                ...initialFieldValues
            });
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects]);


    const handleInputChange = e => {
        var {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    };

    return (
        <>

            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <input className="form-control"
                       type="text"
                       placeholder="Full Name"
                       name="fullName"
                       value={values.fullName}
                       onChange={handleInputChange}
                />

                <input type="submit" value={props.currentId === '' ? "save" : "update"}/>

            </form>

        </>
    )
};

export default ContactForm
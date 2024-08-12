import React from "react";
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import '../App.css';
export const MyForm=()=>{
    const initialValues={
        name:'',
        email:''
    }
const validationSchema=Yup.object().shape({
    name:Yup.string()
        .required("Name is required")
        .min(2,'Name must be 2 chars long'),
    email:Yup.string()
        .required("Email is required")
        .email("Email is invalid")
});
const handleSubmit=(values)=>{
    console.log("Form Data",values)
}
return(
    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {
            ()=>(
                <Form>
                    <div>
                    <label>Name:</label>
                    <Field type="text" id="name" name="name"/>
                    <ErrorMessage name="name" conponent="div" className="error1"/>
                    </div>
                    <div>
                    <label>Email:</label>
                    <Field type="text" id="email" name="email"/>
                    <ErrorMessage name="email" conponent="div" style={{color:'red'}}/>
                    </div> 
                    <button type="submit">Submit</button>
                </Form> 
            )

            }
        


    </Formik>


)
}
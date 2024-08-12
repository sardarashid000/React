import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

export const MyForm=()=>{
    const initialValues={
        name:'',
        email:''
    }
    const validationSchema=Yup.object().shape({
        name:Yup.string() 
        .required("Name can not be empty")
        .min(2,"min 2 chars"),
        email:Yup.string() 
        .required("Email can not be empty") 
        .email("Email is invalid")
    });
    const handleSubmit=(values)=>{
        console.log(values)
    }
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {
            ()=>(
                <Form>
                    <div>
                        <label>Name:</label><Field type="text" name="name" id="name"/>
                        <ErrorMessage type="text" name="name" component="div"/>
                    </div>
                    <div>
                        <label>Email:</label><Field name="email" id="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            )
        }    
            
        </Formik>


    )

    

}

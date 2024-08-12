import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
export const MyForm1=()=>{
    const initialValues={
        name:'',
        email:''
    }
    const validationSchema=Yup.object().shape({
        name:Yup.string()
        .required("Name can not be empty")
        .min(2,'min 2 chars'),
        email:Yup.string()
        .required('Email can not be empty')
        .email("Invalid email")
    });
    const handleSubmit=(values)=>{
        console.log(values)
    }

    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {
            ()=>(
                <Form>
                    <div>
                    Name:<Field type="text" name="name" id="name"/>
                    <ErrorMessage name="name" component="div"/>

                    </div>
                    <div>
                    Email:<Field type="text" name="email" id="email"/>
                    <ErrorMessage name="email" component="div"/>

                    </div>
                    <button type='submit'>Submit</button>
                </Form>

            )
        }
    </Formik>
}
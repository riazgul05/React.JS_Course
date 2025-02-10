import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import RedErrorMessage from './RedErrorMessage'

function FormikForm2() {
//  const [formData, setFormData] = useState({})
      const NewValidation = yup.object({
        name:yup.string().required("Name is Must"),
       
      })
  return (
    <div>
     
        <Formik
        validationSchema={NewValidation}
         initialValues={{name:"", age:"", pass:"", gender:"", hobby:"", country:"", comment:""}}
        onSubmit={(values) =>{
        console.log(values)
        // setFormData(values)
        }}>
            <Form>
                <label htmlFor="">Enter Name: </label>
                <Field type="text" name="name"/>
                <RedErrorMessage name='name'/>
                {/* <ErrorMessage name='name'/> */}
                <br /><br />
                <label htmlFor="">Enter Age: </label>
                <Field type="number" name="age"/>
               
                
                <br /><br />
                <label htmlFor="">Enter Password: </label>
                <Field type="password" name="pass"/>
                

                <br /><br />
                <label htmlFor="">Enter Gender: &nbsp;</label>
                <label htmlFor="">Male</label>
                <Field type="radio" name="gender" value="male"/>
                <label htmlFor="">Female</label>
                <Field type="radio" name="gender" value="female"/>
                <br /><br />
                <label htmlFor="">Hobbies: &nbsp;</label>
                <label htmlFor="">Writing  &nbsp;</label>
                <Field type="checkbox" name="hobby" value="writing"/>
                &nbsp;
                <label htmlFor="">Reading &nbsp;</label>
                <Field type="checkbox" name="hobby" value="Reaing"/>
                &nbsp;
                <label htmlFor="">Sleeping  &nbsp;</label>
                <Field type="checkbox" name="hobby" value="Sleeping"/>
                <br /><br />
                <label htmlFor="">Country: &nbsp;</label>
                <Field name="country" as="select">
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                </Field>
                <br /><br />
                <label htmlFor="">Comments: </label>
                <Field as="textarea" name="comment"/>
                <br /><br />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
        {/* <h1>{JSON.stringify(formData)}</h1> */}
        {/* <h1>{formData.name}</h1>
        <h1>{formData.age}</h1> */}

    </div>
  )
}

export default FormikForm2
import React from 'react'
import { useFormik } from 'formik'
import validationSchema from './validations'


function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passWordConfirm: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Email</label>
                <input name="email" placeholder="Jane" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <br /><br />

                <label>Password</label>
                <input name="password" placeholder="Jane" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <br /><br />

                <label>confirm Password</label>
                <input name="passWordConfirm" placeholder="Jane" value={values.passWordConfirm} onChange={handleChange} onBlur={handleBlur} />
                {errors.passWordConfirm && touched.passWordConfirm && <div className='error'>{errors.passWordConfirm}</div>}

                <br /><br />

                <button type="submit">Submit</button>
                <br /><br />

                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Signup
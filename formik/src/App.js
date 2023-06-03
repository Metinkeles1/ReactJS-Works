import './App.css';
import { useFormik } from 'formik'

function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      passWordConfirm: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label >Email</label>
        <input name="email" placeholder="Jane" value={values.email} onChange={handleChange} />

        <br /><br />

        <label>Password</label>
        <input name="password" placeholder="Jane" value={values.password} onChange={handleChange} />

        <br /><br />

        <label>confirm Password</label>
        <input name="passWordConfirm" placeholder="Jane" value={values.passWordConfirm} onChange={handleChange} />

        <br /><br />

        <button type="submit">Submit</button>
        <br /><br />

        <code>{JSON.stringify(values)}</code>
      </form>
    </div >
  );
}

export default App;

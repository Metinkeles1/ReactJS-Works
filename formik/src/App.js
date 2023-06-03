import './App.css';
import { useFormik } from 'formik'

function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      hobies: []
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" value={values.firstName} onChange={handleChange} />

        <br /><br />

        <label html For="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Doe" value={values.lastName} onChange={handleChange} />

        <br /><br />

        {/* radio */}
        <span>Male</span>
        <input
          type="radio"
          name='gender'
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />

        <span>Female</span>
        <input
          type="radio"
          name='gender'
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        {/* radio */}

        <br /><br />

        {/* checkbox */}
        <div>
          <input
            type="checkbox"
            name='hobies'
            value="cinema"
            onChange={handleChange}
          />
          Cinema
        </div>

        <div>
          <input
            type="checkbox"
            name='hobies'
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>
        {/* checkbox */}


        <select name='country' value={values.country} onChange={handleChange}>
          <option value="turkey">turkey</option>
          <option value="england">england</option>
          <option value="usa">usa</option>
        </select>

        <br /><br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div >
  );
}

export default App;

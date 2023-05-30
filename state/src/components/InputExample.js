import { useState } from 'react'

function InputExample() {
    const [form, setForm] = useState({ name: '', surName: '' });

    const onChangeInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    return (
        <div>
            Name <br />
            <input name='name' type="text" value={form.name} onChange={onChangeInput}></input>
            <br />
            surName <br />
            <input name='surName' type="text" value={form.surName} onChange={onChangeInput}></input>
            <br />
            {form.name} {form.surName}
        </div>
    )
}

export default InputExample
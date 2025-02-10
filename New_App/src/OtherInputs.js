import React, { useState } from 'react'

function OtherInputs() {
    const [textArea, setTextArea] = useState("");
    const [SelectMenu, setSelectMenu] = useState("USA");
    const [Checked, setChecked] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Coments', e.target[0].value)
        console.log('Country', e.target[1].value)
        console.log('Checkbox', e.target[2].checked)


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{ verticalAlign: "top" }} htmlFor="">Coments:&nbsp; </label>
                <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} cols={30} rows={5}></textarea>
                <br /><br />
                <label htmlFor="">Select Country: &nbsp;</label>
                <select value={SelectMenu} onChange={(e) => setSelectMenu(e.target.value)}>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Brazil">Brazil</option>
                </select>
                <br /><br />

                <label htmlFor="">Yes I Agree The Terms &nbsp;</label>
                <input type="checkbox" Checked={Checked} onChange={(e) => setChecked(e.target.checked)} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default OtherInputs
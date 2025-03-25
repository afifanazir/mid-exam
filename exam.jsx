import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        occupation: "Student",
        gender: "",
        languages: [],
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                languages: checked
                    ? [...prev.languages, value]
                    : prev.languages.filter((lang) => lang !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>User Name</label>
                <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Occupation</label>
                <select name="occupation" value={formData.occupation} onChange={handleChange}>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                    <option value="Other">Other</option>
                </select>

                <label>Gender</label>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                    />
                    <label>Male</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                    />
                    <label>Female</label>

                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === "Other"}
                        onChange={handleChange}
                    />
                    <label>Other</label>
                </div>

                <label>Languages</label>
                <div>
                    <input
                        type="checkbox"
                        name="languages"
                        value="HTML"
                        checked={formData.languages.includes("HTML")}
                        onChange={handleChange}
                    />
                    <label>HTML</label>

                    <input
                        type="checkbox"
                        name="languages"
                        value="CSS"
                        checked={formData.languages.includes("CSS")}
                        onChange={handleChange}
                    />
                    <label>CSS</label>

                    <input
                        type="checkbox"
                        name="languages"
                        value="JavaScript"
                        checked={formData.languages.includes("JavaScript")}
                        onChange={handleChange}
                    />
                    <label>JavaScript</label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditDoctorModal = ({ doctor, onClose }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nic, setNic] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [doctorDepartment, setDoctorDepartment] = useState("");
    const [docAvatar, setDocAvatar] = useState(null);
    const [docAvatarPreview, setDocAvatarPreview] = useState("");

    useEffect(() => {
        // Set initial values when the modal opens
        if (doctor) {
            setFirstName(doctor.firstName);
            setLastName(doctor.lastName);
            setEmail(doctor.email);
            setPhone(doctor.phone);
            setNic(doctor.nic);
            setDob(doctor.dob.substring(0, 10)); // Assuming dob is in YYYY-MM-DD format
            setGender(doctor.gender);
            setDoctorDepartment(doctor.doctorDepartment);
            setDocAvatar(doctor.docAvatar);
            setDocAvatarPreview(doctor.docAvatar?.url);
        }
    }, [doctor]);

    const handleAvatar = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setDocAvatarPreview(reader.result);
            setDocAvatar(file);
        };
    };

    const handleUpdateDoctor = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("nic", nic);
            formData.append("dob", dob);
            formData.append("gender", gender);
            formData.append("doctorDepartment", doctorDepartment);
            if (docAvatar instanceof File) {
                formData.append("docAvatar", docAvatar);
            }

            await axios.put(`http://localhost:4000/api/v1/user/doctor/update/${doctor._id}`, formData, {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Doctor updated successfully");
            onClose(); // Close the modal after successful update
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">Edit Doctor</h2>
                <form onSubmit={handleUpdateDoctor}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <img
                                src={docAvatarPreview ? docAvatarPreview : "/docHolder.jpg"}
                                alt="Doctor Avatar"
                                className="w-24 h-24 rounded-full mb-4"
                            />
                            <input type="file" onChange={handleAvatar} className="mb-4" />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <input
                                type="number"
                                placeholder="Mobile Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <input
                                type="number"
                                placeholder="NIC"
                                value={nic}
                                onChange={(e) => setNic(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            />
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <select
                                value={doctorDepartment}
                                onChange={(e) => setDoctorDepartment(e.target.value)}
                                className="w-full p-2 mb-4 border rounded"
                            >
                                <option value="">Select Department</option>
                                <option value="Pediatrics">Pediatrics</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Oncology">Oncology</option>
                                <option value="Radiology">Radiology</option>
                                <option value="Physical Therapy">Physical Therapy</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="ENT">ENT</option>
                            </select>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Update Doctor
                            </button>
                        </div>
                    </div>
                </form>
                <button
                    onClick={onClose}
                    className="bg-gray-300 text-gray-700 py-2 px-4 mt-4 rounded hover:bg-gray-400 transition duration-300"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditDoctorModal;

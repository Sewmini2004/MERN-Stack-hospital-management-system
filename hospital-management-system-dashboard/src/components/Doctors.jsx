import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import EditDoctorModal from "./EditDoctorModal"; // Import the modal component

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to hold the selected doctor for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [confirmDelete, setConfirmDelete] = useState(false); // State to confirm delete action

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
            "http://localhost:4000/api/v1/user/doctors",
            { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  const handleEditClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (doctor) => {
    setSelectedDoctor(doctor);
    setConfirmDelete(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
          `http://localhost:4000/api/v1/user/doctors/${selectedDoctor._id}`,
          { withCredentials: true }
      );
      toast.success("Doctor deleted successfully");
      setConfirmDelete(false); // Close confirmation modal
      // Optional: Refresh doctor list after deletion
      const updatedDoctors = doctors.filter(doc => doc._id !== selectedDoctor._id);
      setDoctors(updatedDoctors);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteCancel = () => {
    setConfirmDelete(false);
  };

  const handleUpdateDoctor = (updatedDoctor) => {
    const updatedDoctors = doctors.map(doc => doc._id === updatedDoctor._id ? updatedDoctor : doc);
    setDoctors(updatedDoctors);
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
      <section className="page doctors p-8">
        <h1 className="text-3xl font-bold mb-8">DOCTORS</h1>
        <div className="banner overflow-x-auto">
          {doctors && doctors.length > 0 ? (
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">Full Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200">Phone</th>
                  <th className="py-2 px-4 border-b border-gray-200">DOB</th>
                  <th className="py-2 px-4 border-b border-gray-200">Department</th>
                  <th className="py-2 px-4 border-b border-gray-200">NIC</th>
                  <th className="py-2 px-4 border-b border-gray-200">Gender</th>
                  <th className="py-2 px-4 border-b border-gray-200">Actions</th>
                </tr>
                </thead>
                <tbody>
                {doctors.map((element) => (
                    <tr key={element._id} className="hover:bg-gray-50 transition duration-300">
                      <td className="py-2 px-4 border-b border-gray-200">{`${element.firstName} ${element.lastName}`}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.email}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.phone}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.dob.substring(0, 10)}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.doctorDepartment}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.nic}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.gender}</td>
                      <td className="py-2 px-4 border-b border-gray-200 flex space-x-2">
                        <button
                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300"
                            onClick={() => handleEditClick(element)}
                        >
                          Edit
                        </button>
                        <button
                            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300"
                            onClick={() => handleDeleteClick(element)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
          ) : (
              <h1 className="text-xl font-semibold">No Registered Doctors Found!</h1>
          )}
        </div>
        {isModalOpen && (
            <EditDoctorModal
                doctor={selectedDoctor}
                onClose={() => setIsModalOpen(false)}
                onUpdate={handleUpdateDoctor}
            />
        )}
        {confirmDelete && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-xl mb-4">Are you sure you want to delete {selectedDoctor.firstName} {selectedDoctor.lastName}?</p>
                <div className="flex justify-center space-x-4">
                  <button
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                      onClick={handleDeleteConfirm}
                  >
                    Confirm Delete
                  </button>
                  <button
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
                      onClick={handleDeleteCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
        )}
      </section>
  );
};

export default Doctors;

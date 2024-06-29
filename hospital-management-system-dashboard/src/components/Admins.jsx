import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import EditAdminModal from "./EditAdminModal"; // Import the modal component

const AdminTable = () => {
  const [admins, setAdmins] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const [selectedAdmin, setSelectedAdmin] = useState(null); // State to hold the selected admin for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [confirmDelete, setConfirmDelete] = useState(false); // State to confirm delete action

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const { data } = await axios.get(
            "http://localhost:4000/api/v1/user/admins",
            { withCredentials: true }
        );
        setAdmins(data.admins);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchAdmins();
  }, []);

  const handleEditClick = (admin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (admin) => {
    setSelectedAdmin(admin);
    setConfirmDelete(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
          `http://localhost:4000/api/v1/user/admin/delete/${selectedAdmin._id}`,
          { withCredentials: true }
      );
      toast.success("Admin deleted successfully");
      setConfirmDelete(false); // Close confirmation modal
      // Optional: Refresh admin list after deletion
      const updatedAdmins = admins.filter(adm => adm._id !== selectedAdmin._id);
      setAdmins(updatedAdmins);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteCancel = () => {
    setConfirmDelete(false);
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
      <section className="page admins p-8">
        <h1 className="text-3xl font-bold mb-8">ADMINS</h1>
        <div className="banner overflow-x-auto">
          {admins && admins.length > 0 ? (
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200">Full Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200">Phone</th>
                  <th className="py-2 px-4 border-b border-gray-200">DOB</th>
                  <th className="py-2 px-4 border-b border-gray-200">NIC</th>
                  <th className="py-2 px-4 border-b border-gray-200">Gender</th>
                  <th className="py-2 px-4 border-b border-gray-200">Actions</th>
                </tr>
                </thead>
                <tbody>
                {admins.map((element) => (
                    <tr key={element.nic} className="hover:bg-gray-50 transition duration-300">
                      <td className="py-2 px-4 border-b border-gray-200">{`${element.firstName} ${element.lastName}`}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.email}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.phone}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{element.dob.substring(0, 10)}</td>
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
              <h1 className="text-xl font-semibold">No Registered Admins Found!</h1>
          )}
        </div>
        {isModalOpen && (
            <EditAdminModal
                admin={selectedAdmin}
                onClose={() => setIsModalOpen(false)}
            />
        )}
        {confirmDelete && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-xl mb-4">Are you sure you want to delete {selectedAdmin.firstName} {selectedAdmin.lastName}?</p>
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

export default AdminTable;

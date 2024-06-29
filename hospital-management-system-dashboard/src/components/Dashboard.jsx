import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>
                  {admin &&
                    `${admin.firstName} ${admin.lastName}`}{" "}
                </h5>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
                Assumenda repellendus necessitatibus itaque.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>1500</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>10</h3>
          </div>
        </div>
        <div className="banner">
          <h5 className="font-bold text-2xl text-[#213360]" >Appointments</h5>
          <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 font-bold text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 font-bold text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 font-bold text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 font-bold text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 font-bold text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 font-bold text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visited</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {appointments && appointments.length > 0 ? (//mt ui ekth ekk pennl krnnon wde kynnko pana
                appointments.map((appointment) => (
                    <tr key={appointment._id} className="transition-all hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{`${appointment.firstName} ${appointment.lastName}`}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.appointment_date.substring(0, 16)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                            className={
                              `rounded-lg px-2 py-1 text-xs font-semibold focus:outline-none ` +
                              (appointment.status === "Pending" ? "bg-yellow-200 text-yellow-800" :
                                  appointment.status === "Accepted" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800")
                            }
                            value={appointment.status}
                            onChange={(e) => handleUpdateStatus(appointment._id, e.target.value)}
                        >
                          <option value="Pending" className="bg-yellow-200 text-yellow-800">Pending</option>
                          <option value="Accepted" className="bg-green-200 text-green-800">Accepted</option>
                          <option value="Rejected" className="bg-red-200 text-red-800">Rejected</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appointment.hasVisited ? <GoCheckCircleFill className="text-green-500" /> : <AiFillCloseCircle className="text-red-500" />}
                      </td>
                    </tr>
                ))
            ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-sm text-gray-500 text-center">No Appointments Found!</td>
                </tr>
            )}
            </tbody>
          </table>

          {}
        </div>
      </section>
    </>
  );
};

export default Dashboard;

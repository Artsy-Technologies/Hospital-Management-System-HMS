import React from "react";
import "../PagesRouter/Dashboard.css";
import Profileimg from "../assets/profile-icon.png.jpg";
import "bootstrap/dist/css/bootstrap.css";


function Profile() {
  return (
    <div >
     
      <div className="header">
        <div className="user-profile">
          <div className="profile-img">JD</div>
          <div className="user-info">
            <div className="user-name">John Doe</div>
            <div className="user-role">Administrator</div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-content">
        <div className="patient-detail">
          <div className="page-title">
            <div className="title">Patient Detail</div>
          </div>

          <div className="patient-content">
            <div>

            <img className="patient-img" src={Profileimg} />

              
            </div>

            <div className="patient-info">
              <div className="user-name">Patient Name: John Doe</div>
              <div className="user-dob">Date of Birth: 03/05/1998</div>
              <div className="user-id">Patient ID: 01PT852oC</div>
              <div className="user-phno">Contact Number: 598721344xx</div>
              <div className="user-addr">Residential Address: City Name</div>
            </div>
          </div>

          {/* Patient History Table */}
          <div className="table-card">
            <div className="card-title">
              <h3>
                <i className="fas fa-shopping-bag"></i> Recent Activities
              </h3>
              <button className="btn btn-outline btn-sm">
                <i className="fas fa-eye"></i> View All
              </button>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "#ORD-001",
                  "#ORD-002",
                  "#ORD-003",
                  "#ORD-004",
                  "#ORD-005",
                ].map((order, index) => (
                  <tr key={index}>
                    <td>{order}</td>
                    <td>Customer {index + 1}</td>
                    <td>15 Mar 2025</td>
                    <td>$125.00</td>
                    <td>
                      <span className="status active">
                        <i className="fas fa-check-circle"></i> Completed
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-outline btn-sm">
                        <i className="fas fa-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
//  function Profile() {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       {/* <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
//         <h1 className="text-2xl font-bold mb-6">Patient Panel</h1>
//         <nav className="flex-1">
//           <ul className="space-y-4">
//             <li><a href="#" className="text-blue-400 hover:underline">Profile</a></li>
//             <li><a href="#" className="hover:text-blue-400 flex items-center">📹 Video-Call Appointment</a></li>
//             <li><a href="#" className="hover:text-blue-400 flex items-center">🏦 Billing and Payments</a></li>
//             <li><a href="#" className="hover:text-blue-400 flex items-center">📜 Medical History</a></li>
//           </ul>
//         </nav>
//       </aside> */}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col bg-gray-100 ">
//         {/* Header */}
//         <div className="header bg-white p-4 flex justify-between items-center shadow-md ">
//           <div className="user-profile flex items-center">
//             <div className="profile-img w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">
//               JD
//             </div>
//             <div className="user-info ml-4">
//               <div className="user-name font-medium">John Doe</div>
//               <div className="user-role text-sm text-gray-500">Administrator</div>
//             </div>
//           </div>
//         </div>

//         {/* Main Patient Details */}
//         <div className="main-content flex-1 p-6 overflow-auto">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="page-title">
//               <h2 className="text-xl font-semibold">Patient Detail</h2>
//             </div>

//             <div className="patient-content flex mt-6">
//               <img className="w-20 h-20 rounded-full" src="Profileimg" alt="Profile" />
//               <div className="ml-6">
//                 <p><strong>Patient Name:</strong> John Doe</p>
//                 <p><strong>Date of Birth:</strong> 03/05/1998</p>
//                 <p><strong>Patient ID:</strong> 01PT852oC</p>
//                 <p><strong>Contact Number:</strong> 598721344xx</p>
//                 <p><strong>Residential Address:</strong> City Name</p>
//               </div>
//             </div>
//           </div>

//           {/* Patient History Table */}
//           <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Recent Activities</h3>
//               <button className="text-blue-500 hover:underline">View All</button>
//             </div>

//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="p-2 text-left">Patient ID</th>
//                   <th className="p-2 text-left">Customer</th>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Amount</th>
//                   <th className="p-2 text-left">Status</th>
//                   <th className="p-2 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {["#ORD-001", "#ORD-002", "#ORD-003"].map((order, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="p-2">{order}</td>
//                     <td className="p-2">Customer {index + 1}</td>
//                     <td className="p-2">15 Mar 2025</td>
//                     <td className="p-2">$125.00</td>
//                     <td className="p-2 text-green-600">Completed</td>
//                     <td className="p-2 text-blue-500 hover:underline cursor-pointer">View</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






export default Profile;

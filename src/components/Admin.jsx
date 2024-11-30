// import React from "react";
// import UserTable from "./UserTable";

// const Admin = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Dashboard</h1>
//       {/* Add User Management Table */}
//       <UserTable />
//     </div>
//   );
// };

// export default Admin;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited
  const [formData, setFormData] = useState({ name: "", email: "", username: "" });

  // Fetch users from the backend
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Edit user: Show form with current user data
  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({ name: user.name, email: user.email, username: user.username });
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save edited user
  const saveUser = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, formData);
      setEditingUser(null);
      getUsers(); // Refresh the user list after updating
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-center text-white mb-4">Admin Dashboard</h3>
      <div className="row justify-content-center">
        {users.map((user) => (
          <div key={user._id} className="col-md-4 mb-4">
            <div className="card bg-black text-white">
              <div className="card-body">
                {editingUser === user._id ? (
                  <>
                    <div className="mb-3">
                      <label className="form-label text-white">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-white">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => saveUser(user._id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditingUser(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Username: {user.username}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-primary btn-sm" onClick={() => handleEdit(user)}>
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;

import React, { useState } from "react";
import './UserTable.css'

const UserTable = () => {
  // Example user data
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", password: "********", username: "alice123" },
    { id: 2, name: "Bob", email: "bob@example.com", password: "********", username: "bob456" },
    { id: 3, name: "Charlie", email: "charlie@example.com", password: "********", username: "charlie789" },
  ]);

  // Handlers for Edit and Delete actions
  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // Add your edit logic here
  };

  const handleDelete = (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
      <h2>User Management</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th style={styles.headerCell}>Name</th>
            <th style={styles.headerCell}>Email</th>
            <th style={styles.headerCell}>Password</th>
            <th style={styles.headerCell}>Username</th>
            <th style={styles.headerCell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={styles.row}>
              <td style={styles.cell}>{user.name}</td>
              <td style={styles.cell}>{user.email}</td>
              <td style={styles.cell}>{user.password}</td>
              <td style={styles.cell}>{user.username}</td>
              <td style={styles.cell}>
                <button
                  onClick={() => handleEdit(user.id)}
                  style={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Inline styles for the table
const styles = {
  headerCell: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  cell: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  row: {
    backgroundColor: "#f4f4f4",
  },
  editButton: {
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UserTable;

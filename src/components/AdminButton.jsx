import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminButton.css'

const AdminButton = ({ text }) => {
  const navigate = useNavigate();

  return (
    <button
      className="admin-button"
      onClick={() => navigate('/admin')}
    >
      {text}
    </button>
  );
};

export default AdminButton;

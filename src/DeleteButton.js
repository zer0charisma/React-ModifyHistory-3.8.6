import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function DeleteButton({ onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const history = useHistory();

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await onDelete(); // Assuming onDelete is a function that handles the delete operation
      console.log("User deleted successfully");
      history.push("/"); // Redirect to the homepage after successful delete
    } catch (error) {
      console.error("Failed to delete user:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup or handle anything needed when the component unmounts
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <button type="button" onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}

export default DeleteButton;

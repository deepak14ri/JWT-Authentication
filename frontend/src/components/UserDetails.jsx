import { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingUser, setAddingUser] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [nameFilter, setNameFilter] = useState(''); // New state variable for name filter
  const [emailFilter, setEmailFilter] = useState(''); // New state variable for email filter

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    axios.get('http://localhost:4000/users')
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleAddUser = () => {
    // Perform input validation here if needed
    const newUser = { name: newUserName, email: newUserEmail };
    axios.post('http://localhost:4000/users', newUser)
      .then(() => {
        fetchUsers();
        setAddingUser(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:4000/users/${userId}`)
      .then(() => {
        fetchUsers();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter the userData based on name and email filters
  const filteredUserData = userData.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(nameFilter.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(emailFilter.toLowerCase());
    return nameMatch && emailMatch;
  });

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      {/* Filter Inputs */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Filter by Name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Email"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
        />
      </div>

      {/* User List */}
      {filteredUserData.length === 0 && <p>No matching users found.</p>}

      {filteredUserData.map((user) => (
        <div key={user.id} style={{ border: '1px solid #ccc', padding: '5px', marginBottom: '10px' }}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </div>
      ))}

      {/* Add User Section */}
      {addingUser ? (
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      ) : (
        <button onClick={() => setAddingUser(true)}>Add New User</button>
      )}
    </div>
  );
};

export default UserDetails;

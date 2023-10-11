import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import NavigationBar from '../components/NavigationBar';


export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [addUser, setAddUser] = useState(null);

  // Check for a success message in localStorage
  const successMessage = localStorage.getItem('successMessage');
  if (successMessage) {
    // Display the success message as a toast
    showSuccessToast(successMessage);

    // Clear the success message from localStorage
    localStorage.removeItem('successMessage');
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [formAddData, setFormAddData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/auth/admin');
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (user) => {
    setEditUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  // Modal should show up when add user button is clicked
  const handleAddClick = () => {
    setAddUser(true);
    setFormData({
      name: user.name,
      email: user.email,
      password: user.password,
      password: user.password_confirmation
    });
  };

  const handleUpdateClick = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/auth/admin/${editUser.id}`, formData);

      

      setEditUser(null);
      setFormData({
        name: '',
        email: '',
        role: '',
      });

       // Reload the window after a successful update
       window.location.reload()
      } catch (error) {
      console.error(error);
    }
  };

  // Add user
  const handlePostClick = async () => {
    try {
      const formDataWithRole = {
        ...formAddData,
        role: 'Encoder',
      };

    await axios.post('http://127.0.0.1:8000/api/auth/register', formDataWithRole);
    setEditUser(null);
    setFormAddData({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    })
    
    // Reload the window after a successful update
    window.location.reload()
  } catch(error) {
      if (error.response.data === "{\"email\":[\"The email has already been taken.\"]}") {
        alert("The email has already been taken.")
      }
    }
  }

  // Delete user
  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/auth/admin/${id}`);
      console.log('User deleted successfully');
      window.location.reload()
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  return (
    <div>
      <NavigationBar/>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 w-[100%] border border-green-500 rounded"
        onClick={() => handleAddClick()}>
        Add User
      </button>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Email Address
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Role
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>

        
        <tbody className="block md:table-row-group">
          {users.map((user, index) => {
            return (
              <tr key={index} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
                  {user.name}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>
                  {user.email}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Role</span>
                  {user.role}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                  <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  onClick={() => handleDeleteClick(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}

          {editUser && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">Edit User</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full p-2 border rounded-md"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                    Role
                  </label>  

                  <select 
                    id="dropdown"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Encoder">Encoder</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
                    onClick={handleUpdateClick}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setEditUser(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}


          {/* ADD USER */}
          {addUser && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">Add User</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    First Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md"
                    type="text"
                    name="name"
                    value={formAddData.name}
                    onChange={(e) => setFormAddData({ ...formAddData, name: e.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Email Address
                  </label>
                  <input
                    className="w-full p-2 border rounded-md"
                    type="email"
                    name="name"
                    value={formAddData.email}
                    onChange={(e) => setFormAddData({ ...formAddData, email: e.target.value })}
                  />
                </div>


                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Password
                  </label>
                  <input
                    className="w-full p-2 border rounded-md"
                    type="password"
                    name="password"
                    value={formAddData.password}
                    onChange={(e) => setFormAddData({ ...formAddData, password: e.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Confirm Password
                  </label>
                  <input
                    className="w-full p-2 border rounded-md"
                    type="password"
                    name="confirmpassword"
                    value={formAddData.password_confirmation}
                    onChange={(e) => setFormAddData({ ...formAddData, password_confirmation: e.target.value })}
                  />
                </div>

               
                
                <div className="flex justify-end">
                  <button
                  type='submit'
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
                    onClick={handlePostClick}
                  >
                    Add User
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setAddUser(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}



          
        </tbody>
      </table>
    </div>
  );
}
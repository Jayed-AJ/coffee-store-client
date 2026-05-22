import { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";


const Users = () => {
    const { userDelete,user } = useContext(AuthContext)
    console.log(userDelete);
    console.log(user);
    const initailUsers = useLoaderData();
    const [users, setUsers] = useState(initailUsers);
    

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-side-pearl-ten.vercel.app/user/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                             const reaminingUsers = users.filter(user => user._id !== id);
                                setUsers(reaminingUsers);

                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                            userDelete().then(() => {
                               console.log("user has been deleted from firebase!")
                            }).catch(error => console.log(error))
                        }
                    })
            }
        });



    }

    return (
        <div>
            <h1 className="text-3xl text-center my-5 font-semibold">Total Users : {users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-sm"><FaEye className="text-blue-300" size={18}></FaEye></button>
                                    <button className="btn btn-ghost btn-sm"><MdEdit className="text-blue-800" size={18}></MdEdit></button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-sm"><MdDelete className="text-red-500" size={18}></MdDelete></button>
                                </th>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
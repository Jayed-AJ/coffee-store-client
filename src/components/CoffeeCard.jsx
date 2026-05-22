import { MdEdit , MdDelete} from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from "react-router";

                     
const CoffeeCard = ({coffee,setCoffees,coffees}) => {

    const handleDelete = (_id) => {
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
                fetch(`https://server-side-pearl-ten.vercel.app/coffees/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount) {
                        Swal.fire({
                            text: "This coffee is deleted successfuly!.",
                            icon: "success",
                            title: "Deleted!",
                        });
                    const remainingCoffees = coffees.filter(coffe => coffe._id !== _id);
                    setCoffees(remainingCoffees)
                    }
                })
            }
        });
    }

    return (
        <>
            <div className="card card-side bg-base-100 shadow-sm mx-2 px-2">
            <figure className="w-1/3">
                <img
                className="h-52 lg:h-60 w-full"
                src={coffee.photoURL}
                alt="coffee-photo" />
            </figure>
            <div className="w-2/3 flex justify-around items-center">
                <div className="space-y-3 mb-5">
                    <p className="text-lg font-semibold rancho text-amber-950">Name : {coffee.coffee}</p>
                    <p className="text-lg font-semibold rancho text-amber-950">Chef : {coffee.chef}</p>
                    <p className="text-lg font-semibold rancho text-amber-950">Price : {coffee.price} $</p>
                </div>
                <div className="card-actions justify-end mt-7">
                    <div className="join join-vertical mb-12 space-y-2">
                        <Link to={`/coffee/${coffee._id}`}>
                            <button className="btn btn-sm px-2 join-item bg-orange-200"><FaEye size={17} className="text-white"/></button>   
                        </Link>
                        <Link to={`/updateCoffee/${coffee._id}`}>
                            <button className="btn btn-sm px-2 join-item bg-black "><MdEdit size={17} className="text-white"/></button>
                        </Link>
                        <button onClick={() => handleDelete(coffee._id)} className="btn btn-sm px-2 join-item bg-red-600"><MdDelete size={17} className="text-white" /></button>
                        </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default CoffeeCard;
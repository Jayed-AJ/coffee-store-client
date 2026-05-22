import { IoMdArrowBack } from "react-icons/io";
// import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const { _id, taste, coffee, supplier, chef, price, photoURL, details, } = useLoaderData();
    // console.log(taste,coffee,supplier,chef,price,photoURL,details,);


    let navigate = useNavigate();
    const handleUpdate = (e) => {
        e.preventDefault();
        // const form = e.target;
        const formData = new FormData(e.target);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee)

        // update data to database

        fetch(`https://server-side-pearl-ten.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "The Coffee has been successfully updated!",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    console.log('data after update', data);
                }
            })
    }

    return (
        <div className="p-2 md:p-20 lg:p-24 space-y-5">
            <button onClick={() => navigate(-1)} className='text-xl btn-ghost btn'> <span><IoMdArrowBack className="inline" /> </span> back to home</button>
            <div className="px-2 py-10 md:p-12 bg1 space-y-5">
                <h1 className="text-center text-4xl font-semibold">Update Coffee</h1>
                <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <div className="p-2 md:p-6 lg:p-10">
                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Name</label>
                                <input name="coffee" defaultValue={coffee} type="text" className="input w-full" placeholder="Name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Chef</label>
                                <input name="chef" defaultValue={chef} type="text" className="input w-full" placeholder="enter chef name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Supplier</label>
                                <input name="supplier" defaultValue={supplier} type="text" className="input w-full" placeholder="enter supplier name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Taste</label>
                                <input name="taste" defaultValue={taste} type="text" className="input w-full" placeholder="enter coffee taste" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Price</label>
                                <input name="price" defaultValue={price} type="text" className="input w-full" placeholder="enter coffee price" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Details</label>
                                <input name="details" defaultValue={details} type="text" className="input w-full" placeholder="enter coffee details" />
                            </fieldset>
                        </div>
                        <fieldset className="my-5 fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label text-lg font-semibold text-black">PhotoUrl</label>
                            <input name="photoURL" defaultValue={photoURL} type="text" className="input w-full" placeholder="enter coffee Photo URL" />
                        </fieldset>

                        <input className="btn w-full btn-bg1 border-amber-950 border-2 text-amber-950" type="submit" value="Update Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;
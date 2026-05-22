import { IoMdArrowBack } from "react-icons/io";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";
const AddCoffee = () => {
    let navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const coffee = e.target.coffee.value;
        // const chef = e.target.chef.value;
        // const supplier = e.target.supplier.value;
        // const taste = e.target.taste.value;
        // const details = e.target.details.value;
        // const category = e.target.category.value;
        // const photoURL = e.target.photoURL.value;
        // const newCoffee = {coffee,chef,supplier,taste,details,category,photoURL};
        // console.log(newCoffee);
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData.entries())
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // CREATE DATA in the data base

        fetch('https://server-side-pearl-ten.vercel.app/coffees',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                console.log("data from server", data);
                Swal.fire({
                    title: "Coffee added successfuly!",
                    icon: "success",
                    draggable: true
                    });
                // form.reset()
            }
        })
    }

    return (
        <div className="p-2 md:p-20 lg:p-24 space-y-5">
            <button onClick={() => navigate(-1)} className='text-2xl btn-ghost btn rancho text-amber-950 font-bold'> <span><IoMdArrowBack className="inline"/> </span> back to home</button>
            <div className="px-2 py-10 md:p-12 bg1 space-y-5">
                <h1 className="text-center text-4xl font-semibold">Add New Coffee</h1>
                <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <div className="p-2 md:p-6 lg:p-10">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Name</label>
                                <input name="coffee" type="text" className="input w-full" placeholder="Name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Chef</label>
                                <input name="chef" type="text" className="input w-full" placeholder="enter chef name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Supplier</label>
                                <input name="supplier" type="text" className="input w-full" placeholder="enter supplier name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Taste</label>
                                <input name="taste" type="text" className="input w-full" placeholder="enter coffee taste" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Price</label>
                                <input name="price" type="text" className="input w-full" placeholder="enter coffee price" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">Details</label>
                                <input name="details" type="text" className="input w-full" placeholder="enter coffee details" />
                            </fieldset>
                        </div>
                        <fieldset className="my-5 fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <label className="label text-lg font-semibold text-black">PhotoUrl</label>
                                <input name="photoURL" type="text" className="input w-full" placeholder="enter coffee Photo URL" />
                        </fieldset>
                       
                        <input className="btn w-full btn-bg1 border-amber-950 border-2 text-amber-950" type="submit" value="Add Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

// https://i.ibb.co.com/ksGnKy4y/2.png
// https://i.ibb.co.com/tMWLKhYZ/6.png
// https://i.ibb.co.com/nNBMwF9g/3.png
// https://i.ibb.co.com/N23sZkBM/4.png
// https://i.ibb.co.com/mPGJbfr/5.png

export default AddCoffee;
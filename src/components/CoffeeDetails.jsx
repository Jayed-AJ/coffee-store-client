import { useLoaderData, useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
const CoffeeDetails = () => {
    let navigate = useNavigate();
    const coffee = useLoaderData();
    console.log(coffee);

    return (
        <div className="py-10">
            <div className="my-5 w-11/12 md:w-4/5 mx-auto">
                <button onClick={() => navigate(-1)} className="btn btn-ghost border-none text-xl font-bold rancho text-amber-950"><IoMdArrowBack className="inline"/> Back to Home</button>
            </div>
            <div className="mt-10 w-11/12 md:w-4/5 mx-auto bg1 flex flex-col md:flex-row px-0 lg:px-20 py-16 md:py-28">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img className=" w-3/5  md:w-3/5 lg:h-80 " src={coffee.photoURL}/>
                </div>
                <div className="mt-5 md:mt-0 pl-5 md:pl-0 w-full md:w-1/2 flex flex-col justify-center">
                     <h1 className="text-2xl rancho text-amber-950 font-bold mb-5">Nicetice</h1>
                     <p className="text-lg"><span className="font-semibold">Name: </span>{coffee.coffee}</p>
                     <p className="text-lg"><span className="font-semibold">Taste: </span>{coffee.taste}</p>
                     <p className="text-lg"><span className="font-semibold">Price: </span>{coffee.price}</p>
                     <p className="text-lg"><span className="font-semibold">Chef: </span>{coffee.chef}</p>
                     <p className="text-lg"><span className="font-semibold">Supplier: </span>{coffee.supplier}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
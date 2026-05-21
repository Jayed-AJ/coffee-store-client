import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const initailCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(initailCoffees);
    return (
        <div>
            <h1 className="my-5 text-center text-2xl rancho font-black text-amber-900 text-shadow-amber-950 italic">Our Popular Products</h1>
            <Link to={`/addCoffee`}>
                <button className="btn btn-ghost block mx-auto rancho text-xl font-semibold text-amber-900">Add Coffee</button>              
            </Link>
            <div className="mt-5 grid gird-cols-1 md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id}
                     setCoffees={setCoffees}
                     coffees={coffees}
                     coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;
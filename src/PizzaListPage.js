import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

export function PizzaListPage() {

    const [pizzak, setPizzak] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        document.title="Pizza rendelés";
        setFetchPending(true);
        fetch("https://pizza.kando-dev.eu/Pizza", {})
        .then((res) => res.json())
        .then((pizzak) => setPizzak(pizzak))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
 }, []);
 return (
   <div className='p-5 m-auto text-center content bg-ivory'>
    { isFetchPending ? ( <div className='spinner-border'></div>) : (
        <div>
            <h2>Pizzák listája</h2>
            {pizzak.map((pizza) => (
                <div key={pizza.id + 4} className='card col-sm-6 d-inline-block m-3 p-4'>
                    <h5 className='text-muted'>{pizza.name}</h5>
                    <div className='small'>Gluténmentes: {pizza.isGlutenFree? (<>Igen</>):(<>Nem</>)}</div>
                    <NavLink key={pizza.id} to={"/Pizza/" + pizza.id}>
                    <div className='card-body'>
                        <img className='img-fluid'
                        style={{ maxHeight: 200 }}
                        alt = "Nincs kép!"
                        src={pizza.kepURL ? pizza.kepURL : "https://via.placeholder.com/400x800"}
                        />
                    </div></NavLink>
                    <br />
                    <NavLink key={pizza.id+1} to={"/mod-pizza/" + pizza.id}>
                        <i className="btn btn-primary">Szerkesztés</i>
                    </NavLink>
                    <NavLink key={pizza.id+2} to={"/del-pizza/" + pizza.id} className={"btn btn-danger"}>
                        Törlés
                    </NavLink>
                </div>
                
            ))}
        </div>
    )}
   </div> 
 );
}
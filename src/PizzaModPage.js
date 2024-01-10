import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function PizzaModPage() {

    const param = useParams();
    const navigate = useNavigate();
    const id = param.pizzaId;
    const [modname, setModname] = useState("");
    const [modgluten, setModGluten] = useState("");
    const [modkepurl, setModkepurl] = useState("");

    useEffect(() => {
        document.title="Pizza szerkesztés";

        (async () => {
            try {
            const res = await fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {});
            const pizzaData = await res.json();
            setModname(pizzaData.name);
            setModGluten(pizzaData.isGlutenFree);
            setModkepurl(pizzaData.kepURL);
        } catch (error) {
            console.log(error);   
        } 
    })();
}, [id, modname,modgluten, modkepurl]);

const modName = (e) => {
    setModname(e.target.value);
}
const modGluten = (e) => {
    setModGluten(e.target.value);
}
const modkepUrl = (e) => {
    setModkepurl(e.target.value);
}
return(
    <div className='p-3 content bg-secondary text-center'>
        <h2>Pizza szerkesztése</h2>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "id": id,
                    "name": e.target.elements.name.value,
                    "isGlutenFree": (e.target.elements.isGlutenFree.checked? (1):(0)),
                    "kepURL": e.target.elements.kepURL.value
                }),
            })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
        }}
            >
            <div className='form-group row pb-3'>
            <div><label htmlFor="name" className='col-sm-3 col-form-label'> Név: </label>
                        <input type="text" id="name" name="name" className="form-control" defaultValue={modname} onChange={modName} autoComplete="off"/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="isGlutenFree" className='col-form-label'> Glutén mentes: </label>   
                        <input type="checkbox" id="isGlutenFree" name="isGlutenFree" className="p-2" defaultValue={modgluten} onChange={modGluten} autoComplete="off" />
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="kepURL" className='col-sm-3 col-form-label'> Kép URL: </label>   
                        <input type="text" id="kepURL" name="kepURL" className="form-control" defaultValue={modkepurl} onChange={modkepUrl} autoComplete="off" />
                    </div>
            </div>
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        
    </div>
);
}
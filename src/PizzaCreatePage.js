import { useNavigate } from 'react-router-dom';

export function PizzaCreatePage() {
const navigate = useNavigate();

return (
    <div className='p-7 content bg-secondary text-center text-dark'>
        <h2>Új pizza hozzáadása</h2>
        <form
        onSubmit={(e) => {
            e.persist();
            e.preventDefault();
            document.title="Pizza hozzáadása";
            fetch("https://pizza.kando-dev.eu/Pizza", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({
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
                <label htmlFor="name" className='col-sm-3 col-form-label'> Név: </label>
                    <div>
                        <input type="text" id="name" name="name" className="form-control" autoComplete='name' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                    <div>
                        <label htmlFor="isGlutenFree" className='col-sm-3 col-form-label'> Gluténmentes: </label>
                        <input type="checkbox" id="isGlutenFree" name="isGlutenFree" className="p-2" autoComplete='isGlutenFree'/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="kepURL" className='col-sm-3 col-form-label'> Kép URL: </label>
                    <div>
                        <input type="text" id="kepURL" name="kepURL" className="form-control" autoComplete='kepURL' />
                    </div>
            </div>
            <button type="submit" className='btn btn-danger'>Küldés</button>
            </form>
        
    </div>
);
}
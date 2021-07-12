import { useState } from "react";

export default function SearchBox() {
    const [searchText, setSearchT] = useState("");
    return(
        <div>
            <div>
                Buscador de personal
                <label>
                    <input value={searchText} onChange = {({target:{value}}) =>setSearchT(value)} />
                </label>
                <button>Buscar</button>
            </div>
        </div>
    );
    
}
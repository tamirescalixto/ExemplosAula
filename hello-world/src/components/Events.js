import { useState } from "react";

const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

        const a = 10;
        const b = 15;
        const [name] = useState("Matheus");

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
                <button onClick={() =>{
                    if(true) {
                        console.log("Isso não deveria existir");
                    }
                }}>Clique aqui, por favor!</button>

                <p>A: {a}</p>
                <p>B: {b}</p>
                <button onClick={() => console.log(a + b)}>Somar</button>
            </div>
            {name === "Matheus" ? (
                <div>
                    <p>O nome é Matheus</p>
                </div>
            ) : (
                <div>
                    <p>O nome não foi encontrado</p>
                </div>
            )}
        </div>
    );
};

export default Events;
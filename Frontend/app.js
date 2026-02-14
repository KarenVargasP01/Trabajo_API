

let bt=document.getElementById("bt")
let dato=document.getElementById("opciones")
let url ="http://127.0.0.1:8000/getjson" // conexion de la url de la futura api


bt.addEventListener("click", () => {
    let myAPI = url + "?localidad=" + dato.value;    
    peticion(myAPI);
    
 }
)

// conexion remota se hace con fetch

async function peticion (myAPI){
    let response = await fetch (myAPI);
    let datos = response .json()
}
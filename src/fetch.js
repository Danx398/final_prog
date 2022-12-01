export class Consulta {
    constructor() {
        this.url = "https://rickandmortyapi.com/api/";
    }
    personajes() {
        fetch(`${this.url}character`)
            .then((respuesta => respuesta.json()))
            .then((respuesta) => {
                // console.log(respuesta);
                let arreglo = respuesta.results;
                let card = ``;
                arreglo.map((aux) => {
                    let {
                        id
                    } = aux;
                    if (id < 11) {
                        let {id,name,image,location,status} = aux;
                        card += `
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${image}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 mt-2 mb-5">
                            <div class="card-body">
                            <h3 class="card-title">${name}</h3>
                            <h5>ubicación</h5>
                            <p class="card-text">${location.name}</p>
                            <h5>Estatus</h5>
                            <p class="card-text fs-5"><small class="text-muted">${status}</small></p>
                            </div>
                        </div>
                        </div>
                        `;
                    }
                });
                /* const html = document.createElement('div')
                html.innerHTML(card);
                document.querySelector('#classPP').innerHTML(html) // DOM Document Object Model */
                $('#classPP').html(card);
            })
    }
    locacion() {
        fetch(`${this.url}location`)
            .then((respuesta => respuesta.json()))
            .then((respuesta) => {
                // console.log(respuesta);
                let arreglo = respuesta.results;
                let card = ``;
                arreglo.map((etx) => {
                    let {
                        id
                    } = etx;
                    if (id < 11) {
                        let {dimension,name,type} = etx;
                        card += `
                        <div class="card mt-5">
                    <div class="card-header">
                          ${dimension}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <p>Nombre: ${name}</p>
                            <footer class="blockquote-footer">Tipo: ${type}</cite></footer>
                            </blockquote>
                        </div>
                      </div>
                    `;
                    }
                });
                $('#classLo').html(card);
            });
    }
    episodios(){
        fetch(`${this.url}episode`)
        .then((respuesta=>respuesta.json()))
        .then((respuesta=>{
            console.log(respuesta);
            let arreglo = respuesta.results;
            let card = ``;
            arreglo.map((aux)=>{
                let{id}=aux;
                if(id<11){
                    let{air_date,created,episode,name} = aux;
                    card+=`
                    <div class="card mt-5">
                    <div class="card-header">
                          ${name}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <p>Creado: ${created}</p>
                            <footer class="blockquote-footer">Dia de emisión: ${air_date}</cite></footer>
                            </blockquote>
                        </div>
                      </div>
                                        `;
                }
            });
            $('#episodiosDD').html(card);
        }));
    }

}
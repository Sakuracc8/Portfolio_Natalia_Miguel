export class Acercade {
    id? : number;
    nombreE : string;
    descripcionE : string;
    titulo : string;
    url_img : string;

    constructor(nombreE : string, descripcionE : string, titulo : string, url_img : string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.titulo = titulo;
        this.url_img = url_img;
    }
}

export class Proyectos {
    id? : number;
    nombreE : string;
    descripcionE : string;
    img_proyecto : string;
    url_proyecto : string;

    constructor(nombreE: string, descripcionE: string, img_proyecto : string, url_proyecto : string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img_proyecto = img_proyecto;
        this.url_proyecto = url_proyecto;
    }
}

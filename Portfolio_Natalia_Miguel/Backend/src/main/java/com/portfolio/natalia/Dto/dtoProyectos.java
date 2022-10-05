package com.portfolio.natalia.Dto;

import javax.validation.constraints.NotBlank;

public class dtoProyectos {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String img_proyecto;
    @NotBlank
    private String url_proyecto;
    
    //Constructor

    public dtoProyectos() {
    }

    public dtoProyectos(String nombreE, String descripcionE, String img_proyecto, String url_proyecto) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img_proyecto = img_proyecto;
        this.url_proyecto = url_proyecto;
    }
    
    //Getters y Setters

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }

    public String getImg_proyecto() {
        return img_proyecto;
    }

    public void setImg_proyecto(String img_proyecto) {
        this.img_proyecto = img_proyecto;
    }

    public String getUrl_proyecto() {
        return url_proyecto;
    }

    public void setUrl_proyecto(String url_proyecto) {
        this.url_proyecto = url_proyecto;
    }
    
    
    
}
 
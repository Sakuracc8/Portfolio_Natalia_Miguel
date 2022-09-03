package com.portfolio.natalia.Dto;

import javax.validation.constraints.NotBlank;

public class dtoAcercade {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String titulo;
    @NotBlank
    private String url_img;
    
    //Constructor

    public dtoAcercade() {
    }

    public dtoAcercade(String nombreE, String descripcionE, String titulo, String url_img) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.titulo = titulo;
        this.url_img = url_img;
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

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getUrl_img() {
        return url_img;
    }

    public void setUrl_img(String url_img) {
        this.url_img = url_img;
    }
    
    
}

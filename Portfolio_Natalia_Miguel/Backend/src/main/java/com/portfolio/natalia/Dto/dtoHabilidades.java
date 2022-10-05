package com.portfolio.natalia.Dto;

import javax.validation.constraints.NotBlank;

public class dtoHabilidades {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String porcentajeE;
    
    //Constructor

    public dtoHabilidades() {
    }

    public dtoHabilidades(String nombreE, String porcentajeE) {
        this.nombreE = nombreE;
        this.porcentajeE = porcentajeE;
    }
    
    //Getters y Setters

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getPorcentajeE() {
        return porcentajeE;
    }

    public void setPorcentajeE(String porcentajeE) {
        this.porcentajeE = porcentajeE;
    }
    
    
}
  
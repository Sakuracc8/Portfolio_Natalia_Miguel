package com.portfolio.natalia.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Habilidades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreE;
    private String porcentajeE;
    
    //Constructores

    public Habilidades() {
    }

    public Habilidades(String nombreE, String porcentajeE) {
        this.nombreE = nombreE;
        this.porcentajeE = porcentajeE;
    }
    
    //Geters y Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

package com.portfolio.natalia.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Proyectos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreE;
    private String descripcionE;
    private String img_proyecto;
    private String url_proyecto;
    
    //Constructores

    public Proyectos() {
    }

    public Proyectos(String nombreE, String descripcionE, String img_proyecto, String url_proyecto) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img_proyecto = img_proyecto;
        this.url_proyecto = url_proyecto;
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

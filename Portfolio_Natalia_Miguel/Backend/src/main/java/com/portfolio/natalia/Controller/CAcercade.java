package com.portfolio.natalia.Controller;

import com.portfolio.natalia.Dto.dtoAcercade;
import com.portfolio.natalia.Entity.Acercade;
import com.portfolio.natalia.Security.Controller.Mensaje;
import com.portfolio.natalia.Service.SAcercade;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/acercade")
@CrossOrigin(origins = "https://frontend-natalia.web.app")
public class CAcercade {
    @Autowired
    SAcercade sAcercade;

    @GetMapping("/lista")
    public ResponseEntity<List<Acercade>> list(){
        List<Acercade> list = sAcercade.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Acercade> getById(@PathVariable("id") int id){
        if(!sAcercade.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);}
        Acercade acercade = sAcercade.getOne(id).get();
        return new ResponseEntity(acercade, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoAcercade dtoacercade){
        if(StringUtils.isBlank(dtoacercade.getNombreE())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if(sAcercade.existsByNombreE(dtoacercade.getNombreE())){
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);}
        Acercade acercade = new Acercade(dtoacercade.getNombreE(), dtoacercade.getDescripcionE(), dtoacercade.getTitulo(), dtoacercade.getUrl_img());
        sAcercade.save(acercade);
        return new ResponseEntity(new Mensaje("Acerca de creado"), HttpStatus.OK);       
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoAcercade dtoacercade){
        if(!sAcercade.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if(sAcercade.existsByNombreE(dtoacercade.getNombreE()) && sAcercade.getByNombreE(dtoacercade.getNombreE()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtoacercade.getNombreE())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }

        Acercade acercade = sAcercade.getOne(id).get();

        acercade.setNombreE(dtoacercade.getNombreE());
        acercade.setDescripcionE(dtoacercade.getDescripcionE());
        acercade.setTitulo(dtoacercade.getTitulo());
        acercade.setUrl_img(dtoacercade.getUrl_img());

        sAcercade.save(acercade);
        return new ResponseEntity(new Mensaje("Acerca de actualizado"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sAcercade.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        sAcercade.delete(id);
        return new ResponseEntity(new Mensaje("Acerca de eliminado"), HttpStatus.OK);
    }
}

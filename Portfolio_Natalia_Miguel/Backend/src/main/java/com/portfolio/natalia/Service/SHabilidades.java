package com.portfolio.natalia.Service;

import com.portfolio.natalia.Entity.Habilidades;
import com.portfolio.natalia.Repository.RHabilidades;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SHabilidades {
    @Autowired
    RHabilidades rHabilidades;
    
    public List<Habilidades> list(){
        return rHabilidades.findAll();
    }
    
    public Optional<Habilidades> getOne(int id){
        return rHabilidades.findById(id);
    }
    
    public Optional<Habilidades> getByNombreE(String nombreE){
        return rHabilidades.findByNombreE(nombreE);
    }
    
    public void save(Habilidades expe){
        rHabilidades.save(expe);
    }
    
    public void delete(int id){
        rHabilidades.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rHabilidades.existsById(id);
    }
    
    public boolean existsByNombreE(String nombreE){
        return rHabilidades.existsByNombreE(nombreE);          
    }
}

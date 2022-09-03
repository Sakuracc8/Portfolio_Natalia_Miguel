package com.portfolio.natalia.Service;

import com.portfolio.natalia.Entity.Acercade;
import com.portfolio.natalia.Repository.RAcercade;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SAcercade {
    @Autowired
    RAcercade rAcercade;
    
    public List<Acercade> list(){
        return rAcercade.findAll();
    }
    
    public Optional<Acercade> getOne(int id){
        return rAcercade.findById(id);
    }
    
    public Optional<Acercade> getByNombreE(String nombreE){
        return rAcercade.findByNombreE(nombreE);
    }
    
    public void save(Acercade acercade){
        rAcercade.save(acercade);
    }
    
    public void delete(int id){
        rAcercade.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rAcercade.existsById(id);
    }
    
    public boolean existsByNombreE(String nombreE){
        return rAcercade.existsByNombreE(nombreE);          
    }
}

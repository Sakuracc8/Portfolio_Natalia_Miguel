package com.portfolio.natalia.Repository;

import com.portfolio.natalia.Entity.Acercade;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RAcercade extends JpaRepository<Acercade, Integer>{
    public Optional<Acercade> findByNombreE(String nombreE);
    public boolean existsByNombreE(String nombreE);
}

package auca.ac.rw.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import auca.ac.rw.model.Property;

public interface PropertyRepository extends JpaRepository<Property, String> {
}

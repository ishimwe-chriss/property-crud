package auca.ac.rw.service;

import java.util.List;

import org.springframework.stereotype.Service;

import auca.ac.rw.model.Property;
import auca.ac.rw.repository.PropertyRepository;

@Service
public class PropertyService {
    private final PropertyRepository propertyRepository;

    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }

    public void deleteProperty(String id) {
        propertyRepository.deleteById(id);
    }

    public Property getPropertyById(String id) {
        return propertyRepository.findById(id).orElse(null);
    }
}

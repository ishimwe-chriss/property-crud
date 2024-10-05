package auca.ac.rw.controller;

import java.util.List;

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

import auca.ac.rw.model.Property;
import auca.ac.rw.service.PropertyService;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:3000") 
public class PropertyApi {

    
     private final PropertyService propertyService;

    public PropertyApi(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

   

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable String id) {
        Property property = propertyService.getPropertyById(id);
        return property != null ? ResponseEntity.ok(property) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Property createProperty(@RequestBody Property property) {
        return propertyService.saveProperty(property);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Property> updateProperty(@PathVariable String id, @RequestBody Property property) {
        if (propertyService.getPropertyById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        property.setPropertyID(id); // Ensure the ID is set
        return ResponseEntity.ok(propertyService.saveProperty(property));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProperty(@PathVariable String id) {
        propertyService.deleteProperty(id);
        return ResponseEntity.noContent().build();
    }

}

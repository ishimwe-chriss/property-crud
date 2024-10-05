package auca.ac.rw.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Property {
    @Id
    private String propertyID;
    private String ownerID;
    private String address;
    private double size;
    private double valuation;
    private String valuationReport;
}

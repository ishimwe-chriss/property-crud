// src/pages/properties/index.tsx
import { useEffect, useState } from "react";
import Link from "next/link";

interface Property {
  propertyID: string;
  ownerID: string;
  address: string;
  size: number;
  valuation: number;
}

const Properties: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch("http://localhost:8080/api/properties");
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties List</h1>
      <Link href="/properties/create">Create New Property</Link>
      <table>
        <thead>
          <tr>
            <th>Property ID</th>
            <th>Owner ID</th>
            <th>Address</th>
            <th>Size</th>
            <th>Valuation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.propertyID}>
              <td>{property.propertyID}</td>
              <td>{property.ownerID}</td>
              <td>{property.address}</td>
              <td>{property.size}</td>
              <td>{property.valuation}</td>
              <td>
                <Link href={`/properties/edit/${property.propertyID}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Properties;

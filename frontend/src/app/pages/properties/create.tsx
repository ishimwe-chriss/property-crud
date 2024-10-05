// src/pages/properties/create.tsx
import { useState } from "react";
import { useRouter } from "next/router";

const CreateProperty: React.FC = () => {
  const [property, setProperty] = useState({
    ownerID: "",
    address: "",
    size: 0,
    valuation: 0,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: name === "size" || name === "valuation" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    router.push("/properties"); // Redirect to properties list after creation
  };

  return (
    <div>
      <h1>Create Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Owner ID:</label>
          <input type="text" name="ownerID" onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" onChange={handleChange} required />
        </div>
        <div>
          <label>Size:</label>
          <input type="number" name="size" onChange={handleChange} required />
        </div>
        <div>
          <label>Valuation:</label>
          <input
            type="number"
            name="valuation"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProperty;

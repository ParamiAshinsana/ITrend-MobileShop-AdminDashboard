import React, { useState } from "react";
import axios from "axios";
import { useNavigate , Link } from "react-router-dom";
import "./AddItem.css";

const AddItem: React.FC = () => {
  const [formData, setFormData] = useState({
    type: "",
    brand: "",
    model: "",
    description: "",
    color: "",
    price: "",
    stockQuantity: "",
    status: "",
  });

  const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/items/addItems", formData);
      alert("Item added successfully!");
      navigate("/items");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="add-itemr-containerc">


      <div>
      <h2>Add New Item</h2>
            <Link to="/items">
                <button type="button" className="add-button btn btn-primary w-100"> 
                All Items
                </button>
            </Link>
       </div>


      
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="form-grid">
          {/* <div className="form-group">
            <label>Type:</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} required />
          </div> */}
          <div className="form-group">
                <label>Type:</label>
                <select name="type" value={formData.type} onChange={handleChange} required>
                    <option value="">Select Type</option> {/* Default empty option */}
                    <option value="mobile-phone">Mobile Phone</option>
                    <option value="mobile-accessory">Mobile Accessory</option>
                </select>
            </div>

          <div className="form-group">
            <label>Brand:</label>
            <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Model:</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Color:</label>
            <input type="text" name="color" value={formData.color} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="text" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Stock Quantity:</label>
            <input type="text" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>

        {/* <div className="form-group">
          <label>Status:</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} required />
        </div> */}
          <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        <button type="submit" className="submit-button" style={{ marginTop: "30px" }}>Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

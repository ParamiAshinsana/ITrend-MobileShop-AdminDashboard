import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Items.css";

interface Items {
  id: number;
  type: string;
  brand: string;
  model: string;
  description: string;
  color: string;
  price: number;
  stockQuantity: number;
  status: string;
}

const Items: React.FC = () => {
  const [items, setItems] = useState<Items[]>([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/items/getAllItems")
//       .then((response) => setItems(response.data))
//       .catch((error) => console.error("Error fetching items:", error));
//   }, []);
useEffect(() => {
    axios
      .get("http://localhost:5000/api/items/getAllItems")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging step
        setItems(response.data.items || []); // Extract items array
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);
  

  return (
    <div className="items-containerd">
      <div className="headerr">
        <h3>Items</h3>
        <Link to="/additem">
          <button type="button" className="add-button btn btn-primary w-100">
            Add Items
          </button>
        </Link>
      </div>

                    <div className="tabler-containerq">
                <table className="item-tablee">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Description</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(items) ? (
                        items.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.type}</td>
                            <td>{item.brand}</td>
                            <td>{item.model}</td>
                            <td>{item.description}</td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            <td>{item.stockQuantity}</td>
                            <td>{item.status}</td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan={9}>No items available</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>

    </div>
  );
};

export default Items;

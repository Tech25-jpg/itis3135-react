import React from 'react';

const Inventory = () => {
  return (
    <main>
      <h2>Keen Turkey Inventory Menu</h2>
      <table>
        <thead>
          <tr>
            <th>Dish Name</th>
            <th>Chef</th>
            <th>Category</th>
            <th>Availability</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="read">
            <td>Herb Roasted Turkey</td>
            <td>Chef Kevin</td>
            <td>Main Course</td>
            <td><span className="status">Available</span></td>
            <td>
              <span className="rate three">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
          <tr className="in-progress">
            <td>Cranberry Sauce</td>
            <td>Chef Maria</td>
            <td>Side Dish</td>
            <td><span className="status">Preparing</span></td>
            <td>
              <span className="rate two">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
          <tr className="to-read">
            <td>Pumpkin Pie</td>
            <td>Chef George</td>
            <td>Dessert</td>
            <td><span className="status">Pre-Order</span></td>
            <td>
              <span className="rate three">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
          <tr className="read">
            <td>Homemade Stuffing</td>
            <td>Chef Sarah</td>
            <td>Side Dish</td>
            <td><span className="status">Available</span></td>
            <td>
              <span className="rate three">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
          <tr className="in-progress">
            <td>Mashed Potatoes</td>
            <td>Chef Kevin</td>
            <td>Side Dish</td>
            <td><span className="status">Preparing</span></td>
            <td>
              <span className="rate two">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
          <tr className="read">
            <td>Green Bean Casserole</td>
            <td>Chef Elizabeth</td>
            <td>Side Dish</td>
            <td><span className="status">Available</span></td>
            <td>
              <span className="rate one">
                <span></span><span></span><span></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Inventory;
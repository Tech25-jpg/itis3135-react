import React from 'react';

const Survey = () => {
  // Function to prevent the page from refreshing on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for your Thanksgiving feedback!");
  };

  return (
    <main>
      <h2>Thanksgiving Feast Feedback Survey</h2>
      <p id="survey-content">Help us make your Thanksgiving Dinner unforgettable!</p>

      <form id="survey-form" onSubmit={handleSubmit}>
        <div>
          <label id="name-label" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Enter your name" 
            required 
          />
        </div>

        <div>
          <label id="email-label" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your Email" 
            required 
          />
        </div>

        <div>
          <label id="number-label" htmlFor="number">Number of Guests (optional)</label>
          <input 
            type="number" 
            id="number" 
            min="1" 
            max="50" 
            placeholder="How many guests are you bringing?" 
          />
        </div>

        <div>
          <p>What type of Thanksgiving service are you interested in?</p>
          <select id="dropdown" name="service" required defaultValue="">
            <option disabled value="">Select a service</option>
            <option value="full-catering">Full Thanksgiving Catering</option>
            <option value="turkey-only">Turkey Only</option>
            <option value="sides-dessert">Sides and Desserts</option>
            <option value="meal-kit">Thanksgiving Meal Kit</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <p>Would you recommend us to a friend?</p>
          <label>
            <input type="radio" name="user-recommend" value="definitely" defaultChecked /> Definitely
          </label>
          <label>
            <input type="radio" name="user-recommend" value="maybe" /> Maybe
          </label>
          <label>
            <input type="radio" name="user-recommend" value="not-sure" /> Not sure
          </label>
        </div>

        <div>
          <p>What dishes would you like to see on our menu? (Check all that apply)</p>
          {[
            { id: 'roasted-turkey', label: 'Herb Roasted Turkey' },
            { id: 'stuffing', label: 'Homemade Stuffing' },
            { id: 'cranberry-sauce', label: 'Cranberry Sauce' },
            { id: 'mashed-potatoes', label: 'Mashed Potatoes' },
            { id: 'pumpkin-pie', label: 'Pumpkin Pie' },
            { id: 'green-bean-casserole', label: 'Green Bean Casserole' }
          ].map((dish) => (
            <label key={dish.id}>
              <input type="checkbox" name="dishes" value={dish.id} /> {dish.label}
              <br />
            </label>
          ))}
        </div>

        <div>
          <p>Any dietary restrictions or special requests?</p>
          <textarea 
            id="comments" 
            name="comment" 
            placeholder="Tell us about allergies, preferences, or special requests here.." 
            rows="5"
          ></textarea>
        </div>

        <button type="submit" id="submit">Submit Survey</button>
      </form>
    </main>
  );
};

export default Survey;
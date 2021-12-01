/*import React, {useState, useEffect} from 'react'

export default function DBfunctions(){

    function App() {

        const [restaurant, setRestaurants] = useState([]);
      
        useEffect(() => {
          getRestaurant();
        }, []);
        function getRestaurant() {
          fetch('http://localhost:3001')
            .then(response => {
              return response.text();
            })
            .then(data => {
              setRestaurants(JSON.parse(data));
            });
        }
      
        function createRestaurant() {
            let name = prompt('Enter restaurant name');
            let address = prompt('Enter restaurant address');
            let operating_hours = prompt('Enter the operating hours');
            let imagePath = prompt('Enter the pictures imagePath');
            let restaurantType = prompt('Enter the restaurants type. Buffet, fast food, fast casual, casual dining or fine dining. ');
            let priceLevel = prompt('Enter the price level: €, €€, €€€, €€€€');
      
            fetch('http://localhost:3001/restaurant', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({name, address, operating_hours, imagePath, restaurantType, priceLevel}),
            })
              .then(response => {
                return response.text();
              })
              .then(data => {
                alert(data);
                getRestaurant();
              });
          }
      
          
      function deleteRestaurant() {
        let id = prompt('Enter restaurant id');
        fetch(`http://localhost:3001/restaurant/${id}`, {
          method: 'DELETE',
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getRestaurant();
          });
      }
    }
    
}*/
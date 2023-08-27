// Fetch custsListing from the backend and display them on the page --- WORKING
function fetchAndDisplayCustomers() {
    console.log('fetchAndDisplayCustomers executed');
    fetch('http://localhost:3000/api/customers')
      .then(response => response.json())
      .then(data => {
        const custListElement = document.getElementById('custList');
        data.forEach(cust => {
          const custElement = document.createElement('div');
          custElement.className = 'cust';
          custElement.dataset.custId = cust.id;
          custElement.innerHTML = `
            <p>First name: ${cust.f_name}</p>
            <p>Last name: ${cust.l_name}</p>
            <p>Year of Birth: ${cust.y_birth}</p>
            <p>City ${cust.city}</p>
            <p>Email: ${cust.email}</p>
            <p>Username: ${cust.u_name}</p>
            <p>Password: ${cust.password}</p>
            <p>Book IDs: £ ${cust.book_id}</p>
            <hr>
          `;
          custListElement.appendChild(custElement);
        });
  
        // Click event listener for cust titles and images --- WORKING
        const custElements = document.querySelectorAll('.cust');
        custElements.forEach(custElement => {
          custElement.addEventListener('click', () => {
            // alert('cust clicked!'); // Testing
            const custId = custElement.dataset.custId;
            redirectTocustDetails(custId);
          });
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Fetch custs and display them on page load --- WORKING
  document.addEventListener('DOMContentLoaded', fetchAndDisplaycusts);
  
  // Function to get the cust ID from the URL --- WORKING
  function getcustIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
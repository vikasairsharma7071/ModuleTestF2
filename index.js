const fileInput = document.getElementById('file-input');
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event.target.result;
      const data = JSON.parse(fileData);
      // Update the table with the data
      updateTable(data);
    };
    reader.readAsText(file);
  });



  function updateTable(data) {
    const table = document.getElementById('data-table');
    table.innerHTML = ''; // Clear the table
    // Add the table headers
    table.innerHTML = `
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Image</th>
        <th>Class</th>
        <th>Marks</th>
        <th>Passing</th>
        <th>City</th>
      </tr>
    `;
    // Add a row for each element in the data array
    data.forEach(item => {
      table.innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.first_name}</td>
          <td>${item.last_name}</td>
          <td>${item.email}</td>
          <td>${item.gender}</td>
          <td><img src="${item.img_src}" alt="${item.first_name} ${item.last_name}"></td>
          <td>${item.class}</td>
          <td>${item.marks}</td>
          <td>${item.passing ? 'Passing' : 'Failing'}</td>
          <td>${item.city}</td>
        </tr>
      `;
    });
  }


  const sortButton = document.getElementById('sort-button');
  sortButton.addEventListener('click', () => {
    const table = document.getElementById('data-table');
    // Get the rows of the table
    const rows = table.rows;
    // Convert the rows to an array and sort it by the first name
    const sortedRows = [...rows].sort((a, b) => {
      const firstNameA = a.cells[1].textContent;
      const firstNameB = b.cells[1].textContent;
      if (firstNameA < firstNameB) {
        return -1;
      } else if (firstNameA > firstNameB) {
        return 1;
      } else {
        return 0;
      }
    });
    // Clear the table
    table.innerHTML = '';
    // Add the sorted rows back to the table
    sortedRows.forEach(row => table.appendChild(row));
  });


  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const table = document.getElementById('data-table');
    // Get the rows of the table
    const rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
      // Get the cells of the current row
      const cells = rows[i].cells;
      // Check if any of the cells contain the search term
      const match = [cells[1].textContent, cells[2].textContent, cells[3].textContent]
        .some(cell => cell.toLowerCase().includes(searchTerm));
      if (match) {
        // If a match is found, show the row
        rows[i].style.display = '';
      } else {
        // If no match is found, hide the row
        rows[i].style.display = 'none';
      }
    }
  });

  const sortButton2 = document.getElementById('sort-button-r');
  sortButton2.addEventListener('click', () => {
    const table = document.getElementById('data-table');
    // Get the rows of the table
    const rows = table.rows;
    // Convert the rows to an array and sort it by the first name in reverse alphabetical order
    const sortedRows = [...rows].sort((a, b) => {
      const firstNameA = a.cells[1].textContent;
      const firstNameB = b.cells[1].textContent;
      if (firstNameA > firstNameB) {
        return -1;
      } else if (firstNameA < firstNameB) {
        return 1;
      } else {
        return 0;
      }
    });
    // Clear the table
    table.innerHTML = '';
    // Add the sorted rows back to the table
    sortedRows.forEach(row => table.appendChild(row));
  });


  const sortButton3 = document.getElementById('sort-button-m');
  sortButton3.addEventListener('click', () => {
    const table = document.getElementById('data-table');
    // Get the rows of the table
    const rows = table.rows;
    // Convert the rows to an array and sort it by the marks
    const sortedRows = [...rows].sort((a, b) => {
      const marksA = Number(a.cells[7].textContent);
      const marksB = Number(b.cells[7].textContent);
      if (marksA < marksB) {
        return -1;
      } else if (marksA > marksB) {
        return 1;
      } else {
        return 0;
      }
    });
    // Clear the table
    table.innerHTML = '';
    // Add the sorted rows back to the table
    sortedRows.forEach(row => table.appendChild(row));
  });


  const sortButton4 = document.getElementById('sort-button-c');
  sortButton4.addEventListener('click', () => {
    const table = document.getElementById('data-table');
    // Get the rows of the table
    const rows = table.rows;
    // Convert the rows to an array and sort it by the class
    const sortedRows = [...rows].sort((a, b) => {
      const classA = Number(a.cells[6].textContent);
      const classB = Number(b.cells[6].textContent);
      if (classA < classB) {
        return -1;
      } else if (classA > classB) {
        return 1;
      } else {
        return 0;
      }
    });
    // Clear the table
    table.innerHTML = '';
    // Add the sorted rows back to the table
    sortedRows.forEach(row => table.appendChild(row));
  });


  const sortButton5 = document.getElementById('sort-button-g');
  sortButton5.addEventListener('click', () => {
    const table = document.getElementById('data-table');
    // Get the rows of the table
    const rows = table.rows;
    // Convert the rows to an array and sort it by the gender
    const sortedRows = [...rows].sort((a, b) => {
      const genderA = a.cells[4].textContent;
      const genderB = b.cells[4].textContent;
      if (genderA < genderB) {
        return -1;
      } else if (genderA > genderB) {
        return 1;
      } else {
        return 0;
      }
    });
    // Clear the table
    table.innerHTML = '';
    // Add the sorted rows back to the table
    sortedRows.forEach(row => table.appendChild(row));
  });
fetch('/data/data.json')
  .then(res => res.json())
  .then(data => {
    
    // Summary Data
    document.getElementById('totalCourses').textContent = data.summary.totalCourses;
    document.getElementById('totalStudents').textContent = data.summary.totalStudents;
    document.getElementById('totalInstructors').textContent = data.summary.totalInstructors;
    document.getElementById('activeBatches').textContent = data.summary.activeBatches;

    // Courses Table Data
    let tableRows = '';
    data.courses.forEach((c, index) => {
      tableRows += `
        <tr>
          <td>${index + 1}</td>
          <td>${c.name}</td>
          <td>${c.level}</td>
          <td>${c.enrolled}</td>
        </tr>`;
    });

    document.getElementById('courseTable').innerHTML = tableRows;
  })
  .catch(err => console.log("Error loading data:", err));

document.addEventListener("DOMContentLoaded", function() {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(response => response.json())
      .then(data => {
        const populationData = data.data.map(item => ({
          year: item.Year,
          population: parseInt(item.Population).toLocaleString() 
        }));
  
        populationData.sort((a, b) => a.year - b.year);
  
        const populationTable = document.getElementById('population-data');
  
        populationData.forEach(item => {
          const row = `<tr><td>${item.year}</td><td>${item.population}</td></tr>`;
          populationTable.insertAdjacentHTML('beforeend', row);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
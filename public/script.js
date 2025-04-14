document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        
        const statCards = document.querySelectorAll('.stats-card');
        data.stats.forEach((item, index) => {
          const label = statCards[index].querySelector('.stats-label');
          const value = statCards[index].querySelector('.stats-value');
          label.textContent = item.label;
          value.textContent = item.value;
        });
  
        
        const ticketContainer = document.getElementById('ticket-items-container');
        data.unresolvedTickets.forEach(ticket => {
          const ticketDiv = document.createElement('div');
          ticketDiv.className = 'ticket-item';
          ticketDiv.innerHTML = `<span>${ticket.label}</span><span>${ticket.count}</span>`;
          ticketContainer.appendChild(ticketDiv);
        });
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
      });
  });
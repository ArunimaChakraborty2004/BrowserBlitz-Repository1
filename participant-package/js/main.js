
const players = [
    { name: 'Virat Kohli', team: 'India', role: 'Batsman' },
    { name: 'Steve Smith', team: 'Australia', role: 'Batsman' },
    { name: 'Kane Williamson', team: 'New Zealand', role: 'Batsman' },
    { name: 'Joe Root', team: 'England', role: 'Batsman' },
    { name: 'Babar Azam', team: 'Pakistan', role: 'Batsman' },
    { name: 'Mitchell Starc', team: 'Australia', role: 'Bowler' },
    { name: 'Jasprit Bumrah', team: 'India', role: 'Bowler' },
    { name: 'Kagiso Rabada', team: 'South Africa', role: 'Bowler' }
];


const matches = [
    { teams: 'England vs Pakistan', date: 'March 15, 2026' },
    { teams: 'South Africa vs New Zealand', date: 'March 18, 2026' },
    { teams: 'India vs Sri Lanka', date: 'March 20, 2026' },
    { teams: 'Australia vs West Indies', date: 'March 22, 2026' }
];


const rankings = [
    { rank: 1, team: 'India', points: 278 },
    { rank: 2, team: 'Australia', points: 268 },
    { rank: 3, team: 'England', points: 265 },
    { rank: 4, team: 'South Africa', points: 251 },
    { rank: 5, team: 'New Zealand', points: 247 }
];


document.addEventListener('DOMContentLoaded', function() {
    
    
    const highlightsBtn = document.getElementById('watch-highlights');
    if (highlightsBtn) {
        highlightsBtn.addEventListener('click', function() {
            const modal = document.getElementById('highlights-modal');
            if (modal) {
                modal.style.display = 'block';
            }
        });
    }
    
    
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            const modal = document.getElementById('highlights-modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('highlights-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
   
    const playerSearch = document.getElementById('player-search');
    if (playerSearch) {
        playerSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value;
            const resultsDiv = document.getElementById('search-results');
            
            if (searchTerm.length > 0) {
                
                const results = players.filter(player => 
                    player.name.includes(searchTerm)
                );
                
                if (results.length > 0) {
                    resultsDiv.innerHTML = results.map(player => 
                        `<div style="padding: 0.5rem; border-bottom: 1px solid #ddd;">
                            <strong>${player.name}</strong> - ${player.team} (${player.role})
                        </div>`
                    ).join('');
                } else {
                    resultsDiv.innerHTML = '<p>No players found</p>';
                }
            } else {
                resultsDiv.innerHTML = '';
            }
        });
    }
    
    
    let totalRuns = 0;
    
    const counterButtons = document.querySelectorAll('.counter-btn');
    counterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            
            totalRuns = totalRuns + value;
            
            const runCount = document.getElementById('run-count');
            if (runCount) {
                runCount.textContent = totalRuns;
            }
        });
    });
    
    const resetCounter = document.getElementById('reset-counter');
    if (resetCounter) {
        resetCounter.addEventListener('click', function() {
            totalRuns = 0;
            const runCount = document.getElementById('run-count');
            if (runCount) {
                runCount.textContent = totalRuns;
            }
        });
    }
    
    
    const notifyButtons = document.querySelectorAll('.notify-button');
    if (notifyButtons.length > 0) {
        notifyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const matchName = this.getAttribute('data-match');
                alert(`You will be notified about the ${matchName} match!`);
            });
        });
    }
    
    
    const teamFilter = document.getElementById('team-filter');
    if (teamFilter) {
        teamFilter.addEventListener('input', function(e) {
            const searchTerm = e.target.value;
            const resultsDiv = document.getElementById('filter-results');
            
            if (searchTerm.length > 0) {
                
                const results = matches.filter(match => 
                    match.teams.includes(searchTerm)
                );
                
                if (results.length > 0) {
                    resultsDiv.innerHTML = results.map(match => 
                        `<div style="padding: 0.5rem; border-bottom: 1px solid #ddd;">
                            <strong>${match.teams}</strong> - ${match.date}
                        </div>`
                    ).join('');
                } else {
                    resultsDiv.innerHTML = '<p>No matches found</p>';
                }
            } else {
                resultsDiv.innerHTML = '';
            }
        });
    }
    
   
    const calculateSR = document.getElementById('calculate-sr');
    if (calculateSR) {
        calculateSR.addEventListener('click', function() {
            const runs = document.getElementById('runs-scored').value;
            const balls = document.getElementById('balls-faced').value;
            
            
            const strikeRate = (runs / balls * 100).toFixed(2);
            
            const srDisplay = document.getElementById('strike-rate');
            if (srDisplay) {
                srDisplay.textContent = strikeRate;
            }
        });
    }
    
   
    const loadRankings = document.getElementById('load-rankings');
    if (loadRankings) {
        loadRankings.addEventListener('click', function() {
            const rankingsList = document.getElementById('rankings-table');
            
            if (rankingsList) {
                const html = rankings.map(team => 
                    `<div style="padding: 1rem; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between;">
                        <span><strong>${team.rank}.</strong> ${team.team}</span>
                        <span>${team.points} points</span>
                    </div>`
                ).join('');
                
                rankingsList.innerHTML = html;
            }
        });
    }
    
    
    
    let selectedTicketType = '';
    let selectedTicketPrice = 0;
    
    
    const selectTicketButtons = document.querySelectorAll('.select-ticket');
    selectTicketButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedTicketType = this.getAttribute('data-type');
            selectedTicketPrice = parseInt(this.getAttribute('data-price'));
            
            const selectedTypeSpan = document.getElementById('selected-type');
            if (selectedTypeSpan) {
                selectedTypeSpan.textContent = selectedTicketType.charAt(0).toUpperCase() + selectedTicketType.slice(1);
            }
        });
    });
    
    
    const calculateTotal = document.getElementById('calculate-total');
    if (calculateTotal) {
        calculateTotal.addEventListener('click', function() {
            const quantity = document.getElementById('quantity').value;
            
            if (selectedTicketPrice > 0) {
               
                const total = selectedTicketPrice + quantity;
                
                const totalDisplay = document.getElementById('total-price');
                if (totalDisplay) {
                    totalDisplay.textContent = total;
                }
            } else {
                alert('Please select a ticket type first!');
            }
        });
    }
    
   
    const submitBooking = document.getElementById('submit-booking');
    if (submitBooking) {
        submitBooking.addEventListener('click', function() {
            if (selectedTicketType && selectedTicketPrice > 0) {
                const quantity = document.getElementById('quantity').value;
                alert(`Booking confirmed!\nType: ${selectedTicketType}\nQuantity: ${quantity}\nThank you for your purchase!`);
            } else {
                alert('Please select a ticket type and calculate the total first!');
            }
        });
    }
    
   
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            alert(`Thank you ${name}! We will contact you at ${email} soon.`);
            contactForm.reset();
        });
    }
});

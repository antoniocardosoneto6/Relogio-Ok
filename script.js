function updateClock() {
    const now = new Date();
    
    // Update time
    document.getElementById('hours').textContent = formatTime(now.getHours());
    document.getElementById('minutes').textContent = formatTime(now.getMinutes());
    document.getElementById('seconds').textContent = formatTime(now.getSeconds());
    
    // Update date
    document.getElementById('date').textContent = formatDate(now);
}

// Update immediately and then every second
updateClock();
setInterval(updateClock, 1000);
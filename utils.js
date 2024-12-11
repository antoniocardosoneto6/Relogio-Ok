function formatTime(value) {
    return value.toString().padStart(2, '0');
}

function formatDate(date) {
    return date.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
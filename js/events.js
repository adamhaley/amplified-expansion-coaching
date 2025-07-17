// Format date helper for Handlebars
Handlebars.registerHelper('formatDate', function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

// Format time helper for Handlebars (expects 'HH:mm')
Handlebars.registerHelper('formatTime', function(timeString) {
    if (!timeString) return '';
    const [hour, minute] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hour, 10));
    date.setMinutes(parseInt(minute, 10));
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
});

// Modulo helper for alternating layouts
Handlebars.registerHelper('mod', function(index, divisor) {
    return index % divisor === 0;
});

// Load events data
async function loadEvents() {
    try {
        const response = await fetch('data/events.json');
        const events = await response.json();
        
        // Get the template
        const templateSource = document.getElementById('events-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        
        // Render the template with the events data
        const renderedHtml = template({ data: events });
        document.getElementById('events-container').innerHTML = renderedHtml;
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

// Load events when the page loads
document.addEventListener('DOMContentLoaded', loadEvents); 
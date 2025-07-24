// Format date helper for Handlebars
Handlebars.registerHelper('formatDate', function(dateString) {
    // Ensure dateString is in 'YYYY-MM-DD' format and treat as local date
    if (!dateString) return '';
    var parts = dateString.split('-');
    // new Date(year, monthIndex, day) treats as local time
    var date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

// Format time helper for Handlebars (expects already formatted time like6:00PM")
Handlebars.registerHelper('formatTime', function(timeString) {
    if (!timeString) return ''; // Return as-is since it's already formatted
    return timeString;
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
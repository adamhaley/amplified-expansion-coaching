// Format date helper for Handlebars
Handlebars.registerHelper('formatDate', function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
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
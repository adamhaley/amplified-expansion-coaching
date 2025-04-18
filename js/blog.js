// Register Handlebars helper for date formatting
Handlebars.registerHelper('formatDate', function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

// Fetch and render blog posts
async function loadBlogPosts() {
    try {
        const response = await fetch('/data/blog.json');
        const data = await response.json();
        
        // Check which page we're on and render accordingly
        if (document.getElementById('blog-posts')) {
            // Blog page - render all posts
            const source = document.getElementById('blog-template').innerHTML;
            const template = Handlebars.compile(source);
            const html = template(data);
            document.getElementById('blog-posts').innerHTML = html;
        }
        
        if (document.getElementById('latest-blog')) {
            // Home page - render latest post
            const source = document.getElementById('latest-blog-template').innerHTML;
            const template = Handlebars.compile(source);
            const html = template(data);
            document.getElementById('latest-blog').innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

// Load blog posts when the page loads
document.addEventListener('DOMContentLoaded', loadBlogPosts); 
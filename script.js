// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtns = document.getElementsByClassName('close');

    // Open login modal
    if (loginBtn) {
        loginBtn.onclick = function() {
            loginModal.style.display = 'block';
        }
    }

    // Open register modal
    if (registerBtn) {
        registerBtn.onclick = function() {
            registerModal.style.display = 'block';
        }
    }

    // Close modals
    Array.from(closeBtns).forEach(function(btn) {
        btn.onclick = function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        }
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }

    // Handle login form submission
    const loginForm = loginModal ? loginModal.querySelector('form') : null;
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            alert('Login-Funktion ist noch nicht implementiert.\nBenutzername: ' + username);
            loginModal.style.display = 'none';
        });
    }

    // Handle register form submission
    const registerForm = registerModal ? registerModal.querySelector('form') : null;
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const passwordConfirm = document.getElementById('regPasswordConfirm').value;

            if (password !== passwordConfirm) {
                alert('Passwörter stimmen nicht überein!');
                return;
            }

            alert('Registrierungs-Funktion ist noch nicht implementiert.\nBenutzername: ' + username + '\nE-Mail: ' + email);
            registerModal.style.display = 'none';
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add active class to current navigation item
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Simulate online user count updates (for demonstration)
    function updateOnlineCount() {
        const onlineCountElements = document.querySelectorAll('.online-stats .stat-item .number');
        if (onlineCountElements.length > 0) {
            const currentCount = parseInt(onlineCountElements[0].textContent);
            const variation = Math.floor(Math.random() * 10) - 5;
            const newCount = Math.max(1, currentCount + variation);
            onlineCountElements[0].textContent = newCount;
        }
    }

    // Update online count every 30 seconds
    setInterval(updateOnlineCount, 30000);

    // Add hover effect to forum items
    const forumItems = document.querySelectorAll('.forum-item');
    forumItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Search functionality (placeholder)
    const searchLinks = document.querySelectorAll('a[href*="search"]');
    searchLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const searchQuery = prompt('Nach was möchtest du suchen?');
            if (searchQuery) {
                alert('Suchfunktion ist noch nicht implementiert.\nSuchbegriff: ' + searchQuery);
            }
        });
    });

    // Lazy load images (if any)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Utility function to format timestamps
function formatTimestamp(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return 'vor ' + diff + ' Sekunden';
    if (diff < 3600) return 'vor ' + Math.floor(diff / 60) + ' Minuten';
    if (diff < 86400) return 'vor ' + Math.floor(diff / 3600) + ' Stunden';
    if (diff < 604800) return 'vor ' + Math.floor(diff / 86400) + ' Tagen';

    return date.toLocaleDateString('de-DE');
}

// Function to add new post to activity feed
function addActivityItem(user, action, thread, time) {
    const activityList = document.querySelector('.activity-list');
    if (activityList) {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <i class="fas fa-comment"></i>
            <div class="activity-info">
                <strong>${user}</strong> ${action} <a href="#">${thread}</a>
                <span class="time">${time}</span>
            </div>
        `;
        activityList.insertBefore(activityItem, activityList.firstChild);

        // Keep only latest 5 activities
        while (activityList.children.length > 5) {
            activityList.removeChild(activityList.lastChild);
        }
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + L for login
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        document.getElementById('loginBtn').click();
    }

    // Alt + R for register
    if (e.altKey && e.key === 'r') {
        e.preventDefault();
        document.getElementById('registerBtn').click();
    }

    // ESC to close modals
    if (e.key === 'Escape') {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('registerModal').style.display = 'none';
    }
});

// Console welcome message
console.log('%c🎉 Willkommen im Community Forum!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cDieses Forum wurde mit HTML, CSS und JavaScript erstellt.', 'font-size: 14px; color: #666;');

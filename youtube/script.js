// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const typingText = document.getElementById('typing-text');
const autoTyping = document.getElementById('auto-typing');
const particlesContainer = document.getElementById('particles');
const videosGrid = document.getElementById('videos-grid');
const shortsScroll = document.getElementById('shorts-scroll');
const contactForm = document.getElementById('contact-form');
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const goTop = document.querySelector('.go-top');
const currentYear = document.getElementById('current-year');

// Your YouTube Channel URL (Replace with your actual channel)
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@AnimeHaloHaven";

// Your Videos Data (Replace with your actual videos)
const videos = [
    // {
    //     id: 'mqVShK6fGg0',
    //     title: 'Gojo\'s Limitless Technique Explained | Jujutsu Kaisen',
    //     thumbnail: `https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg`,
    //     views: '1.2M',
    //     duration: '15:42',
    //     date: '2 weeks ago'
    // },
    // {
    //     id: 'VIDEO_ID_2',
    //     title: 'Anime Power Scaling: The Strongest Domain Expansions',
    //     thumbnail: `https://img.youtube.com/vi/VIDEO_ID_2/maxresdefault.jpg`,
    //     views: '890K',
    //     duration: '22:18',
    //     date: '1 month ago'
    // },
    // {
    //     id: 'VIDEO_ID_3',
    //     title: 'Creating Anime Atmospheres | Visual Storytelling',
    //     thumbnail: `https://img.youtube.com/vi/VIDEO_ID_3/maxresdefault.jpg`,
    //     views: '560K',
    //     duration: '18:35',
    //     date: '2 months ago'
    // },
    // {
    //     id: 'VIDEO_ID_4',
    //     title: 'The Philosophy of Strength in Modern Anime',
    //     thumbnail: `https://img.youtube.com/vi/VIDEO_ID_4/maxresdefault.jpg`,
    //     views: '1.5M',
    //     duration: '25:10',
    //     date: '3 months ago'
    // },
    // {
    //     id: 'VIDEO_ID_5',
    //     title: 'Animation Breakdown: Best Fight Scenes 2024',
    //     thumbnail: `https://img.youtube.com/vi/VIDEO_ID_5/maxresdefault.jpg`,
    //     views: '720K',
    //     duration: '20:45',
    //     date: '4 months ago'
    // },
    // {
    //     id: 'VIDEO_ID_6',
    //     title: 'Building the Perfect Anime Sanctuary',
    //     thumbnail: `https://img.youtube.com/vi/VIDEO_ID_6/maxresdefault.jpg`,
    //     views: '430K',
    //     duration: '16:22',
    //     date: '5 months ago'
    // }
];

// Your Shorts Data (Replace with your actual shorts)
const shorts = [
    {
        id: 'NjY0v6wAA4Q',
        title: 'Yuji Itadori 🔥 The Vessel of Sukuna | Jujutsu Kaisen ',
        thumbnail: `images/yuji.jpeg`
    },
    {
        id: '9ArVc39PY68',
        title: 'The Lazy Dragon 🐉 | Funny 3D Animated Short',
        thumbnail: `images/draon.jpg`
    },
    {
        id: 'Utv-9ae2nPA',
        title: 'Why Did This Puppy Come to the Same Bus Stop Every Day? 🐶💔',
        thumbnail: `images/road.jpg`
    },
    {
        id: 'eWh5thjHgc',
        title: 'Gojo Satoru 🔥 The Strongest Sorcerer | Jujutsu Kaisen ',
        thumbnail: `images/gojo.jpeg`
    },
    {
        id: 'PM4yFQ9Na9o',
        title: 'Ek Puppy… Jo Legend Ban Gaya 🐾🔥 | Shadow Guardian Awakens',
        thumbnail: `images/shadow.jpg`
    },
    {
        id: 'Txd04mpFi50',
        title: '🐶 From Railway Station to Home 💔➡️❤️ | A Puppy No One Loved | Emotional story',
        thumbnail: `images/station.jpg`
    },
    {
        id: 'RXlamChw-rY',
        title: 'Why Everyone Leaves This Puppy 💔 | Season 1 Episode 1 | Emotional 3D puppy story',
        thumbnail: `images/epi1.jpg`
    },
    {
        id: 'Kxru34BTTKk',
        title: 'Afraid to Get Attached 💔 | Season 1 Episode 2 | Emotional 3D Puppy story',
        thumbnail: `images/epi2.jpg`
    },
    {
        id: '9VYqb6Jxors',
        title: 'Will She Leave Too? 💔 | Season 1 Episode 3 | Emotional 3D Puppy Story',
        thumbnail: `images/epi3.jfif`
    },
    {
        id: 'PONzoUFryLU',
        title: 'The Truth Is Scarier Than the Curse 😨 | Season 1 Episode 4 | Emotional Puppy story',
        thumbnail: `images/epi4.jfif`
    }
];

// Auto Typing Texts
const loadingTexts = [
    "Entering the Limitless Domain...",
    "Initializing Infinity...",
    "Loading Anime Universe...",
    "Preparing Content...",
    "Almost There..."
];

const heroTexts = [
    "Limitless Anime Universe",
    "Where Imagination Has No Bounds",
    "Home of Anime Excellence",
    "Domain of Infinite Possibilities"
];

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

// Initialize all website components
function initializeWebsite() {
    // Set current year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Replace all YouTube URLs with your channel
    replaceYouTubeUrls();
    
    // Start loading screen animations
    startLoadingScreen();
    
    // Initialize components
    createParticles();
    setupEventListeners();
    
    // Load content after delay
    setTimeout(() => {
        loadContent();
        
        // Hide loading screen
        hideLoadingScreen();
        
        // Start hero typing animation
        startAutoTyping();
        
        // Initialize animations
        initializeAnimations();
        
        // Start stats counter
        startStatsCounter();
    }, 3000);
}

// Replace all YouTube URLs with your channel URL
function replaceYouTubeUrls() {
    const channelUrl = YOUTUBE_CHANNEL_URL;
    
    // Update all channel links
    document.querySelectorAll('a[href*="youtube.com/@AnimeHaloHaven"]').forEach(link => {
        link.href = channelUrl;
    });
    
    // Update videos link
    const videosLink = document.querySelector('a[href*="/videos"]');
    if (videosLink) videosLink.href = `${channelUrl}/videos`;
    
    // Update shorts link
    const shortsLink = document.querySelector('a[href*="/shorts"]');
    if (shortsLink) shortsLink.href = `${channelUrl}/shorts`;
    
    // Update playlists link
    const playlistsLink = document.querySelector('a[href*="/playlists"]');
    if (playlistsLink) playlistsLink.href = `${channelUrl}/playlists`;
    
    // Update community link
    const communityLink = document.querySelector('a[href*="/community"]');
    if (communityLink) communityLink.href = `${channelUrl}/community`;
}

// Start loading screen animations
function startLoadingScreen() {
    let currentIndex = 0;
    const typingElement = typingText;
    
    function typeText() {
        const text = loadingTexts[currentIndex];
        let charIndex = 0;
        
        typingElement.textContent = '';
        
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                typingElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                
                // Move to next text after delay
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % loadingTexts.length;
                    typeText();
                }, 1500);
            }
        }, 50);
    }
    
    typeText();
    
    // Animate orb sparks
    animateOrbSparks();
}

// Animate orb sparks
function animateOrbSparks() {
    const sparks = document.querySelectorAll('.spark');
    
    sparks.forEach((spark, index) => {
        // Random direction for each spark
        const angle = (index * 72) * (Math.PI / 180); // 72 degrees between sparks
        const distance = 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        spark.style.setProperty('--tx', `${tx}px`);
        spark.style.setProperty('--ty', `${ty}px`);
    });
}

// Hide loading screen
function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.visibility = 'hidden';
    
    // Remove from DOM after animation
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1000);
}

// Create floating particles
function createParticles() {
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size and opacity
        const size = Math.random() * 4 + 1;
        const opacity = Math.random() * 0.6 + 0.2;
        
        // Random animation
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        
        // Random horizontal movement
        const px = (Math.random() - 0.5) * 100;
        
        // Random color (blue or purple)
        const colors = ['#3A86FF', '#8338EC'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.opacity = opacity;
        particle.style.setProperty('--px', `${px}px`);
        particle.style.animation = `particleFloat ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
}

// Start auto typing in hero section
function startAutoTyping() {
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = heroTexts[currentIndex];
        
        if (isDeleting) {
            autoTyping.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            autoTyping.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % heroTexts.length;
            typingSpeed = 500; // Pause before next
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// Load content (videos and shorts)
function loadContent() {
    loadVideos();
    loadShorts();
}

// Load videos
function loadVideos() {
    // Clear existing content
    videosGrid.innerHTML = '';
    
    videos.forEach((video, index) => {
        const videoCard = createVideoCard(video, index);
        videosGrid.appendChild(videoCard);
    });
}

// Create video card element
function createVideoCard(video, index) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    const fallbackThumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='${fallbackThumbnail}'">
            <div class="video-play">
                <i class="fas fa-play"></i>
            </div>
            <div class="video-duration">${video.duration}</div>
        </div>
        <div class="video-content">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-meta">
                <span class="video-views"><i class="fas fa-eye"></i> ${video.views}</span>
                <span class="video-date">${video.date}</span>
            </div>
            <a href="${videoUrl}" target="_blank" class="video-btn">
                <i class="fab fa-youtube"></i> Watch Now
            </a>
        </div>
    `;
    
    return card;
}

// Load shorts
function loadShorts() {
    // Clear existing content
    shortsScroll.innerHTML = '';
    
    shorts.forEach((short, index) => {
        const shortCard = createShortCard(short, index);
        shortsScroll.appendChild(shortCard);
    });
}

// Create short card element
function createShortCard(short, index) {
    const card = document.createElement('div');
    card.className = 'short-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const shortUrl = `https://www.youtube.com/shorts/${short.id}`;
    const fallbackThumbnail = `https://img.youtube.com/vi/${short.id}/hqdefault.jpg`;
    
    card.innerHTML = `
        <div class="short-thumbnail">
            <img src="${short.thumbnail}" alt="${short.title}" onerror="this.src='${fallbackThumbnail}'">
            <div class="short-play">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="short-content">
            <h3 class="short-title">${short.title}</h3>
            <a href="${shortUrl}" target="_blank" class="short-btn">
                <i class="fab fa-youtube"></i> Watch Short
            </a>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);
    
    // Menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Scroll buttons for shorts
    setupScrollButtons();
    
    // Go to top button
    if (goTop) {
        goTop.addEventListener('click', scrollToTop);
    }
    
    // Form input animations
    setupFormAnimations();
}

// Handle scroll events
function handleScroll() {
    // Navbar effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Go to top button
    if (window.scrollY > 500) {
        goTop.classList.add('visible');
    } else {
        goTop.classList.remove('visible');
    }
    
    // Section animations
    animateOnScroll();
    
    // Update active nav link
    updateActiveNavLink();
}

// Toggle mobile menu
function toggleMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Animate hamburger to X
    const bars = menuToggle.querySelectorAll('.menu-bar');
    if (navMenu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Close mobile menu
function closeMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    
    const bars = menuToggle.querySelectorAll('.menu-bar');
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
}

// Setup scroll buttons for shorts
function setupScrollButtons() {
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    
    if (leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            shortsScroll.scrollBy({
                left: -350,
                behavior: 'smooth'
            });
        });
        
        rightBtn.addEventListener('click', () => {
            shortsScroll.scrollBy({
                left: 350,
                behavior: 'smooth'
            });
        });
    }
    
    // Drag to scroll for shorts
    let isDown = false;
    let startX;
    let scrollLeft;
    
    shortsScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        shortsScroll.classList.add('active');
        startX = e.pageX - shortsScroll.offsetLeft;
        scrollLeft = shortsScroll.scrollLeft;
    });
    
    shortsScroll.addEventListener('mouseleave', () => {
        isDown = false;
        shortsScroll.classList.remove('active');
    });
    
    shortsScroll.addEventListener('mouseup', () => {
        isDown = false;
        shortsScroll.classList.remove('active');
    });
    
    shortsScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - shortsScroll.offsetLeft;
        const walk = (x - startX) * 2;
        shortsScroll.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    shortsScroll.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - shortsScroll.offsetLeft;
        scrollLeft = shortsScroll.scrollLeft;
    });
    
    shortsScroll.addEventListener('touchend', () => {
        isDown = false;
    });
    
    shortsScroll.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - shortsScroll.offsetLeft;
        const walk = (x - startX) * 2;
        shortsScroll.scrollLeft = scrollLeft - walk;
    });
}

// Setup form animations
function setupFormAnimations() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
}

// Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Create WhatsApp message
    const whatsappMessage = `Hello Anime Halo Haven,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;
    
    // WhatsApp number (replace with your actual number)
    const phoneNumber = '9308631825';
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    showNotification('Opening WhatsApp to send your message...', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Remove focused class from all inputs
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('focused');
    });
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate stats on scroll
    animateOnScroll();
    
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add particles to buttons when they become visible
                if (entry.target.classList.contains('btn-hero')) {
                    addButtonParticles(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements
    document.querySelectorAll('.video-card, .short-card, .feature, .info-card, .btn-hero').forEach(el => {
        observer.observe(el);
    });
}

// Add particles to buttons
function addButtonParticles(button) {
    if (button.querySelector('.btn-particles').hasChildNodes()) return;
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background-color: var(--infinity-blue);
            border-radius: 50%;
            animation: particleFloat 3s infinite linear;
            opacity: 0;
        `;
        
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        button.querySelector('.btn-particles').appendChild(particle);
        
        // Fade in
        setTimeout(() => {
            particle.style.opacity = '0.5';
        }, 100);
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.video-card, .short-card');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Start stats counter animation
function startStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let count = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(count) + suffix;
        }, 30);
    });
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Set styles based on type
    let bgColor, textColor;
    switch(type) {
        case 'success':
            bgColor = 'linear-gradient(135deg, #25D366, #128C7E)';
            textColor = '#FFFFFF';
            break;
        case 'error':
            bgColor = 'linear-gradient(135deg, #FF4757, #FF3838)';
            textColor = '#FFFFFF';
            break;
        default:
            bgColor = 'linear-gradient(135deg, #3A86FF, #8338EC)';
            textColor = '#FFFFFF';
    }
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: ${textColor};
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Add animation styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove notification after animation
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close menu if open
            closeMenu();
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effect to video and short buttons
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('video-btn') || e.target.classList.contains('short-btn')) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation style
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
}

// Call initialization functions
initButtonEffects();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key closes menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
    }
    
    // Arrow keys for shorts navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const scrollAmount = 350;
        
        if (e.key === 'ArrowLeft') {
            shortsScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight') {
            shortsScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
});

// Add parallax effect to background elements
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const circles = document.querySelectorAll('.circle');
        const ribbons = document.querySelectorAll('.ribbon');
        
        circles.forEach((circle, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            circle.style.transform = `translateY(${yPos}px)`;
        });
        
        ribbons.forEach((ribbon, index) => {
            const speed = 0.1 + (index * 0.05);
            const xPos = -(scrolled * speed);
            ribbon.style.transform = `translateX(${xPos}px) rotate(${ribbon.dataset.rotate || '15'}deg)`;
        });
    });
}

// Initialize parallax
initParallax();

// Add custom cursor effect for video cards
function initCustomCursor() {
    const videoCards = document.querySelectorAll('.video-card, .short-card');
    
    videoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Initialize custom cursor
initCustomCursor();
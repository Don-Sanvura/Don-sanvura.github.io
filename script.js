// Bible Scriptures Database
const scriptures = [
    {
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11",
        category: "hope"
    },
    {
        text: "I can do all this through him who gives me strength.",
        reference: "Philippians 4:13",
        category: "strength"
    },
    {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7",
        category: "peace"
    },
    {
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6",
        category: "faith"
    },
    {
        text: "The Lord is my shepherd, I lack nothing.",
        reference: "Psalm 23:1",
        category: "peace"
    },
    {
        text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        reference: "1 Corinthians 13:4",
        category: "love"
    },
    {
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        reference: "Philippians 4:6",
        category: "peace"
    },
    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9",
        category: "strength"
    },
    {
        text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        reference: "Isaiah 40:31",
        category: "strength"
    },
    {
        text: "For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline.",
        reference: "2 Timothy 1:7",
        category: "faith"
    },
    {
        text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
        reference: "1 Corinthians 13:13",
        category: "love"
    },
    {
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        reference: "Matthew 11:28",
        category: "peace"
    },
    {
        text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        reference: "Psalm 34:18",
        category: "comfort"
    },
    {
        text: "For we live by faith, not by sight.",
        reference: "2 Corinthians 5:7",
        category: "faith"
    },
    {
        text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        reference: "Romans 15:13",
        category: "hope"
    }
];

// Daily verse rotation
const dailyVerses = [
    {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16"
    },
    {
        text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
        reference: "Psalm 27:1"
    },
    {
        text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        reference: "Matthew 6:33"
    },
    {
        text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
        reference: "John 16:33"
    }
];

// Display verses
function displayVerses(category = 'all') {
    const container = document.querySelector('.verses-container');
    container.innerHTML = '';
    
    const filteredVerses = category === 'all' 
        ? scriptures 
        : scriptures.filter(verse => verse.category === category);
    
    filteredVerses.forEach(verse => {
        const verseCard = document.createElement('div');
        verseCard.className = 'verse-card';
        verseCard.innerHTML = `
            <p class="verse-text">"${verse.text}"</p>
            <p class="verse-reference">${verse.reference}</p>
            <span class="verse-topic">${verse.category.toUpperCase()}</span>
        `;
        container.appendChild(verseCard);
    });
    
    if (filteredVerses.length === 0) {
        container.innerHTML = '<p class="no-verses">No verses found in this category.</p>';
    }
}

// Set random daily verse
function setDailyVerse() {
    const randomIndex = Math.floor(Math.random() * dailyVerses.length);
    const dailyVerse = dailyVerses[randomIndex];
    
    document.getElementById('dailyVerse').textContent = `"${dailyVerse.text}"`;
    document.getElementById('dailyRef').textContent = dailyVerse.reference;
}

// Category filtering
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get category and display verses
        const category = this.getAttribute('data-category');
        displayVerses(category);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setDailyVerse();
    displayVerses();
    
    // Update daily verse every 24 hours
    setInterval(setDailyVerse, 24 * 60 * 60 * 1000);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Add some interactivity to verse cards
document.addEventListener('click', function(e) {
    if (e.target.closest('.verse-card')) {
        const card = e.target.closest('.verse-card');
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }
});

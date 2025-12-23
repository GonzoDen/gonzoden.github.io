document.addEventListener('DOMContentLoaded', () => {
    const publications = [
        { title: 'Application of Artificial Intelligence in Mental Healthcare: Generative Pre-trained Transformer 3 (GPT-3) and Cognitive Distortions', link: 'https://doi.org/10.1007/978-3-031-47454-5_16', image: 'img/pics/pub1.png', description: 'The product of this research is TeaBot, an AI bot that applied GPT-3 models and uses methods of Cognitive Behavioral Therapy (CBT) to help users recognize and challenge distorted thoughts. Keywords: AI, Mental Health, GPT-3, CBT' },
    ];

    const news = [
        { title: 'Invited as a Data Enginer to the UN Women research on femicide', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7218878692725276672/', image: 'path_to_news_image1.jpg', description: '06-21-24' },
        { title: 'Admitted to EPAM Systems as a Data Engineering Intern', link: 'https://www.linkedin.com/posts/deniz-nazarova_confluent-fundamentals-accreditation-deniz-activity-7196168337570070528-EWuu?utm_source=share&utm_medium=member_desktop', image: 'path_to_news_image2.jpg', description: '02-06-24' },
    ];

    const THEME_KEY = 'site-theme-mode';
    const toggleButton = document.getElementById('theme-toggle');

    const applyTheme = (mode) => {
        const isNormal = mode === 'normal';
        document.body.classList.toggle('theme-normal', isNormal);
        document.body.classList.toggle('cursed', !isNormal);
        const label = isNormal ? 'Switch to Cursed' : 'Switch to Normal';
        if (toggleButton) {
            toggleButton.textContent = label;
            toggleButton.setAttribute('aria-pressed', isNormal ? 'true' : 'false');
        }
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem(THEME_KEY, mode);
    };

    const initBouncer = () => {
        const bouncer = document.createElement('div');
        bouncer.className = 'bouncer';
        bouncer.setAttribute('aria-hidden', 'true');
        bouncer.textContent = '*';
        document.body.appendChild(bouncer);

        let x = 40;
        let y = 40;
        let vx = 3;
        let vy = 2;

        const step = () => {
            const { innerWidth: w, innerHeight: h } = window;
            const size = bouncer.getBoundingClientRect();
            x += vx;
            y += vy;

            if (x <= 0 || x + size.width >= w) {
                vx *= -1;
                x = Math.max(0, Math.min(x, w - size.width));
            }
            if (y <= 0 || y + size.height >= h) {
                vy *= -1;
                y = Math.max(0, Math.min(y, h - size.height));
            }

            bouncer.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    if (toggleButton) {
        const stored = localStorage.getItem(THEME_KEY);
        // Default to cursed; only stay normal if explicitly stored
        applyTheme(stored === 'normal' ? 'normal' : 'cursed');
        toggleButton.addEventListener('click', () => {
            const next = document.body.classList.contains('theme-normal') ? 'cursed' : 'normal';
            applyTheme(next);
        });
    } else {
        // Safety: ensure cursed baseline if toggle missing
        applyTheme('cursed');
    }

    initBouncer();

    const publicationsList = document.getElementById('publications-list');
    if (publicationsList) {
        publicationsList.innerHTML = '';
    }
    publications.forEach(publication => {
        const listItem = document.createElement('li');
        
        const image = document.createElement('img');
        image.src = publication.image;
        image.alt = publication.title;

        const details = document.createElement('div');
        details.className = 'details';

        const link = document.createElement('a');
        link.href = publication.link;
        link.textContent = publication.title;

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = publication.description;

        details.appendChild(link);
        details.appendChild(description);
        listItem.appendChild(image);
        listItem.appendChild(details);
        publicationsList.appendChild(listItem);
    });

    const newsList = document.getElementById('news-list');
    if (newsList) {
        newsList.innerHTML = '';
    }
    news.forEach(item => {
        const listItem = document.createElement('li');
        
        //const image = document.createElement('img');
        //image.src = item.image;
        //image.alt = item.title;

        const details = document.createElement('div');
        details.className = 'details';

        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.title;

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = item.description;

        details.appendChild(link);
        details.appendChild(description);
        //listItem.appendChild(image);
        listItem.appendChild(details);
        newsList.appendChild(listItem);
    });

    // Update the last update date
    const lastUpdate = document.getElementById('last-update');
    lastUpdate.textContent = new Date().toLocaleDateString();
});

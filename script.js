document.addEventListener('DOMContentLoaded', () => {
    const publications = [
        { title: 'Application of Artificial Intelligence in Mental Healthcare: Generative Pre-trained Transformer 3 (GPT-3) and Cognitive Distortions', link: 'https://doi.org/10.1007/978-3-031-47454-5_16', image: 'img/pics/pub1.png', description: 'The product of this research is TeaBot, an AI bot that applied GPT-3 models and uses methods of Cognitive Behavioral Therapy (CBT) to help users recognize and challenge distorted thoughts. Keywords: AI, Mental Health, GPT-3, CBT' },
        { title: 'Femicide dataset: Uzbekistan', link: 'https://eca.unwomen.org/sites/default/files/2025-10/Femicide_dataset_Uzbekistan.xlsx', image: 'img/pics/pub2.png', description: 'This dataset contains information about femicide cases in Uzbekistan. Research is conducted as part of a joint initiative of UN Women' },
        { title: 'A real man never asks for help: Exploring why men in Kyrgyzstan are four times more likely to die by suicide. ', link: 'https://cabar.asia/en/a-real-man-never-asks-for-help-exploring-why-men-in-kyrgyzstan-are-four-times-more-likely-to-die-by-suicide', image: 'img/pics/pub3.png', description: 'This research explores the factors that explain the complex dynamics of suicide in Kyrgyzstan. This research was conducted as part of a ForSet advanced fellowship.' },
    ];

    const news = [
        { title: 'I gave an oral presentation of my work at the Annual Research Showcase at UW!', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7218878692725276672/', image: 'path_to_news_image1.jpg', description: '10-29-25'},
        { title: 'Invited as a Data Enginer to the UN Women research on femicide', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7218878692725276672/', image: 'path_to_news_image1.jpg', description: '06-21-24' },
        { title: 'Accepted to UW CSE as a PhD student', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7218878692725276672/', image: 'path_to_news_image1.jpg', description: '02-08-24' },
        { title: 'Admitted to EPAM Systems as a Data Engineering Intern', link: 'https://www.linkedin.com/posts/deniz-nazarova_confluent-fundamentals-accreditation-deniz-activity-7196168337570070528-EWuu?utm_source=share&utm_medium=member_desktop', image: 'path_to_news_image2.jpg', description: '02-06-24' },
    ];

    const THEME_KEY = 'site-theme-mode';
    const toggleButton = document.getElementById('theme-toggle');

    const updateTextContent = (isNormal) => {
        const bioTitle = document.querySelector('#bio .section-title span');
        const pubTitle = document.querySelector('#publications .section-title span');
        const newsTitle = document.querySelector('#news .section-title span');
        const cursedTitle = document.querySelector('#cursed-design .section-title span');
        const cursedH2 = document.querySelector('#cursed-design .bio-text h2');
        const blinkText = document.querySelector('.blink');
        
        if (bioTitle) {
            bioTitle.textContent = isNormal ? 'About' : '~*~ Bio ~*~';
        }
        if (pubTitle) {
            pubTitle.textContent = isNormal ? 'Publications' : 'Publications Hall of Fame';
        }
        if (newsTitle) {
            newsTitle.textContent = isNormal ? 'News' : 'News Flash';
        }
        if (cursedTitle) {
            cursedTitle.textContent = isNormal ? 'Why The Design Is Cursed' : '~*~ Why The Design Is Cursed ~*~';
        }
        if (cursedH2) {
            cursedH2.textContent = isNormal ? 'Why The Design Is Cursed' : 'Why The Design Is Cursed';
        }
        if (blinkText) {
            blinkText.textContent = isNormal ? '' : '~*~ Geocities Spirit Award ~*~';
            blinkText.style.display = isNormal ? 'none' : 'block';
        }
    };

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
        updateTextContent(isNormal);
    };

    if (toggleButton) {
        const stored = localStorage.getItem(THEME_KEY);
        // cursed by default bc why else would i want to update my website
        applyTheme(stored === 'normal' ? 'normal' : 'cursed');
        toggleButton.addEventListener('click', () => {
            const next = document.body.classList.contains('theme-normal') ? 'cursed' : 'normal';
            applyTheme(next);
        });
    } else {
        applyTheme('cursed');
    }

    const publicationsList = document.getElementById('publications-list');
    if (publicationsList) {
        publicationsList.innerHTML = '';
    }
    publications.forEach(publication => {
        const listItem = document.createElement('li');
        
        if (publication.image) {
            const image = document.createElement('img');
            image.src = publication.image;
            image.alt = publication.title;
            listItem.appendChild(image);
        }

        const details = document.createElement('div');
        details.className = 'details';

        if (publication.link) {
            const link = document.createElement('a');
            link.href = publication.link;
            link.textContent = publication.title;
            details.appendChild(link);
        } else {
            const title = document.createElement('strong');
            title.textContent = publication.title;
            details.appendChild(title);
        }

        if (publication.description) {
            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = publication.description;
            details.appendChild(description);
        }

        listItem.appendChild(details);
        publicationsList.appendChild(listItem);
    });

    const newsList = document.getElementById('news-list');
    if (newsList) {
        newsList.innerHTML = '';
    }
    news.forEach(item => {
        const listItem = document.createElement('li');
        
        const details = document.createElement('div');
        details.className = 'details';

        if (item.link) {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.title;
            details.appendChild(link);
        } else {
            const title = document.createElement('strong');
            title.textContent = item.title;
            details.appendChild(title);
        }

        if (item.description) {
            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = item.description;
            details.appendChild(description);
        }

        listItem.appendChild(details);
        newsList.appendChild(listItem);
    });

    // don't forget to update the last updatedate!
    const lastUpdate = document.getElementById('last-update');
    lastUpdate.textContent = new Date().toLocaleDateString();
});

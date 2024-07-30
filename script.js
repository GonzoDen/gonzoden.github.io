document.addEventListener('DOMContentLoaded', () => {
    const publications = [
        { title: 'Application of Artificial Intelligence in Mental Healthcare: Generative Pre-trained Transformer 3 (GPT-3) and Cognitive Distortions', link: 'https://doi.org/10.1007/978-3-031-47454-5_16', image: 'img/pics/pub1.png', description: 'The product of this research is TeaBot, an AI bot that applied GPT-3 models and uses methods of Cognitive Behavioral Therapy (CBT) to help users recognize and challenge distorted thoughts. Keywords: AI, Mental Health, GPT-3, CBT' },
    ];

    const news = [
        { title: 'Invited as a Data Enginer to the UN Women research on femicide', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7218878692725276672/', image: 'path_to_news_image1.jpg', description: '06-21-24' },
        { title: 'Admitted to EPAM Systems as a Data Engineering Intern', link: 'https://www.linkedin.com/posts/deniz-nazarova_confluent-fundamentals-accreditation-deniz-activity-7196168337570070528-EWuu?utm_source=share&utm_medium=member_desktop', image: 'path_to_news_image2.jpg', description: '02-06-2024' },
    ];

    const publicationsList = document.getElementById('publications-list');
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

function openModal(mediaSrc, text, title) {
    var modal = document.getElementById('modal');
    var mediaContent = document.getElementById('media-content');
    var mediaText = document.getElementById('media-text');

    console.log(title, text); // Debugging log

    if (mediaSrc.endsWith('.mp4') || mediaSrc.endsWith('.mov')) {
        mediaContent.innerHTML = `<video src="${mediaSrc}" controls autoplay style="width: 100%; height: auto;" muted loop></video>`;
    } else {
        mediaContent.innerHTML = `<img src="${mediaSrc}" alt="Media Content">`;
    }

    mediaText.innerHTML = `<h2 style="font-weight: bold; font-size: 1.5em;">${title}</h2>${text}`;
    modal.style.display = 'flex'; // Show the modal
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.getElementById('media-content').innerHTML = ''; // Clear content
}

function openCoUspaceModal2() {
    openModal(
        'content/graphic/couspace_app.mp4', 
        `<p>This prototype was made to support Co-Uspace’s existing Smart Desk. The people who interact with the Smart Desk are the employees. My group and I aimed to create an app that would easily integrate the Smart Desk into employees’ everyday work lives. The application is meant to not feel tedious and be a positive user experience.</p>
         <p>Program Used: Adobe Illustrator, Maya Procreate, Figma</p>
         <p><a href="https://www.figma.com/proto/GaQg6WMDFa6tMqopcy9boe/APP?page-id=0%3A1&amp;type=design&amp;node-id=3-4&amp;viewport=46%2C327%2C0.16&amp;scaling=scale-down&amp;starting-point-node-id=3%3A4" target="_blank">Try the prototype!</a></p>`, 
        'CoUspace App Design'
    );
}

// Function to detect the operating system
function detectOS() {
    const platform = navigator.platform.toLowerCase();

    if (platform.includes('mac')) {
        document.body.classList.add('mac');
    } else if (platform.includes('win')) {
        document.body.classList.add('windows');
    } else if (platform.includes('linux')) {
        document.body.classList.add('linux');
    } else {
        document.body.classList.add('unknown'); // Fallback for unknown OS
    }
}

// Call the function on page load
detectOS();
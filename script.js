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
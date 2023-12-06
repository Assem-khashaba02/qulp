var navToggle = document.getElementById('nav-toggle');
var navBar = document.querySelector('.nav-bar');
var videoElements = document.querySelectorAll('.video video');

function toggleVideo(videoDiv) {
    var video = videoDiv.querySelector('video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function openVideo(videoSrc) {
    window.open(videoSrc, '_blank', 'fullscreen=yes');
}

navToggle.onclick = function () {
    navBar.style.display = (getComputedStyle(navBar).display === 'none') ? 'flex' : 'none';
};

var bookElements = document.querySelectorAll('.book');

document.getElementById('searchInput').addEventListener('input', function() {
    var searchTerm = this.value.trim().toLowerCase();

    var books = document.querySelectorAll('.book');
    var noResults = document.getElementById('noResults');

    var hasResults = false;

    books.forEach(function(book) {
        var title = book.querySelector('h3').textContent.toLowerCase();
        var isVisible = title.includes(searchTerm);

        book.style.display = isVisible ? 'block' : 'none';

        if (isVisible) {
            hasResults = true;
        }
    });

    noResults.style.display = hasResults ? 'none' : 'block';
});
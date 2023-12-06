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

for (var i = 0; i < videoElements.length; i++) {
    videoElements[i].addEventListener('mouseenter', function () {
        this.controls = true;
    });

    videoElements[i].addEventListener('mouseleave', function () {
        this.controls = false;
    });

  }
  document.getElementById('searchInput').addEventListener('input', function() {
    var searchTerm = this.value.trim().toLowerCase();

    var videos = document.querySelectorAll('.video');
    var noResults = document.getElementById('noResults');

    var hasResults = false;

    videos.forEach(function(video) {
        var title = video.querySelector('h3').textContent.toLowerCase();
        var isVisible = title.includes(searchTerm);

        video.style.display = isVisible ? 'block' : 'none';

        if (isVisible) {
            hasResults = true;
        }
    });

    noResults.style.display = hasResults ? 'none' : 'block';
});

document.addEventListener("DOMContentLoaded", function () {
// جمع العناصر باستخدام الكلاس "video"
var videos = document.querySelectorAll('.video');

// تحويل قائمة العناصر إلى مصفوفة
var videosArray = Array.from(videos);

// إعادة ترتيب العناصر بشكل عشوائي
videosArray.sort(function () {
return 0.5 - Math.random();
});

// إعادة ضبط ترتيب العناصر في الواجهة الرسومية
var container = document.getElementById('video-container'); // استبدل بالعنصر الذي يحتوي على الفيديوهات
container.innerHTML = ''; // تفريغ المحتوى الحالي

videosArray.forEach(function (video) {
container.appendChild(video);
});
});
window.onload = function() {
    // تشغيل الصوت عند فتح الصفحة
    var audio = new Audio('010.mp3');
    audio.play();
  
    // إضافة تأثيرات إضافية هنا (مثل جعل عنصر ما غير مرئي)
    // document.getElementById('yourElementId').style.visibility = 'hidden';
  };
  
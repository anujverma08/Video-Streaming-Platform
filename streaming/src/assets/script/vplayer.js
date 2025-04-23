// console.log("bye");
// const container = document.querySelector(".container"),
// mainVideo = container.querySelector("video"),
// videoTimeline = container.querySelector(".video-timeline"),
// progressBar = container.querySelector(".progress-bar"),
// volumeBtn = container.querySelector(".volume i"),
// volumeSlider = container.querySelector(".left input");
// currentVidTime = container.querySelector(".current-time"),
// videoDuration = container.querySelector(".video-duration"),
// skipBackward = container.querySelector(".skip-backward i"),
// skipForward = container.querySelector(".skip-forward i"),
// playPauseBtn = container.querySelector(".play-pause i"),
// speedBtn = container.querySelector(".playback-speed span"),
// speedOptions = container.querySelector(".speed-options"),
// pipBtn = container.querySelector(".pic-in-pic span"),
// fullScreenBtn = container.querySelector(".fullscreen i");
// let timer;
// const hideControls = () => {
//     if(mainVideo.paused) return;
//     timer = setTimeout(() => {
//         container.classList.remove("show-controls");
//     }, 3000);
// }
// hideControls();
// container.addEventListener("mousemove", () => {
//     container.classList.add("show-controls");
//     clearTimeout(timer);
//     hideControls();   
// });
// const formatTime = time => {
//     let seconds = Math.floor(time % 60),
//     minutes = Math.floor(time / 60) % 60,
//     hours = Math.floor(time / 3600);
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     hours = hours < 10 ? `0${hours}` : hours;
//     if(hours == 0) {
//         return `${minutes}:${seconds}`
//     }
//     return `${hours}:${minutes}:${seconds}`;
// }
// videoTimeline.addEventListener("mousemove", e => {
//     let timelineWidth = videoTimeline.clientWidth;
//     let offsetX = e.offsetX;
//     let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
//     const progressTime = videoTimeline.querySelector("span");
//     offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
//     progressTime.style.left = `${offsetX}px`;
//     progressTime.innerText = formatTime(percent);
// });
// videoTimeline.addEventListener("click", e => {
//     let timelineWidth = videoTimeline.clientWidth;
//     mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
// });
// mainVideo.addEventListener("timeupdate", e => {
//     let {currentTime, duration} = e.target;
//     let percent = (currentTime / duration) * 100;
//     progressBar.style.width = `${percent}%`;
//     currentVidTime.innerText = formatTime(currentTime);
// });
// mainVideo.addEventListener("loadeddata", () => {
//     videoDuration.innerText = formatTime(mainVideo.duration);
// });
// const draggableProgressBar = e => {
//     let timelineWidth = videoTimeline.clientWidth;
//     progressBar.style.width = `${e.offsetX}px`;
//     mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
//     currentVidTime.innerText = formatTime(mainVideo.currentTime);
// }
// volumeBtn.addEventListener("click", () => {
//     if(!volumeBtn.classList.contains("fa-volume-high")) {
//         mainVideo.volume = 0.5;
//         volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
//     } else {
//         mainVideo.volume = 0.0;
//         volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
//     }
//     volumeSlider.value = mainVideo.volume;
// });
// volumeSlider.addEventListener("input", e => {
//     mainVideo.volume = e.target.value;
//     if(e.target.value == 0) {
//         return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
//     }
//     volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
// });
// speedOptions.querySelectorAll("li").forEach(option => {
//     option.addEventListener("click", () => {
//         mainVideo.playbackRate = option.dataset.speed;
//         speedOptions.querySelector(".active").classList.remove("active");
//         option.classList.add("active");
//     });
// });
// document.addEventListener("click", e => {
//     if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
//         speedOptions.classList.remove("show");
//     }
// });
// fullScreenBtn.addEventListener("click", () => {
//     container.classList.toggle("fullscreen");
//     if(document.fullscreenElement) {
//         fullScreenBtn.classList.replace("fa-compress", "fa-expand");
//         return document.exitFullscreen();
//     }
//     fullScreenBtn.classList.replace("fa-expand", "fa-compress");
//     container.requestFullscreen();
// });
// speedBtn.addEventListener("click", () => speedOptions.classList.toggle("show"));
// pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());
// skipBackward.addEventListener("click", () => mainVideo.currentTime -= 5);
// skipForward.addEventListener("click", () => mainVideo.currentTime += 5);
// mainVideo.addEventListener("play", () => playPauseBtn.classList.replace("fa-play", "fa-pause"));
// mainVideo.addEventListener("pause", () => playPauseBtn.classList.replace("fa-pause", "fa-play"));
// playPauseBtn.addEventListener("click", () => mainVideo.paused ? mainVideo.play() : mainVideo.pause());
// videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
// document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));


console.log("Hi");

// Slider (all Slides in a container)
const slider = document.querySelector(".slider");
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div");
// All videos
const videos = document.querySelectorAll("video");

// Transform value
let value = 0;
// trail index number
let trailValue = 0;

// Function to slide forward
const slide = (condition) => {
    // Update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC();
    // Move slide
    move(value, trailValue);
    // Pause all videos
    pauseAllVideos();
    // Play video of active slide
    videos[trailValue].play();
};

// Function for increase (forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"));
    // Increase transform value
    value === 80 ? value = 0 : value += 20;
    // Update trailValue based on value
    trailUpdate();
};

// Function for decrease (backward, previous) configuration
const initiateDEC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"));
    // Decrease transform value
    value === 0 ? value = 80 : value -= 20;
    // Update trailValue based on value
    trailUpdate();
};

// Function to transform slide
const move = (S, T) => {
    // Transform slider
    slider.style.transform = `translateX(-${S}%)`;
    // Add active class to the current trail
    trail[T].classList.add("active");
};

// Function to update trailValue based on slide value
const trailUpdate = () => {
    trailValue = value / 20;
};

// Next and Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"));
});

// Function to slide when trail is clicked
const clickCheck = (e) => {
    trail.forEach(cur => cur.classList.remove("active"));
    const check = e.target;
    check.classList.add("active");
    if (check.classList.contains("box1")) {
        value = 0;
    } else if (check.classList.contains("box2")) {
        value = 20;
    } else if (check.classList.contains("box3")) {
        value = 40;
    } else if (check.classList.contains("box4")) {
        value = 60;
    } else {
        value = 80;
    }
    trailUpdate();
    move(value, trailValue);
    pauseAllVideos();
    videos[trailValue].play();
};

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)));

// Pause all videos except the one of the active slide
const pauseAllVideos = () => {
    videos.forEach((video, index) => {
        if (index !== trailValue) {
            video.pause();
        }
    });
};

// Listen for the ended event on each video element
videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
        // Move to the next slide when the video ends
        slide("increase");
    });
});

// Function to check if element is in viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Function to resume video of active slide if it's in viewport
const resumeActiveVideo = () => {
    if (isInViewport(slider.querySelector(".box.active video"))) {
        videos[trailValue].play();
    }
};

// Listen for scroll event and resume active video if in viewport
window.addEventListener("scroll", () => {
    resumeActiveVideo();
});

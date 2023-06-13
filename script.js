// Select the burger menu icon
const burger = document.querySelector("nav svg");

// Add a click event listener to the burger menu icon
burger.addEventListener("click", () => {
  // Check if the burger menu icon has the "active" class
  if (burger.classList.contains("active")) {
    // If it has the "active" class, animate the links to move them out of the screen
    gsap.to(".links", { x: "100%" });
    // Change the color of the line in the burger menu icon to white
    gsap.to(".line", { stroke: "white" });
    // Enable vertical scrolling on the page
    gsap.set("body", { overflow: "auto" });
    // Disable horizontal scrolling on the page
    gsap.set("body", { overflowX: "hidden" });
  } else {
    // If it doesn't have the "active" class, animate the links to move them into the screen
    gsap.to(".links", { x: "0%" });
    // Change the color of the line in the burger menu icon to black
    gsap.to(".line", { stroke: "black" });
    // Fade in the links one by one with a slight delay between each one
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    // Disable vertical scrolling on the page
    gsap.set("body", { overflow: "hidden" });
  }
  // Toggle the "active" class on the burger menu icon
  burger.classList.toggle("active");
});

// Select all elements with the class "video" and convert them into an array
const videos = gsap.utils.toArray(".video");

// Set the initial opacity of all videos to 0
gsap.set(videos, { opacity: 0 });

// Iterate over each video element
videos.forEach((video) => {
  // Create a scroll trigger for each video
  ScrollTrigger.create({
    // Set the trigger to be when the video is in the center of the viewport
    trigger: video,
    start: "top center",
    end: "bottom center",

    // When the video enters the viewport, animate its opacity to 1 and play the video
    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    // When scrolling back and the video re-enters the viewport, play the video
    onEnterBack: () => video.play(),
    // When the video leaves the viewport, pause the video
    onLeave: () => video.pause(),
    // When scrolling back and the video leaves the viewport, pause the video
    onLeaveBack: () => video.pause(),
  });
});

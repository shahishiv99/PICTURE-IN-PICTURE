const videoElement = document.getElementById("video");
const button = document.getElementById("btn");

// Prompt to select media stream, pass a video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.play();
  } catch (error) {
    // catch error
    console.log("Woops error:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable btn
  button.disabled = true;
  //   Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //   Reset btn
  button.disabled = false;
});

// Onload function
selectMediaStream();

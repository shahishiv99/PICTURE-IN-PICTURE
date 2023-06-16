const videoElement = document.getElementById("video");
const btnStart = document.getElementById("btnStart");
const btnSelectDisplay = document.getElementById("btnSelectDisplay");

// Select Screen
btnSelectDisplay.addEventListener("click", async () => {
  const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  videoElement.srcObject = mediaStream;
  videoElement.play();
});

// Prompt to select media stream, pass a video element, then play
async function selectMediaStream() {
  try {
    btnSelectDisplay;
  } catch (error) {
    // catch error
    console.log("Woops error:", error);
  }
}

btnStart.addEventListener("click", async () => {
  // Disable btn
  btnStart.disabled = true;
  //   Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //   Reset btn
  btnStart.disabled = false;
});

// Onload function
selectMediaStream();

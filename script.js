const button = document.getElementById("button")
const videoEl = document.getElementById("video")

// Prompt to select media stream, pass to video element , than play 

async function seleectMedia(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoEl.srcObject = mediaStream
        videoEl.onloadedmetadata = ()=>{
            videoEl.play()
        }

    } catch (error) {
        // Catch Error
        console.log("error")
    }
}
button.addEventListener("click", async ()=>{
    // Disabled 
    // videoEl.hidden = true
    button.disabled = true
    // Start picture 
    await videoEl.requestPictureInPicture()
    button.disabled = false
})
seleectMedia()
let downloadbtn = document.querySelector('#downbtn');

// function onStartedDownload(id) {
//     console.log(`Started downloading: ${id}`);
// }

// function onFailed(error) {
//     console.log(`Download failed: ${error}`);
// }


let downloading = browser.downloads.download({
    filename: "audio/Barry White - My First My Last My Everything - Lyrics.mp3",
    conflictAction: 'uniquify'
});


downloadbtn.addEventListener('click', function () {
    downloading.then(onStartedDownload, onFailed);
})
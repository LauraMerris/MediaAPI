

    function selectPhotoIdModal() {
        $('#photoIdModal').modal('show');
    }

    // TODO: Handle where device has no camera

    //startVideo(); // TODO: Call only on first load?

    function startVideo() {
        const player = document.getElementById('player');

        const constraints = {
            video: {
                facingMode: "environment"
            }
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                player.srcObject = stream;
            })
            .catch((error) => {
                // error with getUserMedia either NotAllowedError or NotFoundError
                // todo: check for this before calling startVideo
                alert('error finding media stream');
            });
    }

    // TODO: enable / disable OK button depending on image
/*
    #takePhotoButton.onclick = function () {
        const canvas = document.createElement("canvas");
        const video = document.getElementById('player');
        const img = document.getElementById('snapshot');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        img.src = canvas.toDataURL("image/jpg");

        // save base64 array to image data field
        const hdn = document.getElementById('hdnImageData');
        hdn.value = canvas.toDataURL("image/jpg").replace(/^data:image\/(png|jpg);base64,/, "");

        // toggle video / review visibility
        const preview = document.getElementById('takePhotoContainer');
        preview.style.display = "none";
        const review = document.getElementById('reviewPhotoContainer');
        review.style.display = "block";

    }
*/
    /*
    retakePhotoButton.onclick = function () {

        // toggle video / review visibility
        const preview = document.getElementById('takePhotoContainer');
        preview.style.display = "block";
        const review = document.getElementById('reviewPhotoContainer');
        review.style.display = "none";
        startVideo();

    }
    */


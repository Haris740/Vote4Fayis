window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = 1080;
    canvas.height = 1440;
    canvas.style.width = '480px';
    canvas.style.height = '640px';

    var cookieValue = decodeURIComponent(document.cookie.split('; ').find(row => row.startsWith('pic=')).split('=')[1]);

    const img = new Image();
    const pic = new Image();
    img.onload = function () {
        pic.onload = function () {
            ctx.clearRect(0, 0, 1080, 1440);
            ctx.drawImage(img, 0, 0, 1080, 1440);
            ctx.drawImage(pic, 120 * 2.25, 200 * 2.25, 140 * 2.25, 190 * 2.25);
            ctx.fillStyle = "white";
            ctx.font = "21px cursive";
            ctx.fillText("MM_CHESSMAN", 22.5, 45);
        };
        pic.src = cookieValue;
    };
    img.src = "back.jpg";

    function downloadCanvasImage(canvasId, filename) {
        const canvas = document.getElementById(canvasId);
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = filename;
        link.click();
    }

    const downloadButton = document.getElementById("download");
    downloadButton.addEventListener("click", () => {
        downloadCanvasImage("canvas", "vote4fayis.png");
    });
}
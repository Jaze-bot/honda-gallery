function upDate(previewPic) {
    const img = previewPic.querySelector('img');
    console.log("Mouse/Focus over:", img.dataset.debug);
    console.log("Alt:", img.alt);
    console.log("Src:", img.src);

    document.querySelector('#image').innerHTML = img.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + img.src + "')";
}

function unDo() {
    console.log("Mouse/Focus out");
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML = "Hover or focus on a Honda image below to display here.";
}

function addTabIndex() {
    console.log("Adding tabindex attributes...");
    const previews = document.querySelectorAll('.preview');
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute('tabindex', '0');
    }
}

function displayFull(previewPic) {
    const img = previewPic.querySelector('img');
    console.log("Image Clicked:", img.dataset.debug);
    document.querySelector('#image').innerHTML = img.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + img.src + "')";
}
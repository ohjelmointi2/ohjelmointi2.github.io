function openPopUp(url) {
    window.open(url, 'videoPopUp', `toolbar=no,
                                    location=no,
                                    status=no,
                                    menubar=no,
                                    scrollbars=yes,
                                    resizable=yes,
                                    width=640,
                                    height=360`);
}

function addVideoPopOutLinks() {
    let videoFrames = document.querySelectorAll("iframe[src^='https://web.microsoftstream.com'], iframe[src^='https://d38ynedpfya4s8.cloudfront.net']")

    videoFrames.forEach(frame => {
        let url = frame.src;
        let popOutLink = document.createElement('a');
        popOutLink.className = 'popOutLink';
        popOutLink.innerHTML = '🗗';
        popOutLink.title = 'Avaa uudessa ikkunassa';
        popOutLink.href = url;
        popOutLink.onclick = (e) => {
            e.preventDefault();
            openPopUp(url);
            return false;
        }
        frame.parentNode.insertBefore(popOutLink, frame.nextSibling);
    });
}

addVideoPopOutLinks();
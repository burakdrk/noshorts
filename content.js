const getId = (url) => {
    let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(url)[3];
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'hello')    {

        if(request.url.match(/shorts/))   {
            console.log('Redirecting shorts');
            location.replace(`https://www.youtube.com/watch?v=${getId(request.url)}`);
        }
    }
});


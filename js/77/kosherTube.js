/* globals $*/
(async function () {
    'use strict';

    const ul = $('#vidUl');
    const videoPlayer = $('#theVideo');

    async function loadJson(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    const videos = await loadJson('videos.json');
    
    videos.forEach(video => {
        const theLi = $(`<li >${video.title}</li>`);
        theLi.click(() => {
            videoPlayer.attr('src', video.url);
        });

        ul.append(theLi);
    });
}());
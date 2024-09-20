/* global $*/
'use strict';

$('#loading').hide();
let status;
const LoadFile = $('#loadFileForm');

$('#loadFile').click(() => {

    LoadFile.slideDown('fast');


});
$('#File').click((e) => {
    $('#loading').show();
    e.preventDefault();

    fetch($('#myInput').val())
        .then(r => {
            if (r.status < 400) {
                return r.text();
            } else {
                status = r.status;
                console.log(r);
                throw new Error(`${r.status} - ${r.statusText}`);
            }
        })
        .then(things => {
            console.log(things);
            /* things.forEach(thing => {
                 console.log(thing.name, thing.price, thing);
             });*/
            $('#myJson').text(things)
        })
        .catch(e => {
            console.log('doing 10 lines of sophisticated error handling here');
            console.error('oops', e);
            console.log(status);
        }).finally(() => {
            $('#loading').hide();
        })
        ;

    console.log('last line');

    hideForm();
});

function hideForm() {
    LoadFile.trigger('reset');
    LoadFile.slideUp('slow');
}

console.log('app is alive')


function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('head-channel').innerHTML= channelName;
    document.getElementById('head-w3w').innerHTML= '<a href="http://w3w.co/upgrading.never.helps" target="_blank" id="head-w3w-link">upgrading.never.helps</a>';
    document.getElementById('head-w3w-link').style.color = 'white';
    $('ul').find('.selected').removeClass("selected");
    $('li:contains(' + channelName + ')').addClass('selected');
    unfillCurrentChannelStar();

}

function unfillCurrentChannelStar() {
    $('#star-current-channel').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function fillCurrentChannelStar() {
    $('#star-current-channel').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(tabID) {
    console.log('Changing to tab ' + tabID);
    $('#tab-bar').find('.selected').removeClass("selected");
    $('#'+tabID).addClass("selected");

}

function toggleEmojiBox() {
    $('#emojis').toggle();
}
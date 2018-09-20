
console.log('app is alive')


function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('head-channel').innerHTML= channelName;
    document.getElementById('head-w3w').innerHTML= '<a href="http://w3w.co/upgrading.never.helps" target="_blank" id="head-w3w-link">upgrading.never.helps</a>';
    document.getElementById('head-w3w-link').style.color = 'white';

}

function unfillCurrentChannelStar() {
    $('#star-current-channel').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function fillCurrentChannelStar() {
    $('#star-current-channel').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}
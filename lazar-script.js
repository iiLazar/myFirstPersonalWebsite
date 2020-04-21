let jumpScroll = document.getElementsByClassName('jumpScroll');

function displayElement(el) {
    document.getElementById(el).style.display = 'block';
}

function hideElement(el) {
    document.getElementById(el).style.display = 'none';
}

function scrollAfterJump() {
    setTimeout(function(){window.scrollBy(0, -100)}, 1);
}

function headMouseOver() {
    document.getElementById('headSmall').style.top = '0';
    document.getElementsByClassName('mainLeft')[0].style.top = '80px';
}

function scrollHeader() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        displayElement('headSmall');
        document.getElementById('headSmall').style.top = '0';
        document.getElementsByClassName('mainLeft')[0].style.top = '80px';
    } else if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        displayElement('headSmall');
        document.getElementById('headSmall').style.top = '-83px';
        document.getElementById('headSmall').onmouseover = function() { headMouseOver(); };
        document.getElementsByClassName('mainLeft')[0].style.top = '0px';
    } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        displayElement('headSmall');
        document.getElementById('headSmall').style.top = '-100px';
        document.getElementsByClassName('mainLeft')[0].style.top = '0px';
    } else {
        hideElement('headSmall');
    }
}

function headSmallFixed() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        displayElement('headSmall');
        document.getElementById('headSmall').style.top = '0';
        document.getElementsByClassName('mainLeft')[0].style.top = '80px';
        document.getElementById('headPicDiv').style.opacity = '1';
    } else {
        displayElement('headSmall');
        document.getElementById('headSmall').style.top = '0';
        document.getElementsByClassName('mainLeft')[0].style.top = '80px';
        document.getElementById('headPicDiv').style.opacity = '0';
    }
}


for (let i=0; i < jumpScroll.length; i++) {
    jumpScroll[i].addEventListener('click', scrollAfterJump);
}




MediaQ: {
    let mq = window.matchMedia("(min-width: 545px)");
    function widthMatch(mq) {
        if (mq.matches) {
            document.getElementById('headPicDiv').style.opacity = '1';
            window.onscroll = function () { scrollHeader(); };
            scrollHeader();
        } else {
            window.onscroll = function () { headSmallFixed(); };
            headSmallFixed();
        }
    }
    
    mq.addListener(widthMatch);
    widthMatch(mq);
}

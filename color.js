var body = {
    setColor : function (color) {
        // document.querySelector('body').style.color = color;
        $("body").css("color", color);
    },
    setBGColor : function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $("body").css("backgroundColor", color);
    }
}
var links = {
    setColor : function (color) {
        // var alist = document.querySelectorAll('a')
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
}
function dark_mode(self) {
    if (self.value === 'night') {
        body.setBGColor("black");
        body.setColor("white");
        self.value = 'day';
        links.setColor("white");
    } else {
        body.setBGColor("white");
        body.setColor("black");
        self.value = 'night';
        links.setColor('black');
    }
}
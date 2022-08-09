function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    }
    webP.src = "data:image/webp"
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

<<<<<<< HEAD
/*--------click_for_copy---------*/
=======
>>>>>>> 48705d20966db06399ee69b82e12d57d91d143b3
function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
<<<<<<< HEAD
}

/*--------up_button---------*/
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

/*-------up_button_loading_screen------*/
jQuery(function($){
    $(document).ajaxSend(function() {
        $("#overlay").fadeIn(300);
    });

    $('#button').click(function(){
        $.ajax({
            type: 'GET',
            success: function(data){
                console.log(data);
            }
        }).done(function() {
            setTimeout(function(){
                $("#overlay").fadeOut(300);
            },500);
        });
    });
});
=======
}
>>>>>>> 48705d20966db06399ee69b82e12d57d91d143b3

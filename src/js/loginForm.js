$( document ).ready(function() {
    $('.login-btn').click(function(event) {
        $('body').append('  <div id="shade"></div>\n' +
            '        <form name="logiIn" id="login-form" action="">\n' +
            '            <h3>Enter your data</h3>\n' +
            '            <input type="email" placeholder="Enter email">\n' +
            '            <input type="password" placeholder="Enter password">\n' +
            '            <input type="submit"  id="close-log" value="Log In">\n' +
            '        </form>');
        $('#shade, #login-form').fadeIn('fast');
    });

    // $('body').on('click', '#close-log, #shade', function(event) {
    //     event.preventDefault();
    //     $('#shade, #login-form').fadeOut('fast', function() {
    //         $('#close-log, #pop-up, #shade').remove();
    //     });
    // });

});
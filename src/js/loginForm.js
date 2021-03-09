$( document ).ready(function() {
    $('.login-btn').click(function(event) {
        $('body').append('  <div id="shade"></div>\n' +
            '        <form name="logiIn" id="login-form" action="">\n' +
            '            <h3>Enter your data</h3>\n' +
            '            <input type="email" name="email" placeholder="Enter email">\n' +
            '            <input type="password" name="password" placeholder="Enter password">\n' +
            '            <input type="submit"   id="submit" value="Log In">\n' +
            '            <input type="button"  id="close-log" value="close">\n' +
            '        </form>');
        $('#shade, #login-form').fadeIn('fast');
    });
    $('body').on('click', '#close-log', function(event) {
        event.preventDefault();
        $('#shade, #login-form').fadeOut('fast', function() {
            $('#login-form, #shade').remove();
        });
    });

    // отправка формы
    function SendForm (){
        var $data = $('#login-form').serialazeArray();
        $.each($data, function (){
            $data[this.name]=$(this).val();
        });
        console.log($data);
    }

    $('#submit').click(SendForm);
});
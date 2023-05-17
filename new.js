
//     < !--firebase -->
// <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js"></script>
// <link rel="manifest" href="{{asset('manifest.json')}}">
{ <script src="{{asset('js/firebasse.js')}}"></script> }
// <script>
//firebase.analytics();
const messaging = firebase.messaging();
messaging
    .requestPermission()
    .then(function () {
        //MsgElem.innerHTML = "Notification permission granted."
        // get the token in the form of promise
        return messaging.getToken()
    })
    .then(function (token) {
        // print the token on the HTML page
        $.ajax({
            url: "./src/controllers/Home.js ",
            type: 'POST',
            data: {
                fcm_token: token
            },
            dataType: 'JSON',
            success: function (res) { },
            error: function (err) {
                console.log(" Can't do because: " + err);
            },
        });

    })
    .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
    });

messaging.onMessage(function (payload) {
    console.log(payload.notification)
    if (payload.notification.body) {
        var notify_input = $('#count-not-val').val();
        var notify_count = parseInt(notify_input);
        notify_count = notify_count + 1;
        $('#count-not-val').val(notify_count)
        $('.notification_count').text(notify_count)
        $('#scrollable-container').prepend(`
                    <a href="{{url('/')}}/vendor-panel/subscribes/details/${payload.notification.image}">
                        <div class="media not_read">
                        <div class="media-left align-self-center"><i class="ft-plus-square icon-bg-circle bg-cyan"></i></div>
                        <div class="media-body">
                            <h6 class="media-heading">${payload.notification.title}!</h6>
                            <p class="notification-text font-small-3 text-muted">${payload.notification.body}.</p>
                            <small>
                            <time class="media-meta text-muted" datetime="2015-06-11T18:29:20+08:00"></time>
                            </small>
                        </div>
                        </div>
                    </a>
                `)
    }
});




var sendGmail = function(opts){
    var str = 'http://mail.google.com/mail/?view=cm&fs=1'+
              '&to=' + opts.to +
              '&su=' + opts.subject +
              '&body=' + opts.message +
              '&ui=1';
    location.href = str;
}

sendGmail({
    to: "prodevell@gmail.com",
    subject: "a",
    message: "abc"
});

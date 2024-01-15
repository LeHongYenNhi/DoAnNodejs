var nodemailer = require('nodemailer');
const configs = require('./configs');


var transport = nodemailer.createTransport({
    host: configs.MAIL_HOST,
    port: configs.MAIL_PORT,
    auth: {
        user: configs.MAIL_USER, //example of generated by Mailtrap 
        pass: configs.MAIL_PASS //example of generated by Mailtrap 
    }
});



module.exports = {
    send: async function(email, message) {
        await transport.sendMail({
            from: 'iamasystemadmin@gmail.com',
            to: email,
            subject: 'THU NAY DE RESET PASS',
            html: '<a href=/authen/resetPassword/' + message + '>bam vao day de doi mat khau</a>',
        })
    },
}
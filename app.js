'use strict';

const nodemailer = require('nodemailer');
const EmailTemplate = require('email-templates');
const emailParams = require('./config').emailCredentials;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        type: 'OAuth2',
        user: emailParams.user,
        clientId: emailParams.clientId,
        clientSecret: emailParams.clientSecret,
        refreshToken: emailParams.refreshToken,
        accessToken: emailParams.accessToken,
    }
});

const email = new EmailTemplate({
    message: {
        from: 'capsulasexpressnutresa@pragma.com.co'
    },
    send: false,
    transport: transporter,
    views: {
        options: {
            extension: 'hbs'
        }
    }
});

const sendEmail = async () => {
    try {
        const result = await email.send({
            template: 'welcome',
            message: {
                to: ['glego40_@hotmail.com', 'guillo.grajales@gmail.com']
            },
            locals: {
                firstName: 'Guillermo',
                lastName: 'Grajales'
            }
        });
        console.log(result);
    } catch (e) {
        console.error(e);
    }
};

sendEmail();
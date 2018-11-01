'use strict';

const nodemailer = require('nodemailer');
const EmailTemplate = require('email-templates');
const emailParams = require('./config').emailCredentials;

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Office 365 server
    port: 587,     // secure SMTP
    secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
    auth: {
        user: 'contacto@souschefmccain.com.co',
        pass: 'contacto2018$'
    },
    tls: {
        ciphers: 'SSLv3'
    }
    /*host: 'smtp.pragma.com.co',
    port: 25*/
// host: 'smtp.gmail.com',
// port: 465,
// secure: true, // true for 465, false for other ports
// auth: {
//     type: 'OAuth2',
//     user: emailParams.user,
//     clientId: emailParams.clientId,
//     clientSecret: emailParams.clientSecret,
//     refreshToken: emailParams.refreshToken,
//     accessToken: emailParams.accessToken,
// }
});

const email = new EmailTemplate({
    message: {
        from: 'Sous Chef McCain <contacto@souschefmccain.com.co>'
        //from: 'Capsulas <capsulasexpressnutresa@pragma.com.co>'
    },
    send: false,    // True to send real email
    transport: transporter,
    views: {
        options: {
            extension: 'hbs'
        }
    }
});

const sendEmail = async () => {
    const tempArray = ['Guillermo', 'Guillermo'];
    const emails = ['guillo.grajales@gmail.com', 'glego40_@hotmail.com'];
    try {
        /*for (let i = 0; i < tempArray.length; i++) {
            const result = await email.send({
                template: 'mccain',
                message: {
                    to: emails[i]
                },
                locals: {
                    firstName: tempArray[i]
                }
            });
            console.log(result);
        }*/
        const result = await email.send({
            template: 'mccain',
            message: {
                to: 'guillermo.grajales@pragma.com.co'
            },
            locals: {
                repName: 'Guillermo'
            }
        });
        console.log(result);
    } catch (e) {
        console.error(e);
    }
};

sendEmail();
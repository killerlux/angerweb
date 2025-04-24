const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    try {
        const data = JSON.parse(event.body);
        const { name, email, phone, company, message } = data;

        // Configuration du transporteur d'email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Préparation de l'email
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.CONTACT_EMAIL,
            subject: `Nouveau message de contact de ${name}`,
            html: `
                <h2>Nouveau message de contact</h2>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
                <p><strong>Entreprise:</strong> ${company || 'Non fournie'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Message envoyé avec succès'
            })
        };
    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Erreur lors de l\'envoi du message'
            })
        };
    }
}; 
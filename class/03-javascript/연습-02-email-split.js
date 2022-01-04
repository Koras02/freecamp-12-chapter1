const email = 'codecamp@gmail.com';
email.includes('@');
email.split('@');
let userMail = email.split('@')[0];
userMail;
let company = email.split('@')[1];
let maskingMail = [];
maskingMail.push(userMail[0]);
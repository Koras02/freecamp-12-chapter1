const email = 'codecamp@gamil.com'
console.log(email)
email.includs('@')

email.split('@')
(2) ['codecamp', 'gamil.com']
email.includes('@')
let userMail = email.split('@')[0]
userMail
'codecamp'
let company = email.split('@')[1]
let maskingMail = []
maskingMail.push(userMail[1])
maskingMail.push(userMail[2])
maskingMail.push(userMail[3])
maskingMail.push(userMail[0])
maskingMail
maskingMail.push('*')
maskingMail.push('*')
maskingMail.push('*')
maskingMail.push('*')
maskingMail
maskingMail.join("!")
maskingMail.join("")
let userId = maskingMail.join("")
userId
userId + "@" + company
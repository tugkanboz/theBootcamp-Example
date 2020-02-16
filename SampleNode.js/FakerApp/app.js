var faker = require('faker');
var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();
var randomName2 = faker.internet.domainName();

console.log(randomName2);

console.log("name:", randomName," mail:",randomEmail," card:",randomCard.accountHistory[0]);
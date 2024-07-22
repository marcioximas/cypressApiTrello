import 'cypress-plugin-api';
const faker = require('faker-br');

Cypress.Commands.add('createBoard', (boardName) => {
  const apiKey = Cypress.env('TRELLO_API_KEY');
  const tokenTrello = Cypress.env('TRELLO_TOKEN');
  return cy.api({
    method: 'POST',
    url: `/boards/?name=${boardName}&key=${apiKey}&token=${tokenTrello}`,
    headers: { Accept: 'application/json' },
    body: null
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq(boardName);
    return response.body.id;
  });
});

Cypress.Commands.add('deleteBoard', (boardId) => {
    const apiKey = Cypress.env('TRELLO_API_KEY');
    const tokenTrello = Cypress.env('TRELLO_TOKEN');
    return cy.api({
      method: 'DELETE',
      url: `/boards/${boardId}?&key=${apiKey}&token=${tokenTrello}`,
      headers: { Accept: 'application/json' },
      body: null
    }).then((response) => {
    
      return response.status;
    });
  });

Cypress.Commands.add('createList', (listName, boardId) => {
  const apiKey = Cypress.env('TRELLO_API_KEY');
  const tokenTrello = Cypress.env('TRELLO_TOKEN');
  return cy.api({
    method: 'POST',
    url: `/lists?name=${listName}&idBoard=${boardId}&key=${apiKey}&token=${tokenTrello}`,
    headers: { Accept: 'application/json' },
    body: null
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq(listName);
    return response.body.id;
  });
});
Cypress.Commands.add('createCard', (cardName, listId) => {
  const apiKey = Cypress.env('TRELLO_API_KEY');
  const tokenTrello = Cypress.env('TRELLO_TOKEN');
  return cy.api({
    method: 'POST',
    url: `/cards?name=${cardName}&idList=${listId}&key=${apiKey}&token=${tokenTrello}`,
    headers: { Accept: 'application/json' },
    body: null
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq(cardName);
    return response.body.id;
  });
});

Cypress.Commands.add('deleteCard', (cardId) => {
  const apiKey = Cypress.env('TRELLO_API_KEY');
  const tokenTrello = Cypress.env('TRELLO_TOKEN');
  return cy.api({
    method: 'DELETE',
    url: `/cards/${cardId}?&key=${apiKey}&token=${tokenTrello}`,
    headers: { Accept: 'application/json' },
    body: null
  }).then((response) => {
    return response.status;
  })
});
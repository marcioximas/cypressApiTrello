const faker = require('faker-br');

describe('Trello API - Delete a Card', () => {
  let boardId = '';
  let listId = '';
  let cardId = '';
  const cardName = faker.commerce.productName();

  beforeEach(() => {
    cy.createBoard(faker.company.companyName()).then((id) => {
      boardId = id;
      return cy.createList(faker.commerce.department(), boardId);
    }).then((id) => {
      listId = id;
      cy.log(`List created with ID: ${listId}`);
      return cy.createCard(cardName, listId);
    }).then((id) => {
      cardId = id;
      cy.log(`Card created with ID: ${cardId}`);
    });
  });

  it('should delete a card on the board', () => {
    cy.deleteCard(cardId).then((status) => {
      expect(status).to.eq(200);
    });
  });

  afterEach(() => {
    cy.deleteBoard(boardId).then((status) => {
      expect(status).to.eq(200);
    });
  });
});
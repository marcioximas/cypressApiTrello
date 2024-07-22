const faker = require('faker-br');

describe('Trello API - Create a Card', () => {
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
    });
  });


  it('should create a card on the board', () => {
    cy.createCard(cardName, listId).then((id) => {
      cardId = id;
    });
  });

  afterEach(() => {
    cy.deleteCard(cardId).then((status) => {
      expect(status).to.eq(200);
    })
    cy.deleteBoard(boardId).then((status) => {
      expect(status).to.eq(200);
    })

  })
})


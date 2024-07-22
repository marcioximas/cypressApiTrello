const faker = require('faker-br');

describe('Trello API - Create a Board', () => {
  let boardId = '';
  const boardName = faker.company.companyName();

  it('should create a board', () => {
    cy.createBoard(boardName).then((id) => {
      boardId = id;
    });
  });

  afterEach(() => {
    if (boardId) {
      cy.deleteBoard(boardId).then((status) => {
        expect(status).to.eq(200);
      });
    }
  });


});
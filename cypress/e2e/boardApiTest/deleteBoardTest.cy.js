const faker = require('faker-br') 

describe('Trello API - Delete a Board', () => {
  let boardId = '' 
  const boardName = faker.company.companyName() 

  beforeEach(() => {
    cy.createBoard(boardName).then((id) => {
      boardId = id 
    }) 
  }) 
  it('should delete a board', () => {
    cy.deleteBoard(boardId).then((status) => {
      expect(status).to.eq(200) 
    }) 
  })
}) 

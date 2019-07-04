import { getGreeting } from '../support/app.po';

describe('recreate-shapely-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to recreate-shapely-demo!');
  });
});

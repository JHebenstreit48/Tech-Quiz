import { beforeEach } from 'vitest';
import Quiz from '../../client/src/components/Quiz.tsx';

describe('<Quiz />', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: '/api/questions/random'
        }, {
            fixture: 'quiz.json',
            statusCode: 200
        }).as('getRandomQuestion');
    })

    it('should initially render a Start Quiz button', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');

    });
});
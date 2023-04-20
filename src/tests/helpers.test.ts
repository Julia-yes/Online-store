/**
 * @jest-environment jsdom
 */

import { createNode } from "../scripts/helpers";


describe('When creating node,', () => {
  it('corresponds to passed parameters', () => {
    const expectedNode = document.createElement('div');
    expectedNode.className = 'test';
    expectedNode.textContent = 'testText';
    const result = createNode('test', 'testText');
    expect(expectedNode).toEqual(result);
  })
})

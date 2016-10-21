import React from 'react'
import renderer from 'react-test-renderer'
import Example from '../src/Example'

test('Example should add a CSS class by default.', () => {
  const component = renderer.create(
    <Example>Hello, world!</Example>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Example should add a CSS class with the given level.', () => {
  const component = renderer.create(
    <Example level={3}>Hello, world!</Example>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

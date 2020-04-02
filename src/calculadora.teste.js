import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';

test('renders learn react link', () => {
  const { getByText } = render(<Calculadora />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

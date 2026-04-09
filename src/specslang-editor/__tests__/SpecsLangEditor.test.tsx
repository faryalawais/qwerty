import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SpecsLangEditor from '../SpecsLangEditor';

test('Valid YAML input does not show errors', () => {
  const { getByPlaceholderText, queryByText } = render(<SpecsLangEditor />);
  const textarea = getByPlaceholderText('Enter SpecsLang YAML here...');

  fireEvent.change(textarea, { target: { value: 'valid: yaml' } });

  expect(queryByText('YAML is valid!')).toBeInTheDocument();
  expect(queryByText('YAML cannot be empty.')).not.toBeInTheDocument();
});

test('Invalid YAML input shows error messages', () => {
  const { getByPlaceholderText, getByText } = render(<SpecsLangEditor />);
  const textarea = getByPlaceholderText('Enter SpecsLang YAML here...');

  fireEvent.change(textarea, { target: { value: '' } });

  expect(getByText('YAML cannot be empty.')).toBeInTheDocument();
});
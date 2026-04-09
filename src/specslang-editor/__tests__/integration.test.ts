import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SpecsLangEditor from '../SpecsLangEditor';

test('Integration test for valid YAML', () => {
  const { getByPlaceholderText, getByText } = render(<SpecsLangEditor />);
  const textarea = getByPlaceholderText('Enter SpecsLang YAML here...');

  fireEvent.change(textarea, { target: { value: 'valid: yaml' } });

  expect(getByText('YAML is valid!')).toBeInTheDocument();
});

test('Integration test for invalid YAML', () => {
  const { getByPlaceholderText, getByText } = render(<SpecsLangEditor />);
  const textarea = getByPlaceholderText('Enter SpecsLang YAML here...');

  fireEvent.change(textarea, { target: { value: '' } });

  expect(getByText('YAML cannot be empty.')).toBeInTheDocument();
});
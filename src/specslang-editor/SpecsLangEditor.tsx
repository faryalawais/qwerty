import React, { useState } from 'react';
import YAMLParser from './YAMLParser';
import ErrorDisplay from './ErrorDisplay';

const SpecsLangEditor = () => {
  const [yamlContent, setYamlContent] = useState('');
  const [errors, setErrors] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setYamlContent(value);
    validateYAML(value);
  };

  const validateYAML = (content) => {
    const { isValid, errorMessages } = YAMLParser.parse(content);
    if (isValid) {
      setErrors('');
    } else {
      setErrors(errorMessages);
    }
  };

  return (
    <div>
      <textarea value={yamlContent} onChange={handleChange} placeholder="Enter SpecsLang YAML here..." />
      {errors && <ErrorDisplay messages={errors} />}
      {errors === '' && <div className='success'>YAML is valid!</div>}
    </div>
  );
};

export default SpecsLangEditor;
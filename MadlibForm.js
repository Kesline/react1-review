// MadlibForm.js
import React, { useState } from 'react';

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun: '',
    verb: '',
    adjective: '',
    adverb: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun:
        <input
          type="text"
          name="noun"
          value={formData.noun}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={formData.verb}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={formData.adjective}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Adverb:
        <input
          type="text"
          name="adverb"
          value={formData.adverb}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Generate Story</button>
    </form>
  );
}

export default MadlibForm;

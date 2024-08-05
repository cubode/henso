// tests/App.js
import React from 'react';
import FormComponent from '../src/components/FormComponent';


const formSchema = {
  properties: {
    dynamicForms: {
      items: {
        properties: {
          'series-title': {
            title: 'Series Title',
            options: {
              inputAttributes: {
                class: 'series-title-input',
              },
            },
          },
        },
      },
    },
  },
};

const initialValues = {
  dynamicForms: [
    { 'series-title': '' },
  ],
};

const App = () => {
  const handleFormSubmit = (values) => {
    console.log('Form Submitted:', values);
  };

  const handleFormChange = (values) => {
    console.log('Form Changed:', values);
  };

  return (
    <div className="App">
      <FormComponent
        allowAddForms={true}
        formSchema={formSchema}
        initialValues={initialValues}
        onFormSubmit={handleFormSubmit}
        onFormChange={handleFormChange}
      />
    </div>
  );
};

export default App;
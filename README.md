# Henso

**Henso** is an elegant and tiny form generator that creates forms based on a JSON schema. It is framework-agnostic, making it versatile and easy to integrate into various projects.


## Features

- **JSON Schema Support**: Generate forms automatically from a JSON schema.
- **Framework Agnostic**: Easily integrate with any frontend framework.
- **Customizable Components**: Extend and customize form fields to suit your needs.
- **Lightweight**: Minimal dependencies and small bundle size.

## Installation

To include Henso in your project, simply install it via npm:


```bash
npm install henso
```

## Usage

After installing, you can start using Henso in your project. Below is a basic example of how to use the `FormComponent`:

```javascript
import React from 'react';
import { FormComponent } from 'henso';

const schema = {
  properties: {
    name: {
      title: "Name",
      type: "string"
    },
    age: {
      title: "Age",
      type: "number"
    }
  }
};

const initialValues = {
  name: '',
  age: ''
};

const App = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  const handleChange = (values) => {
    console.log("Form changed:", values);
  };

  return (
    <FormComponent 
      formSchema={schema} 
      initialValues={initialValues}
      onFormSubmit={handleSubmit}
      onFormChange={handleChange}
    />
  );
};

export default App;
```

## Advanced Usage

```javascript
export const formSchema = {
  title: "Bar Plot Customization",
  type: "object",
  options: {
    inputAttributes: {
      class: "w-full mt-1 rounded-lg p-2 h-12",
    },
  },
  properties: {
    "chart-title": {
      type: "string",
      title: "Chart Title",
      options: {
        inputAttributes: {
          class: "mt-3 w-full p-2 border rounded-md text-sm",
        },
        containerAttributes: {
          class: "mt-2 text-sm font-bold",
        },
      },
    },
    "chart-subtitle": {
      type: "string",
      title: "Chart Subtitle",
      options: {
        inputAttributes: {
          class: "mt-3 w-full p-2 border rounded-md text-sm",
        },
        containerAttributes: {
          class: "mt-2 text-sm font-bold",
        },
      },
    },
    "chart-xaxis-label": {
      type: "string",
      title: "X Axis Label",
      options: {
        inputAttributes: {
          class: "mt-3 w-full p-2 border rounded-md text-sm",
        },
        containerAttributes: {
          class: "mt-2 text-sm font-bold",
        },
      },
    },
    "chart-yaxis-label": {
      type: "string",
      title: "Y Axis Label",
      options: {
        inputAttributes: {
          class: "mt-3 w-full p-2 border rounded-md text-sm",
        },
        containerAttributes: {
          class: "mt-2 text-sm font-bold",
        },
      },
    },
    "chart-show-background": {
      type: "boolean",
      title: "Show Background",
      format: "customBoolean",
      options: {
        inputAttributes: {
          class: "w-full mt-3 p-2 border rounded-md",
        },
        containerAttributes: {
          class: "mt-2 text-sm font-bold",
        },
      },
      enum: [
        { value: 'show', label: 'Show' },
        { value: 'hide', label: 'Hide' },
      ],
    },
    dynamicForms: {
      type: "array",
      title: "Series",
      items: {
        type: "object",
        properties: {
          "series-title": {
            type: "string",
            title: "Series Title",
            options: {
              inputAttributes: {
                class: "w-full h-12 bg-white text-blue-gray-700 outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm py-1 px-2 rounded-md border-blue-gray-200 focus:border-gray-300",
              },
              containerAttributes: {
                class: "mt-2 text-sm text-gray-600 font-bold",
              },
            },
          },
          "series-column-category": {
            type: "string",
            title: "Column Category",
            format: "tagify",
            enum: [],
            maxtags: 1,
            options: {
              inputAttributes: {
                class: "w-full bg-white text-blue-gray-700 outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-gray-300",
              },
              containerAttributes: {
                class: "mt-2 text-sm text-gray-600 font-bold",
              },
            },
          },
          "series-column-values": {
            type: "string",
            title: "Column Values",
            enum: [],
            format: "tagify",
            maxtags: 1,
            options: {
              inputAttributes: {
                class: "w-full bg-white text-blue-gray-700 outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-gray-300",
              },
              containerAttributes: {
                class: "mt-2 text-sm text-gray-600 font-bold",
              },
            },
          },
          "series-aggregation": {
            type: "string",
            title: "Aggregation",
            enum: ["Sum", "Mean", "Min", "Max"],
            format: "tagify",
            maxtags: 1,
            options: {
              inputAttributes: {
                class: "w-full mt-3 bg-white text-blue-gray-700 outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-gray-300",
              },
              containerAttributes: {
                class: "mt-2 text-sm text-gray-600 font-bold",
              },
            },
          },
          "series-colorspace": {
            type: "string",
            title: "Color Space",
            format: "colorsDropdown",
            enum: [
              "Viridis", "YlGnBu", "Inferno", "Magma", "Plasma", "Warm", "Cool",
              "CubehelixDefault", "BuGn", "BuPu", "GnBu", "OrRd", "PuBuGn", "PuBu",
              "PuRd", "RdPu", "YlGn", "YlOrBr", "YlOrRd", "Turbo", "Cividis",
              "Rainbow", "Sinebow", "Blues", "Greens", "Greys", "Purples", "Reds",
              "Spectral", "RdYlGn", "RdYlBu", "RdGy", "RdBu", "PiYG", "PRGn", "PuOr", "BrBG",
            ],
            options: {
              inputAttributes: {
                class: "w-full bg-white text-blue-gray-700 outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-gray-300",
              },
              containerAttributes: {
                class: "mt-2 text-sm text-gray-600 font-bold",
              },
            },
          },
          "series-primary-color": {
            type: "string",
            format: "color",
            title: "Primary Color",
            options: {
              inputAttributes: {
                class: "w-full bg-white text-blue-gray-700 outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-gray-300",
              },
              containerAttributes: {
                class: "mt-2 text-sm text-gray-600 font-bold",
              },
            },
          },
          "series-secondary-color": {
            type: "string",
            format: "color",
            title: "Secondary Color",
            options: {
              inputAttributes: {
                class: "w-full bg-white text-blue-gray-700 outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-gray-300",
              },
              containerAttributes: {
                class: "mt-2 text-sm text-gray-600 font-bold",
              },
            },
          },
        },
      },
    },
  },
};

export const initialValues = {
  "chart-show-background": "hide",
  dynamicForms: [
    {
      "series-title": "",
      "series-column-category": "",
      "series-column-values": "",
      "series-aggregation": "",
      "series-primary-color": "#ffffff",
      "series-secondary-color": "#000000",
    },
  ],
};


const App = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  const handleChange = (values) => {
    console.log("Form changed:", values);
  };

  return (
    <FormComponent 
      formSchema={formSchema} 
      initialValues={initialValues}
      onFormSubmit={handleSubmit}
      onFormChange={handleChange}
    />
  );
};

export default App;
```

## Available Fields

Henso provides a set of customizable and flexible form fields that can be used to generate dynamic forms from a JSON schema. Below is a list of available fields and a brief description of each:

1. DynamicForm (cb-dynamic-field.js)
- Description: A dynamic form component that allows for the creation and management of multiple form instances based on a JSON schema. It provides functionality to add or remove form sections and dynamically updates form titles and content based on user input.
- Usage: This field is particularly useful for scenarios where the user needs to input multiple entries of a similar type (e.g., multiple series of data points).
2. CustomBooleanField (cb-field-boolean.js)
- Description: A custom boolean field component that renders a checkbox or toggle switch depending on the schema's configuration. It allows users to input true/false values in a user-friendly manner.
- Usage: Ideal for form inputs where a simple yes/no or true/false answer is required.
3. ColorPickerField (cb-field-color.js)
- Description: A color picker component that allows users to select a color from a palette. The component supports both preset colors and a color picker tool for more precise selections.
- Usage: Useful for forms that require color selection, such as design settings or branding choices.
4. SliderField (cb-field-slider.js)
- Description: A slider input component that lets users select a value from a range by sliding a handle along a track. The slider can be configured for different ranges, step values, and display options.
- Usage: Ideal for numeric inputs where users should select a value within a specific range, such as adjusting settings like volume or brightness.
5. TagifyField (cb-field-tagify.js)
- Description: A tag input component that allows users to create and manage a list of tags. It supports autocomplete suggestions and is highly customizable.
- Usage: Perfect for inputs where users need to enter multiple items, such as keywords, skills, or categories.
6. ColorsDropdownField (cb-field-tagify-colors.js)
- Description: A dropdown field component specialized for color selection. This component provides a dropdown menu with color options that users can choose from.
- Usage: Similar to ColorPickerField, but with a predefined set of colors presented in a dropdown format.

These components are designed to be easily integrated into your form schema, providing a robust and user-friendly experience for various input types. Each component is framework-agnostic, ensuring that you can use them in different environments without dependency issues.


## For Testing and Development

To get started with development or testing, clone the repository and install the necessary dependencies:


```bash
npm install
npm start
```

If you need to build the project in development mode (with source maps), you can use:

```bash
npm run build
```

This will generate a non-minimized build with source maps, useful for debugging.



## For production bundling

To create a production build, which is optimized and minified, run:


```bash
npm run build:prod
```

The production build will be available in the dist folder.

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes. Make sure to run tests and lint your code before submitting.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
Thanks to all the contributors and the open-source community for their continuous support and improvement of this project.

## About
We are www.cubode.com an startup focussed on No Code, AI and OpenSouce.

Templatifier has been developed with 💙 for the community



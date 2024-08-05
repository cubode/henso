import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';

import DynamicForm from './fields/cb-dynamic-field';
import TagifyField from './fields/cb-field-tagify';
import SliderField from './fields/cb-field-slider';
import ColorsDropdownField from './fields/cb-field-tagify-colors';
import ColorPickerField from './fields/cb-field-color';
import CustomBooleanField from './fields/cb-field-boolean';

import '../styles/main.css';


const OnChangeHandler = ({ onChange }) => {
    const { values } = useFormikContext();
    useEffect(() => {
      if (onChange) {
        onChange(values);
      }
    }, [values, onChange]);
    return null;
};
  

const FormComponent = ({ allowAddForms = true, formSchema, initialValues, onFormSubmit, onFormChange }) => {
  
    const onlyOne = formSchema.properties.dynamicForms.onlyOne;
    const [dynamicForms, setDynamicForms] = useState(initialValues.dynamicForms);

    const addForm = () => {
      if (!onlyOne || dynamicForms.length === 0) {
        setDynamicForms([...dynamicForms]);
      }
    };
  
    const removeForm = (index) => {
      setDynamicForms(dynamicForms.filter((_, i) => i !== index));
    };
  
    return (
      <div className="relative">
        <Formik
          initialValues={{ ...initialValues, dynamicForms }}
          onSubmit={(values, { setSubmitting }) => {
            onFormSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ values }) => (
            
            <Form>
              <OnChangeHandler onChange={onFormChange} />
  
              {/* Normal Entries */}
              {Object.entries(formSchema.properties).map(([key, value]) => (
                key !== 'dynamicForms' && (
                  <div key={key} className="px-6 mb-4 no-select">
                    <label htmlFor={key} className="text-sm">{value.title}</label>
                    <Field name={key} defaultValue="">
                      {({ field, form }) => {
                        const Component = value.format === 'color' ? ColorPickerField :
                          value.format === 'tagify' ? TagifyField :
                          value.format === 'colorsDropdown' ? ColorsDropdownField :
                          value.format === 'slider' ? SliderField :
                          value.format === 'customBoolean' ? CustomBooleanField :
                          undefined;
                        return Component ? (
                          <Component field={field} form={form} options={value.enum} title={value.title} singleValue={value.maxtags} />
                        ) : (
                          <input
                            {...field}
                            type="text"
                            className={`${value.options.inputAttributes.class} mt-3`}
                          />
                        );
                      }}
                    </Field>
                  </div>
                )
              ))}
  
              {/* Dynamic Entries */}
              {dynamicForms.map((form, index) => (
                <DynamicForm
                  key={index}
                  index={index}
                  removeForm={removeForm}
                  addForm={addForm}
                  isLastForm={index === dynamicForms.length - 1}
                  allowAddForms={allowAddForms}
                  formSchema={formSchema}
                  onlyOne={onlyOne}
                />
              ))}
            </Form>
          )}
        </Formik>
      </div>
    );
};


export default FormComponent;
  
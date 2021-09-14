import React from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';


const FormikControl = ({ control, ...props }) => {

   switch
   (control) {

       case 'input': return <InputField {...props} />;
       case 'textarea': return <TextareaField {...props} />;
           default: return null;
   }
};

export default FormikControl;
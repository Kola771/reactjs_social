import React from "react";
import FormComponent from "../Components/FormComponent";
const FormPage = () => {
    return (
        <div className='flex flex-col gap-y-2 px-2'>
            <h2 className='text-[14px] font-medium mt-2'>Mon formulaire</h2>
            <FormComponent />
        </div>
    );
};

export default FormPage;
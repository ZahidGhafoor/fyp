import React from 'react'
import { fields } from ".";

import FiltersForm from 'components/templates/FiltersForm';

export default function CarrierManagementFilter() {
    const handleSubmit = (values: any) => {};

    return <FiltersForm onSubmit={handleSubmit} myFields={fields} />;
}


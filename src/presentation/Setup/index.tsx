import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import useController from '@controller/useController';
import SetupController from '@controller/setup/SetupController';

const Setup = () => {
    const navigate = useNavigate();
    const { setTestData } = useController(SetupController);

    const formik = useFormik({
        initialValues: {
            questionCount: 0,
        },
        onSubmit: (values) => {
            setTestData({ questionCount: values.questionCount });
            navigate('/test-marker');
        },
    });

    return (
        <div className="setup-container">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="questionCount">Question count</label>
                    <InputNumber
                        inputId="questionCount"
                        mode="decimal"
                        min={0}
                        max={500}
                        value={formik.values.questionCount}
                        onBlur={formik.handleBlur}
                        onChange={(e) => formik.setFieldValue('questionCount', e.value)}
                    />
                </div>
                <Button type="submit" icon="pi pi-check" label="Start test" />
            </form>
        </div>
    );
};

export default Setup;

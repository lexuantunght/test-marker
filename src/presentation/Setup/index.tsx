import React from 'react';
import { ObjectID } from 'bson';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { useFormik } from 'formik';
import useController from '@controller/useController';
import SetupController from '@controller/setup/SetupController';

const Setup = () => {
    const [showAddModal, setShowAddModal] = React.useState(false);
    const { addTestStructure, useGetState } = useController(SetupController);
    const testStructures = useGetState((state) => state.setup.testStructures);

    const formik = useFormik({
        initialValues: {
            name: '',
            questionCount: 0,
        },
        onSubmit: async (values) => {
            await addTestStructure({
                _id: new ObjectID().toString(),
                ...values,
            });
            setShowAddModal(false);
        },
    });

    const onCancelAdd = () => {
        setShowAddModal(false);
        formik.resetForm();
    };

    return (
        <div className="setup-container">
            <div className="setup-title">Test structure list</div>
            <div className="setup-buttons">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Search..." />
                </span>
                <Button
                    icon="pi pi-plus"
                    label="Add structure"
                    onClick={() => setShowAddModal(true)}
                />
            </div>
            <DataTable value={testStructures} responsiveLayout="scroll">
                <Column header="#" body={(rowData, { rowIndex }) => rowIndex + 1} />
                <Column field="_id" header="ID" />
                <Column field="name" header="Name" />
                <Column field="questionCount" header="Question Count" />
            </DataTable>
            <Dialog
                header="Add structure"
                visible={showAddModal}
                onHide={() => setShowAddModal(false)}
                resizable={false}
            >
                <form onSubmit={formik.handleSubmit}>
                    <div className="add-structure-field">
                        <label htmlFor="name">Name</label>
                        <InputText
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="add-structure-field">
                        <label htmlFor="questionCount">Question count</label>
                        <InputNumber
                            inputId="questionCount"
                            mode="decimal"
                            min={0}
                            max={500}
                            value={formik.values.questionCount}
                            onChange={(e) => formik.setFieldValue('questionCount', e.value)}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="add-structure-buttons">
                        <Button
                            className="p-button-secondary p-button-text cancel-add-structure"
                            icon="pi pi-times"
                            label="Cancel"
                            type="button"
                            onClick={onCancelAdd}
                        />
                        <Button type="submit" icon="pi pi-check" label="Save" />
                    </div>
                </form>
            </Dialog>
        </div>
    );
};

export default Setup;

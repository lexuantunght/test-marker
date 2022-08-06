import React from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import useController from '@controller/useController';
import MarkerController from '@controller/marker/MarkerController';
import { useFormik } from 'formik';
import { TestStructure } from '@domain/model/TestStructure';

const Home = () => {
    const { useGetState, selectTestStructure, setAnswers } = useController(MarkerController);
    const testStructures = useGetState((state) => state.setup.testStructures);
    const selectedTestStructure = useGetState((state) => state.marker.selectedTestStructure);
    const answers = useGetState((state) => state.marker.answers);

    const onCheckAnswer = (key: string, index: number) => {
        const tempAns = [...answers];
        tempAns[index] = key;
        setAnswers(tempAns);
    };

    const formik = useFormik<{ structure?: TestStructure }>({
        initialValues: {
            structure: undefined,
        },
        onSubmit: (values) => {
            if (values.structure) {
                selectTestStructure(values.structure);
            }
        },
    });

    return (
        <div className="home-container">
            {selectedTestStructure ? (
                <div>
                    {Array(selectedTestStructure.questionCount)
                        .fill(0)
                        .map((v, index) => (
                            <div key={index} className="marker-question">
                                <div>Question {index + 1}</div>
                                {['A', 'B', 'C', 'D'].map((lbl, idx) => (
                                    <div key={lbl + idx} className="marker-radio-group">
                                        <RadioButton
                                            inputId={lbl + index}
                                            name={'Q' + index}
                                            value={lbl}
                                            checked={answers[index] === lbl}
                                            onChange={(e) => onCheckAnswer(e.value, index)}
                                        />
                                        <label htmlFor={lbl + index}>{lbl}</label>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            ) : (
                <form onSubmit={formik.handleSubmit}>
                    <div className="select-structure-field">
                        <label htmlFor="structure">Select test structure</label>
                        <Dropdown
                            options={testStructures}
                            optionLabel="name"
                            inputId="structure"
                            name="structure"
                            className="structure-dropdown"
                            placeholder="Select a structure"
                            value={formik.values.structure}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <Button type="submit" icon="pi pi-pencil" label="Start test" />
                </form>
            )}
        </div>
    );
};

export default Home;

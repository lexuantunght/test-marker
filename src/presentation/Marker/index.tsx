import React from 'react';
import { RadioButton } from 'primereact/radiobutton';
import MarkerController from '@controller/marker/MarkerController';
import useController from '@controller/useController';

const Marker = () => {
    const { setAnswers, useGetState } = useController(MarkerController);
    const questionCount = useGetState((state) => state.setup.questionCount) || 32;
    const answers = useGetState((state) => state.marker.answers);

    const onCheckAnswer = (key: string, index: number) => {
        const tempAns = [...answers];
        tempAns[index] = key;
        setAnswers(tempAns);
    };

    if (!questionCount) {
        return <div>haha</div>;
    }

    return (
        <div>
            {Array(questionCount)
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
    );
};

export default Marker;

import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";

const textState = atom({
    key: 'textState',
    default: '',
});

function CharacterCounter() {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    );
}
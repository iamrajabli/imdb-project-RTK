import { useRef } from "react"

const useFormValidator = () => {
    const inputsRef = useRef([]);

    const formValidation = (input) => {
        if (input.value === '') {
            builderInputStatus(true, input)
        } else {
            builderInputStatus(false, input)
        }
    }

    const builderInputStatus = (status, input) => {
        if (status) { // error
            input.classList.remove('successBorder')
            input.classList.add('errorBorder')
        } else { // success
            input.classList.add('successBorder')
            input.classList.remove('errorBorder')
        }

        return status
    }

    const emptyValidate = (inputsRef) => {
        let status = false;

        for (let input of inputsRef.current) {
            if (input.value == '') {
                status = builderInputStatus(true, input);
            }
        }

        return status;
    }

    return { formValidation, emptyValidate, inputsRef }
}

export default useFormValidator;
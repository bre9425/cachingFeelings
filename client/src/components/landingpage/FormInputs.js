import React from 'react';
import Basics from "./Basics"
import Algorithm from "./Algorithm"
import About from "./About"
// import Images from "./Images"
import ImageUploadComponent from './imageUploader';
import useSignUpContext from "../../hooks/useSignUpContext"
import './LandingPage'

const FormInputs = () => {

    const { page } = useSignUpContext()

    const display = {
        0: <Basics />,
        // 1: <Algorithm />,
        1: <About />,
        2: <ImageUploadComponent />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs
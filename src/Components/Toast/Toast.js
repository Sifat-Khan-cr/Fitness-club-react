import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
    const notify = () => toast("Congratulation");

    return (
        <div>
            <button className="btn btn-primary w-6/12 my-10" onClick={notify}>Start Now</button>
            <ToastContainer />
        </div>
    );
}
export default Toast;

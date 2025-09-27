import './Form.css';

function Form() {
   const openpopUp = (e) => {
    e.preventDefault();

    const form = document.getElementById('studentForm');

    if (form.checkValidity()) {
        const modal = document.getElementById('popUp');
        if (modal) {
            modal.style.display = 'block'; // Show the modal
        }

        setTimeout(() => {
            if (modal) {
                modal.style.display = 'none'; // Hide after 3 seconds
            }
        }, 3000);

        form.reset(); // Reset form after successful submission
    } else {
        // Show validation message
        form.reportValidity(); // triggers native browser validation popup
    }
};


    const closepopUp = () => {
    const modal = document.getElementById('popUp');
    if (modal) {
        modal.style.display='none'
    }


    }
    return (
        <>
        <form id='studentForm' action='#'>
            <div className="title">Registration</div>
            <hr />

            {/* Personal or Business */}
            <div className='form_group header'>
                <div className='section1st'>
                    <input type="radio" id="personal" name="accountType" required />
                    <label htmlFor="personal">Personal</label>
                </div>
                <div className='section2nd'>
                    <input type="radio" id="business" name="accountType" required />
                    <label htmlFor="business">Business</label>
                </div>
            </div>
            <hr />

            {/* Email */}
            <div className='form_group'>
                <i className="fa-solid fa-envelope"></i>
                <input type="email" required placeholder='Email' />
            </div>

            {/* Name */}
            <div className='form_group'>
                <i className="fa-solid fa-user"></i>
                <input type="text" required placeholder='Name' />
            </div>

            {/* Password */}
            <div className='form_group'>
                <i className="fa-solid fa-shield-halved"></i>
                <input type="password" required placeholder='Password' />
            </div>

            {/* Gender */}
            <div className='form_group header'>
                <div className='section1st'>
                    <input type="radio" id="male" name="gender" required />
                    <label htmlFor="male">Male</label>
                </div>
                <div className='section2nd'>
                    <input type="radio" id="female" name="gender" required />
                    <label htmlFor="female">Female</label>
                </div>
            </div>

            {/* Terms & Submit */}
            <div className='content'>
                <p>
                    By clicking on Sign up, you agree to our 
                    <a href="/"> Terms of Service</a> and 
                    <a href="/"> Privacy Policy</a>.
                </p>
                <button type='submit' onClick={openpopUp}>Register</button>
            </div>
        </form>


        <div className='model' id='popUp'>
            <div className='modelContent'>
                <span className='close' onClick={closepopUp}>&times;</span>
                <h2>Registration Successful!</h2>
                <p>Your details have been submitted.</p>
            </div>
        </div>

        </>

    );
}

export default Form;

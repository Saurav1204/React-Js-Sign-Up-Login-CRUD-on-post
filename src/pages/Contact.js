import React from 'react'

export default function Contact() {
    return (
        <div className='faq'>
            <h3> ha bhidu contact karna hai to form to bharna padega </h3>

            <form>
                <label><span>email :</span>
                <input type='email' name='emial' required/>
                </label>
                <label><span>message :</span>
                <input name='message' required/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

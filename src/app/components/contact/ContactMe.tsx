import React from 'react'
import Gradient from '../elements/Gradient'

const ContactMe = () => {
    return (
        <section
            id="contact"
            className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center relative scroll-mt-20"
        >
                  <Gradient/>
            <p className="font-titleFont text-lg text-gray-700 font-semibold flex items-center tracking-wide">
                04. What’s Next?
            </p>
            <h2 className="font-titleFont text-5xl font-semibold text-textGreen">Get In Touch</h2>
            <p className="max-w-[600px] text-center text-black">
                Although I’m not currently looking for any new opportunities, my inbox
                is always open. Whether you have a question or just want to say hi, I’ll
                try my best to get back to you!
            </p>

            <a href="mailto:vr7roshni@gmail.com">
                <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:border-black hover:text-black   duration-300">
                    Say Hello
                </button>
            </a>
        </section>
    )
}

export default ContactMe
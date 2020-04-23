import React from 'react';
import { useForm } from 'react-hook-form';
import AOS from "aos";
import "aos/dist/aos.css";


function FormikForm(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);


    const handleMove = (e) => {
        update(e);

    }


    const handleEnter = (e) => {
        update(e)
    }
    const handleLeave = (e) => {
        e.target.style = "";
    }

    let timer = 0;
    const update = (event) => {
        if (timer < 5) return timer++;
        const rect = event.target.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top
        const width = rect.width;
        const height = rect.height;
        const centerX = width / 2;
        const centerY = height / 2;

        const xTrans = (x - centerX) * 0.1;
        const yTrans = (y - centerY) * 0.1;


        event.target.style.transform = ` translateX(${xTrans}px) translateY(${yTrans}px) scale(1.05)`;

        timer = 0;
    }

    AOS.init();
    return (
        <div className='contact__content' data-aos="fade-left" data-aos-once="true" data-aos-duration="800" data-aos-delay="200">
            <div className="contact__content-image" onMouseMove={handleMove} onMouseEnter={handleEnter} onMouseLeave={handleLeave}></div>
            <form action="" className="contact__content-form" onSubmit={handleSubmit(onSubmit)}>

                <input
                    ref={register}
                    type="text"
                    name="name"
                    id="name"
                    placeholder={props.content.name}
                />

                <input
                    ref={register}
                    type="email"
                    name="email"
                    id="email"
                    placeholder={props.content.mail}
                />

                <textarea
                    ref={register}
                    type="text"
                    name="message"
                    id="message"
                    placeholder={props.content.message}

                />
                <button type="submit">{props.content.button} <i className="icon-right" /></button>
            </form>

        </div>
    );
}

export default FormikForm;
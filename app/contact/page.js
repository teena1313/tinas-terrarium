"use client";

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Container from '../components/Container';
import { FilledButton } from '../components/Buttons';

export default function Page(){
    const form = useRef();
    console.log(process.env);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
                form.current, 
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY,
                },
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Container>
            <div className="max-w-sm border border-primary-200 rounded px-4 pb-4 pt-6 bg-amber-200">
                <h4 className="font-medium">Contact Me</h4>
                <form ref={form} onSubmit={sendEmail}>
                <ul className="font-mono text-sm">
                    <li><label>Name</label></li>
                    <li><input className="text-black bg-secondary-100 px-2 py-0.5" type="text" name="user_name" /></li>
                    <li><label>Email</label></li>
                    <li><input className="text-black bg-secondary-100 px-2 py-0.5" type="email" name="user_email" /></li>
                    <li><label>Message</label></li>
                    <li><textarea className="text-black bg-secondary-100 px-2 py-0.5" name="message" /></li>
                    <li><FilledButton><input className="text-black" type="submit" value="Send" /></FilledButton></li>
                </ul>
                </form>
            </div>
        </Container>

    );

};
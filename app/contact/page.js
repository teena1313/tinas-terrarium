import emailjs from '@emailjs/browser';

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
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className="text-black" type="text" name="user_name" />
            <label>Email</label>
            <input className="text-black" type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input className="text-black" type="submit" value="Send" />
        </form>
    );
};
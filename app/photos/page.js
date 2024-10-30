import Image from "next/image";
export default function Page() {
    return (
        <>
            <Image
                src="/mountain.jpg"
                width={500}
                alt="Picture of the author"
            />
            <p>photos :D</p>
        </>
    )
}
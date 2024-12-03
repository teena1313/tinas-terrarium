import Image from "next/image";

export default function Page() {
    return (
        <>
            <Image
                src="/mountain.jpg"
                width={500}
                height={500}
                alt="Picture of a mountain"
            />
            <p>photos :D</p>
        </>
    )
}

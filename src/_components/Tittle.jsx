export default function Tittle(props) {
    return (

        <p className={`px-8 py-6 max-w-lg text-3xl font-semibold leading-relaxed text-gray-800 ${props.className}`}>{props.label}</p>
    )
}

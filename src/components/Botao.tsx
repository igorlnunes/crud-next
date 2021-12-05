interface BotaoProps {
    c0r?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props) {
    const cor = props.cor ?? 'gray'

    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 mb-4 rounded-md p-4
            ${props.children}
        `}>
            {props.children}
        </button>
    )
}
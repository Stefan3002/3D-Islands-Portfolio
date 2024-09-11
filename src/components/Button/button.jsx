import './button.css'
const Button = ({callback, text, customClass, type='button'}) => {
    if(type === 'button')
        return (
            <button onClick={callback} className={`button ${customClass}`}>
                {text}
            </button>
        )
    else
        if(type === 'anchor')
            return (
                <a href={callback} className={`button ${customClass}`}>
                    {text}
                </a>
            )
}
export default Button
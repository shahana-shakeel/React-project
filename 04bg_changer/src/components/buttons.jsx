function Button(props){
    const getUpdatedColor=()=>[
        props.getColor(props.color)
    ]
    return(
        <>
        <div onClick={getUpdatedColor}style={{height:40, width:120, border:'2px solid black', gap: '4px', backgroundColor: props.color, color: "black"}}>{props.color}</div>
        </>
    )
}

export default Button
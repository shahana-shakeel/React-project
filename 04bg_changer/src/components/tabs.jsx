import Button from "./buttons"

const btnArr = [{id: 0, color: 'Red'},
    {id: 1, color: 'Blue'},
    {id: 2, color: 'Green'},
    {id: 3, color: 'Purple'},
    {id: 4, color: 'White'}
]

function Tabs (props){
btnArr.map(btn=><Button style={btn}/>)
    return(
        <>
        <div>This is tab</div>
        <div style={{display: 'flex', flexDirection: "row"}}>
        {btnArr.map(btn=><Button key={btn.id} color={btn.color} getColor={props.getColor}/>)}
        </div>
        </>
    )
}

export default Tabs
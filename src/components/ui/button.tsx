import React from "react"
type BUTTON={
    text:string
    click:()=>void
}
export function Button({text,click}:BUTTON):React.JSX.Element
{
    return (<button onClick={click}>{text}</button>)
}
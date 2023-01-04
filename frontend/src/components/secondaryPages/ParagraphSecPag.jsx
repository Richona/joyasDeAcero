import React from 'react'
import "./ParagraphSecPag.css"

export default function ParagraphSecPag(props) {
  return (
    <p className='paragraphSecPag'>
        {props.paragraph}
        {props.b && <b>{props.b}</b>}
        {props.link && <b><a href={props.link}>{props.a}</a></b>}
        {props.small && <small className='paragraphSecPag'><br />{props.small}</small>}
    </p>
  )
}

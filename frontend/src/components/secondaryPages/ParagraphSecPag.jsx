import React from 'react'
import "./ParagraphSecPag.css"

export default function ParagraphSecPag(props) {
  return (
    <p className='paragraphSecPag'>
        {props.paragraph}
        {props.b && <b>{props.b}</b>}
    </p>
  )
}

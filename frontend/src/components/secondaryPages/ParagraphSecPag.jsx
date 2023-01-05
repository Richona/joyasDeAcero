import React from 'react'
import "./ParagraphSecPag.css"

import { Link } from 'react-router-dom';

export default function ParagraphSecPag(props) {
  return (
    <p className='paragraphSecPag'>
        {props.paragraph}
        {props.b && <b>{props.b}</b>}
        {props.link && <b><Link to={props.link}>{props.a}</Link></b>}
        {props.small && <small className='paragraphSecPag'><br />{props.small}</small>}
    </p>
  )
}

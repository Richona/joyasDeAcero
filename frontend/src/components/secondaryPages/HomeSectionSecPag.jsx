import React from 'react'
import "./HomeSectionSecPag.css"

export default function HomeSectionSecPag(props) {
    return (
        <div className="HomeSectionSecPag_container">
            <ul className="HomeSectionSecPag_ul">
                <li className="HomeSectionSecPag_li">
                    <a href="/" >
                        <i className="fa-solid fa-house HomeSectionSecPag_home"></i>
                    </a>
                </li>
                <li>
                    <i className="fa-solid fa-angle-right HomeSectionSecPag_anchor"></i>
                </li>
                <li className="HomeSectionSecPag_li">
                    <strong className='HomeSectionSecPag_title'>{props.title}</strong>
                </li>
                {props.subTitle &&
                    <>
                        <li>
                            <i className="fa-solid fa-angle-right HomeSectionSecPag_anchor"></i>
                        </li>
                        <li className="HomeSectionSecPag_li">
                            <strong className='HomeSectionSecPag_title'>{props.subTitle}</strong>
                        </li>
                    </>
                }
                {props.article &&
                    <>
                        <li>
                            <i className="fa-solid fa-angle-right HomeSectionSecPag_anchor"></i>
                        </li>
                        <li className="HomeSectionSecPag_li">
                            <strong className='HomeSectionSecPag_title'>{props.article}</strong>
                        </li>
                    </>
                }
            </ul>
        </div>
    )
}

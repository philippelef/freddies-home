/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'

const Twitter = (props) => {
    return (
        <Link href="https://twitter.com/freddies_mafia" passHref>
            <a target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    fill={props.color}
                    viewBox="4 6 24 20"
                >
                    <path d="M28 8.559a9.813 9.813 0 0 1-2.828.773 4.94 4.94 0 0 0 2.164-2.723 9.92 9.92 0 0 1-3.125 1.196 4.924 4.924 0 0 0-8.52 3.367c0 .387.043.762.13 1.121A13.957 13.957 0 0 1 5.67 7.148a4.885 4.885 0 0 0-.667 2.477c0 1.707.867 3.215 2.191 4.098a4.895 4.895 0 0 1-2.23-.618v.063a4.922 4.922 0 0 0 3.95 4.828 4.902 4.902 0 0 1-2.224.086 4.932 4.932 0 0 0 4.598 3.422A9.875 9.875 0 0 1 4 23.539a13.924 13.924 0 0 0 7.547 2.215c9.058 0 14.012-7.504 14.012-14.012 0-.21-.008-.426-.016-.637A10.085 10.085 0 0 0 28 8.56Z" />
                </svg>
            </a>
        </Link >
    )
}

export default Twitter
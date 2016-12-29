import React from 'react'
import Head from 'next/head'
import 'glamor/reset'
import css from 'next/css'

const API_HOST = process.env.API_HOST

css.global('html', {backgroundColor: '#EBF6EF', height: '100%'})
css.global('html, body, #__next, .layout', {height: '100%'})


export default (props) => (
  <div className="layout">
    <Head>
      <title>RANDOM VIDEO</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/*
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Julius+Sans+One" rel="stylesheet"/>
        <link rel="stylesheet" href="/static/global.css"/>
      */}
    </Head>
    {props.children}
    <script dangerouslySetInnerHTML={{ __html: `window.env = ${JSON.stringify({ API_HOST })}` }}/>
  </div>
)

import React from 'react'
import InternalCss from '../../components/InternalCss/InternalCss'
import InlineCss from '../../components/InlineCss/InlineCss'
import ExternalCss from '../../components/ExternalCss/ExternalCss'

function Home() {
  return (
    <div style={{display : 'flex', flexWrap : 'wrap', justifyContent : 'center' , alignItems : 'space-evenly'}}>
      <InternalCss/>
      <InlineCss/>
      <ExternalCss/>
    </div>
  )
}

export default Home

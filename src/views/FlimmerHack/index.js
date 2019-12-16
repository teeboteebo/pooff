import React, { useEffect, useState } from 'react'
import { Spinner, Container } from 'reactstrap'
import MissingPage from '../MissingPage'


/**
 * I feel no shame.
 */ 

const Flimmerhack = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const load = async () => {
      setTimeout(function(){setLoaded(true)}, 3000)
    }

    load()
    //comment below removes varning to include or exclude idToGet
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (loaded) {
    return <MissingPage />
  } else {
    return <Container style={{textAlign: 'center'}}><Spinner /></Container>
  }
}

export default Flimmerhack
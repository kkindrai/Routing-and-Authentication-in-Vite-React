/* src/Content.jsx */
import React from 'react'
import Container from './Container.jsx'

function Content() {
    return (
        <Container>
            <h1>Content Route</h1>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/LGPL7Iru4KY?si=J88kYEStZ_YO3lAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Container>
    )
}

export default Content
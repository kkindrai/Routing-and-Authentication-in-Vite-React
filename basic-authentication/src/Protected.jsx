/* src/Protected.jsx */
// import React, { useEffect } from 'react'; // won't be used
// import { Auth } from 'aws-amplify' // Literally doesn't work like this anymore

import { withAuthenticator } from '@aws-amplify/ui-react' // Auth we use now!
import Container from './Container.jsx'

function Protected(props) {
    console.log('You have made ti to a protected page', props)

    return (
        <Container>
            <h1>Protected Route</h1>
        </Container>
    );
}

export default withAuthenticator(Protected)
import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function ReactBS() {
    const [Show, setShow] = useState(true)
    if (Show) {
        return (
            <div>
                <Alert variant='danger' onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>
                        This is Alert Heading
                    </Alert.Heading>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque natus illo harum labore? Excepturi odit assumenda quisquam eum amet odio.</p>
                    <Alert.Link>
                        Click To Open This Link
                    </Alert.Link>
                </Alert>
            </div>
        )
    }
}

export default ReactBS


// import React from 'react'
// import { Alert, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// function ReactBS() {
//   return (
//     <div>
//     <Alert variant='danger'>
//     <Alert.Heading>
//         This is Alert Heading
//     </Alert.Heading>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque natus illo harum labore? Excepturi odit assumenda quisquam eum amet odio.</p>
//     <Alert.Link>
//         Click To Open This Link
//     </Alert.Link>
//     </Alert>

//     {/* <Button href='https://www.google.com' variant='danger'>Submit</Button> */}

//     {/* <Button variant='danger'>Submit</Button>
//     <Button variant='danger' active>Submit</Button>
//     <Button variant='danger' disabled>Submit</Button> */}

//     {/* <Button variant='danger' size='lg'>Submit</Button>
//     <Button variant='danger'>Submit</Button>
//     <Button variant='danger' size='sm'>Submit</Button> */}

//     {/* <Button>Submit</Button>
//     <Button variant='danger'>Submit</Button>
//     <Button variant='dark'>Submit</Button>
//     <Button variant='success'>Submit</Button>
//     <Button variant='warning'>Submit</Button>
//     <Button variant='secondary'>Submit</Button> */}

//     </div>
//   )
// }

// export default ReactBS
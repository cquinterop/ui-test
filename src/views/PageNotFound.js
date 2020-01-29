import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

function PageNotFound() {
    const history = useHistory();
    return (
        <>
            Error 404, page not found
            <Button onClick={() => history.goBack()}>
                Go Back
        </Button>
        </>
    )
}

export default PageNotFound;

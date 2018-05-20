import React from 'react';
require("dotenv").config();
;
class JustComments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="just-comments" data-allowguests="true" data-apikey="ba86acdd-19b0-438c-b73f-47a92e9ed41c" />
    }
}

export default JustComments;
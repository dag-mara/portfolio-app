import React, {useEffect, useState} from 'react';

function ScrollChild(props) {
    return (
        <div style={{backgroundColor: '#1569C7', color: '#ffffff', width: 500, marginTop: 300, padding: 20}}>
            THIS IS A DUMMY TEXT
            <h1>How to dynamically render an element after scrolling to a certain position in a page?</h1>

            I would like my "emailForm" component to render on my Navbar after user scrolled to beginning of
            "laundry section", does someone know how to do that?
        </div>
    );
}

export default ScrollChild;
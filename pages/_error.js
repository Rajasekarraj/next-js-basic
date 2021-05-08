import React from 'react';
import Link from 'next/link';

const errorPage = () => {
    return(
        <div>
            <h1>Error Page</h1>
            <p>Go to <Link href="/"><a>Home Page</a></Link></p>
        </div>
    )
}

export default errorPage;
import React from 'react';

function ErrorHandling()
{
    const name=["Jeevika","Harini","Priti","Soundhariya"];
    const namelist=name.map((n,i)=><li key={i}>{n}</li>)
    return (
        <div>
            <ul>{namelist}</ul>
        </div>
    );
}

export default ErrorHandling;
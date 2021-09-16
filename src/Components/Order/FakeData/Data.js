import React, { useState } from 'react';
import fakeData from './FakeDate';

const Data = () => {
    const [data, setData] = useState(fakeData)
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Data;
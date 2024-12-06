import React from 'react';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'


const UnderConstruction = () => {
    return (
        <div className="flex items-center justify-center h-[700px] w-full">
            <div className="text-center">
                <WrenchScrewdriverIcon className="h-14 w-14 text-gray-400 mx-auto" />
                <div className="mt-2">
                    <p>Hold up, folks! we’ll be back in action soon!</p>
                </div>
            </div>
        </div>

    );
};

export default UnderConstruction;
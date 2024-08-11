// Removed unnecessary React import

import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const ButtonConnect = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        // Simulate an async operation
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="flex flex-row justify-center items-center gap-4 p-2.5 w-[235px] h-[40px] bg-[#CA5C3B] rounded-full text-white font-medium text-[16px]"
                >
            <button
                onClick={handleClick}
                disabled={loading}
            >
                {loading && <LoadingOutlined className="mr-3" />}
                Connect your X account
            </button>
        </div>
    );
};

import { useEffect, useState } from 'react';
export const usePositionLabel = (navigator, positionsArray) => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [totalPositions, setTotalPositions] = useState(0);
    // Update total positions when positions array changes
    useEffect(() => {
        if (positionsArray && positionsArray.length > 0) {
            setTotalPositions(positionsArray.length);
        }
    }, [positionsArray]);
    // Listen to navigator position changes
    useEffect(() => {
        if (!navigator)
            return;
        // Get initial position if available
        const initialPosition = navigator.currentLocation?.locations
            ?.position;
        if (initialPosition) {
            setCurrentPosition(initialPosition);
        }
        // Note: The positionChanged listener is already set up in useNavigator
        // We'll need to expose position updates through a callback
    }, [navigator]);
    // Generate label text
    const label = currentPosition && totalPositions > 0
        ? `${currentPosition} / ${totalPositions}`
        : null;
    return {
        currentPosition,
        totalPositions,
        label,
    };
};

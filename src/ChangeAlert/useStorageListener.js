import React from "react";

function useStorageListener(sync) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
        if (change.key === "TODOS_V1") {
            console.log("hubo cambios en TODOS_V1")
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sync();
        setStorageChange(false);
    }

    return {
        show: storageChange, 
        toggleShow,
}
        
};

export { useStorageListener }
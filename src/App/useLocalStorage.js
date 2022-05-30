import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
    const { loading,
        error,
        item,
        syncItem 
    } = state;

    // ACTION CREATORS
    const onError = (item) => dispatch({ type: actionTypes.error, payload: item });
    const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
    const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
    const onSync = () => dispatch({ type: actionTypes.sync});

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                onSuccess(parsedItem);
            } catch (error) {
                onError(error);
            }
        }, 1000)
    }, [syncItem]);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            onSave(newItem)
        } catch (error) {
            onError(error);
        }

    }

    const sync = () => {
        onSync();
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sync
    }
}

const initialState = ({initialValue}) => ({
    syncItem: true,
    error: false,
    loading: true,
    item: initialValue
})

const actionTypes = {
    error: "ERROR",
    success: "SUCCESS",
    save: "SAVE",
    sync: "SYNC"
}

const reducerObj = (state,payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true
    },
    [actionTypes.success]: {
        ...state,
        error: false,
        loading: false,
        syncItem: true,
        item: payload
    },
    [actionTypes.save]: {
        ...state,
        item: payload
    },
    [actionTypes.sync]: {
        ...state,
        syncItem: false,
        loading: true
    }
})

const reducer = (state, action) => {
    return reducerObj(state,action.payload)[action.type] || state;
}

export {useLocalStorage}
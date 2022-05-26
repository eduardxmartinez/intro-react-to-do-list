import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({sync}) {
    const {show, toggleShow} = useStorageListener(sync);
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Se han hecho cambios en otra pestañao o ventana</p>
                    <p>¿Quieres sincronizar los cambios?</p>
                    <button
                    className="TodoForm-button TodoForm-button--add"
                    onClick={toggleShow}
                    >
                        YES!
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export {ChangeAlert};
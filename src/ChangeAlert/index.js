import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({show, toggleShow}) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export {ChangeAlertWithStorageListener};
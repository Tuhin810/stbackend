import React from "react";

export interface LoginForms {
    handleChangeEmail: (event:React.ChangeEvent<HTMLInputElement>)=>void,
    handleChangePassword: (event:React.ChangeEvent<HTMLInputElement>)=>void,
}
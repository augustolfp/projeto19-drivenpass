import { NextFunction, Request, Response } from "express";

export default function errorHandlerMW(err: Error | any, req: Request, res: Response, next: NextFunction) {

    function errorTypeToStatusCode(errorType: string) {
        if(errorType === "error_email_already_used") return 403;
        if(errorType === "error_user_not_found") return 404;
        if(errorType === "error_wrong_password") return 401;
        if(errorType === "error_duplicated_title") return 403;
        if(errorType === "Error_credential_is_not_from_user") return 401;
        if(errorType === "Error_note_is_not_from_user") return 401;

        return 400;
    }

    if(err.type) {
        return res.status(errorTypeToStatusCode(err.type)).send(err.message);
    }

    return res.sendStatus(500);
}
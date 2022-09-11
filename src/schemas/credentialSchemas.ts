import Joi from "joi";

export const onlineCredentialSchema = Joi.object({
    title: Joi.string().required(),
    URL: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});
import Joi from "joi";

export const onlineCredentialSchema = Joi.object({
    title: Joi.string().required(),
    URL: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});

export const wifiCredentialSchema = Joi.object({
    title: Joi.string().required(),
    wifiName: Joi.string().required(),
    password: Joi.string().required()
});

export const cardCredentialSchema = Joi.object({
    title: Joi.string().required(),
    cardName: Joi.string().required(),
    expirationDate: Joi.string().required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid('Debit', 'Credit', 'Debit_and_Credit').required(),
    cardNumber: Joi.string().required(),
    CVV: Joi.string().required(),
    password: Joi.string().required()
});

export const safeNoteSchema = Joi.object({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
});
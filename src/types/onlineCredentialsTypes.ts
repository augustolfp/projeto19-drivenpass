import { OnlineCredentials } from "@prisma/client";

export type IOnlineCredentialData = Omit<OnlineCredentials, 'id'>;
export type ICreationOnlineCredentialData = Omit<OnlineCredentials, 'id' | 'userId'>;
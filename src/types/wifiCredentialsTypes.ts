import { WifiCredentials } from "@prisma/client";

export type IWifiCredentialData = Omit<WifiCredentials, 'id'>;
export type ICreationWifiCredentialData = Omit<WifiCredentials, 'id' | 'userId'>;
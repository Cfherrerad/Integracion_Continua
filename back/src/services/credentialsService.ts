import ICredential from "../interfaces/ICredential"

const credentialsDB: ICredential[] = [];
let credentialId : number = 1;

export const createCredentialService = async (username: string, password: string): Promise <ICredential["id"]> => {
    const newCredentials: ICredential = {
        id: credentialId ++,
        username,
        password,
    };
    credentialsDB.push(newCredentials);
    return newCredentials.id;
};


export const validateCredentialService = async (username: string, password: string): Promise <ICredential["id"]> => {
    const foundCredential: ICredential | undefined = credentialsDB.find((credential) => credential.username == username);

    if (!foundCredential) {
        throw new Error("No existe el username");
    } if(foundCredential.password != password) {
        throw new Error("Contraseña incorrecta");
    }

    return foundCredential.id;
};
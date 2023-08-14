import * as jose from 'jose';

async function signJWT(obj, secret) {
    const token = await new jose.SignJWT(obj)
        .setProtectedHeader({alg: 'HS256'})
        .sign(new TextEncoder().encode(secret));

    return token;
}


export default signJWT;
export interface IJwt {
    secret: string,
    options:IJwtOptions
}
export interface IJwtOptions{
    issuer:  string,
    subject:  string,
    audience:  string,
    expiresIn:  string,
    algorithm:  any   // RSASSA [ "RS256", "RS384", "RS512" ]
}
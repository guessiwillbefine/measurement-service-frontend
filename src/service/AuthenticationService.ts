/**
 *  marks class as Authentication service class.
 *  Can be used for authentication, registration and logging out
 **/

export interface AuthenticationService {

  authenticate(username: string, password: string): void;

  logout(): void;
}

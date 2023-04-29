import {Injectable} from "@angular/core";

/**
 * Class wrapper for storing JWT token in local browser storage
 */
@Injectable()
export class JwtService {

  private readonly TOKEN_KEY = 'token';

  public saveToken(token: string): void {
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }

  public isTokenPresent(): boolean {
    return window.localStorage.getItem(this.TOKEN_KEY) != null;
  }

  public getToken(): string | null {
    return  window.localStorage.getItem(this.TOKEN_KEY);
  }

  public deleteToken(): void {
    window.localStorage.removeItem(this.TOKEN_KEY);
  }
}

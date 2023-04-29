import config from '../../appConfig.json';

export class UrlConstants {
  public static readonly HOST = config.server.host;
  public static readonly PORT = config.server.port;
  public static readonly ADDRESS = `http://${this.HOST}:${this.PORT}`;
  public static readonly AUTHENTICATION = class AuthenticationConstants {
    public static readonly AUTHENTICATION = `${UrlConstants.ADDRESS}/auth/_login`;
    public static readonly REGISTRATION = `${UrlConstants.ADDRESS}/auth/register`;
  }
  public static readonly USER = class UserConstants {
    public static readonly CURRENT_USER = `${UrlConstants.ADDRESS}/users/account`;
  }
}

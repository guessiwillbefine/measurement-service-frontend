import config from '../../appConfig.json';

export class UrlConstants {
  public static readonly HOST = config.server.host;
  public static readonly PORT = config.server.port;
  public static readonly ADDRESS = `https://${this.HOST}:${this.PORT}`;
  public static readonly AUTHENTICATION = class AuthenticationConstants {
    public static readonly AUTHENTICATION = `${UrlConstants.ADDRESS}/auth/_login`;
    public static readonly REGISTRATION = `${UrlConstants.ADDRESS}/auth/register`;
  }
  public static readonly USER = class UserConstants {
    public static readonly CURRENT_USER = `${UrlConstants.ADDRESS}/users/account`;
    public static readonly EDIT = function (id: number) { return`${UrlConstants.ADDRESS}/users/${id}` };
  }

  public static readonly FACTORY = class FactoryConstants {
    public static readonly FACTORY_BY_ID = function (id: number) {
      return `${UrlConstants.ADDRESS}/factories/${id}`;
    }
  }

  public static readonly MACHINE = class {
    public static readonly MACHINE_BY_ID = function (id: string) {
      return `${UrlConstants.ADDRESS}/machines/${id}`
    }
    public static readonly EDIT = function (id: number) { return`${UrlConstants.ADDRESS}/users/${id}` };
  }
}

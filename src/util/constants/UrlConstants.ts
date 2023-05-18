import config from '../../appConfig.json';

export class UrlConstants {

  public static readonly REST_HOST = config.server.rest.host;
  public static readonly REST_PORT = config.server.rest.port;
  public static readonly REST_PROTOCOL = config.server.rest.protocol;
  public static readonly ADDRESS = `${this.REST_PROTOCOL}://${this.REST_HOST}:${this.REST_PORT}`;

  public static readonly SOCKET_HOST = config.server.websocket.host;
  public static readonly SOCKET_PORT = config.server.websocket.port;
  public static readonly SOCKET_PROTOCOL = config.server.websocket.protocol;
  public static readonly SOCKET_ADDRESS = `${this.SOCKET_PROTOCOL}://${this.SOCKET_HOST}:${this.SOCKET_PORT}`;

  public static readonly AUTHENTICATION = class AuthenticationConstants {
    public static readonly AUTHENTICATION = `${UrlConstants.ADDRESS}/auth/_login`;
    public static readonly REGISTRATION = `${UrlConstants.ADDRESS}/auth/register`;
  }
  public static readonly USER = class UserConstants {
    public static readonly CURRENT_USER = `${UrlConstants.ADDRESS}/users/account`;
    public static readonly EDIT = function (id: number) { return`${UrlConstants.ADDRESS}/users/${id}` };
  }

  public static readonly FACTORY = class FactoryConstants {
    public static readonly ALL_FACTORIES = `${UrlConstants.ADDRESS}/factories/search`;

    public static readonly FACTORY_BY_ID = function (id: number) {
      return `${UrlConstants.ADDRESS}/factories/${id}`;
    }
  }

  public static readonly MACHINE = class {
    public static readonly MACHINE_BY_ID = function (id: string) {
      return `${UrlConstants.ADDRESS}/machines/${id}`
    }
    public static readonly ADD_MACHINE = `${UrlConstants.ADDRESS}/machines`;
  }

  public static readonly SENSOR = class {
    public static readonly SENSOR_BY_ID = function (id: string) {
      return `${UrlConstants.ADDRESS}/sensors/${id}`
    }
    public static readonly ADD_SENSOR = `${UrlConstants.ADDRESS}/sensors/create`
  }
  public static readonly SOCKET = class {
    public static readonly CONNECTION_URL = `${UrlConstants.SOCKET_ADDRESS}/ws`;
    public static readonly DESTINATION = (id: string) => { return `/app/message/${id}` };
    public static readonly MEASURE_QUEUE = (id: string) => { return `/user/${id}/queue/messages` };
  };
}

import {Injectable} from "@angular/core";
import {RxStomp} from "@stomp/rx-stomp";
import {UrlConstants} from "../../util/constants/UrlConstants";

@Injectable({
  providedIn: 'root',
})
export class WebSocketService extends RxStomp {
  constructor() {
    super();
  }
}

export function rxStompServiceFactory() {
  const rxStomp = new WebSocketService();
  rxStomp.activate();
  rxStomp.configure({
    brokerURL: UrlConstants.SOCKET.CONNECTION_URL});
  return rxStomp;
}

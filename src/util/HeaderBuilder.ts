import {ContentType} from "./constants/ContentType";
import {HttpHeaders} from "@angular/common/http";

export class HeaderBuilder {
  header: HttpHeaders = new HttpHeaders();

  private constructor() {
  }

  public static builder(): HeaderBuilder {
    return new HeaderBuilder();
  }

  public contentType(type: ContentType): HeaderBuilder {
    this.header.set('content-type', type)
    return this;
  }

  public authorization(token: string | null): HeaderBuilder {
    this.header.set('Authorization', `Bearer ${token}`)
    return this;
  }

  public build(): HttpHeaders {
    return this.header;
  }
}

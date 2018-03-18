import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Serializer } from './serializer';
import { Resource, QueryOptions } from '../models/domain';

export abstract class SubResourceService<T extends Resource> {

  protected headers = new HttpHeaders()
    .set('Requires-Authorization', 'true')
    .set('Versioned', 'true');

  constructor(
    protected httpClient: HttpClient,
    protected url: string,
    protected parentEndpoint: string,
    protected endpoint: string,
    protected serializer: Serializer) {  }

  public create(item: T): Observable<T> {
  return this.httpClient
    .post<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}`,
      this.serializer.fromJson(item),
      { headers: this.headers })
    .map((data: any) => this.serializer.fromJson(data) as T);
  }

  public update(item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}/${item.id}`,
      this.serializer.toJson(item),
      { headers: this.headers })
      .map((data: any) => this.serializer.fromJson(data) as T);
  }

  read(parentId: number, id: number): Observable<T> {
    return this.httpClient.get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`,
      { headers: this.headers })
    .map((data: any) => this.serializer.fromJson(data) as T);
  }

  list(parentId: number, queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient.get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}?${queryOptions.toQueryString()}`,
      { headers: this.headers })
      .map((data: any) => this.convertData(data.items));
  }

  delete(parentId: number, id: number) {
    return this.httpClient.delete(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`,
      { headers: this.headers });
  }

  protected convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }
}

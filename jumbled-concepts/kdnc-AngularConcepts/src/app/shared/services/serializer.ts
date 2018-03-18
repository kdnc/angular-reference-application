import { Resource } from '../models/domain/resource';

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}

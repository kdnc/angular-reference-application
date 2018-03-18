import * as moment from 'moment';
import { Resource } from '../resource';

export class Product extends Resource {
  public createdOn: moment.Moment;
  public createdBy: number;
  public assignee: number;
  public name: string;

  constructor() {
    super();
    this.name = '';
  }
}

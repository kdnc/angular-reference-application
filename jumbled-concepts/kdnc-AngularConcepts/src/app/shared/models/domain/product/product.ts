import * as moment from 'moment';
import { Resource } from '../resource';

export class Product extends Resource {
  public createdOn: moment.Moment;
  public createdBy: number;
  public assignee: number;
  public Title: string;

  constructor() {
    super();
    this.Title = '';
  }
}

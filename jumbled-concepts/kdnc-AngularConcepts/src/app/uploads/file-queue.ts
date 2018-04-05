import { Injectable } from '@angular/core';

/*
 * Queue data structure definition.
 */
@Injectable()
export class FileQueue<T> {
  private holder: T[] = [];

  /**
   * Enqueue items to the queue.
   * @param {T} value - Item to be enqueued.
   */
  push(value: T) {
    this.holder.push(value);
  }

  /**
   * Dequeue items to the queue.
   * @returns {T} value - Dequeued item.
   */
  pop(): T | undefined {
    return this.holder.shift();
  }

  /**
   * Returns the queue size.
   * @returns {number} queue size.
   */
  count(): number {
    return this.holder.length;
  }

  /**
   * Remove item from queue.
   * @param {T} item - Item to be removed.
   */
  remove(item: T): void {
    const index = this.holder.indexOf(item);
    if (index !== -1) {
      this.holder.splice(index, 1);
    }
  }
}

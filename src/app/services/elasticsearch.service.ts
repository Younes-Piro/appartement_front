import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch';
import * as elasticsearch from 'elasticsearch';

@Injectable({
  providedIn: 'root',
})
export class ElasticsearchService {
  public client?: elasticsearch.Client;
  constructor() {
    if (!this.client) {
      this.connect();
    }
  }
  public connect() {
    console.log(this.client);
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace',
    });
  }

  isAvailable(): any {
    return this.client?.ping({
      requestTimeout: Infinity,
      body: 'hello grokonez!',
    });
  }

  fullTextSearch(
    _index: string,
    _type: string,
    _field: string,
    _queryText: string
  ): any {
    return this.client?.search({
      index: _index,
      type: _type,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        query: {
          match_phrase_prefix: {
            [_field]: _queryText,
          },
        },
      },
      // response for each document with only 'fullname' and 'address' fields
      _source: ['title', 'price'],
    });
  }
}

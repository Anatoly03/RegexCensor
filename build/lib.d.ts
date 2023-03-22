/* tslint:disable */
/* eslint-disable */
/**
* @param {string} s
* @returns {string}
*/
export function latinize(s: string): string;
/**
* @param {string} s
* @returns {string}
*/
export function universalize(s: string): string;
/**
*/
export class Filter {
  free(): void;
/**
* @param {string} content
* @returns {string}
*/
  replace(content: string): string;
/**
* @param {string} content
* @returns {boolean}
*/
  check(content: string): boolean;
/**
* @param {Array<any>} prompts
* @returns {boolean}
*/
  check_many(prompts: Array<any>): boolean;
/**
* @param {string} rgx
* @returns {boolean}
*/
  add(rgx: string): boolean;
/**
* @param {Array<any>} rgxs
* @returns {boolean}
*/
  add_many(rgxs: Array<any>): boolean;
/**
* @param {string} word
* @returns {boolean}
*/
  add_word(word: string): boolean;
/**
* @param {Array<any>} words
* @returns {boolean}
*/
  add_many_words(words: Array<any>): boolean;
/**
*/
  constructor();
/**
* @returns {any}
*/
  patterns(): any;
/**
* @param {string} content
* @returns {any}
*/
  find(content: string): any;
/**
* @param {string} content
* @returns {any}
*/
  find_patterns(content: string): any;
}

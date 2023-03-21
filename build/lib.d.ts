/* tslint:disable */
/* eslint-disable */
/**
* @param {string} s
* @returns {string}
*/
export function universalize(s: string): string;
/**
* @param {string} s
* @returns {string}
*/
export function latinize(s: string): string;
/**
*/
export class Filter {
  free(): void;
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
/**
*/
  constructor();
/**
* @returns {any}
*/
  patterns(): any;
/**
* @param {string} rgx
* @returns {boolean}
*/
  add(rgx: string): boolean;
/**
* @param {string} word
* @returns {boolean}
*/
  add_word(word: string): boolean;
/**
* @param {string} content
* @returns {boolean}
*/
  check(content: string): boolean;
/**
* @param {string} content
* @returns {string}
*/
  replace(content: string): string;
}

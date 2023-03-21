use js_sys::Array;
use wasm_bindgen::prelude::*;
use super::filter::Filter;

#[wasm_bindgen]
impl Filter {
    pub fn add(&mut self, rgx: String) -> bool {
        todo!();

        true
    }
}

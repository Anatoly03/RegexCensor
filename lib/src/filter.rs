use js_sys::Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Filter {
    patterns: Vec<String>,
}

#[wasm_bindgen]
impl Filter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self { patterns: vec![] }
    }

    pub fn patterns(&self) -> JsValue {
        JsValue::from(
            self.patterns.clone()
                .into_iter()
                .map(|x| JsValue::from_str(&x))
                .collect::<Array>(),
        )
    }
}

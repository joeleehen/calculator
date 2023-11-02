extern crate lee_alg;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[wasm_bindgen]
pub fn parser(cmd_str: &str) -> Result<JsValue, JsValue> {
    // take in command string passed from js
    // output string representation of result
    let result = js_sys::eval(cmd_str);

    match result {
        Ok(val) => Ok(val),
        Err(err) => Err(err),
    }
}

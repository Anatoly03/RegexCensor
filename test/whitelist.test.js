import Filter from "../src/index.js";
import assert from "assert";
import test from "node:test";

const filter = Filter().add_all_presets()

test("Negatives (Escapes)", async function (t) {
    await t.test("should be not triggered by `Nigeria`", async function (t) {
        console.log(filter.find_patterns("Nigeria"))
        assert.strictEqual(filter.check("Nigeria"), false);
    });

    await t.test("should be not triggered by `Fukushima`", async function (t) {
        assert.strictEqual(filter.check("Fukushima"), false);
    });

    await t.test("should be not triggered by `analysis`", async function (t) {
        assert.strictEqual(filter.check("analysis"), false);
    });
});

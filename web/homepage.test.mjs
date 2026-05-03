import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");

test("renders the transplanted knowledge-commerce brand and hero", () => {
  for (const text of [
    "知付岛 AI 学院",
    "别让你的经验",
    "卡在不会卖课上",
    "课程爆改对比",
    "普通人把经验做成可售卖课程",
  ]) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("includes the knowledge-commerce conversion sections", () => {
  for (const id of [
    "how-it-works",
    "features",
    "tool-demo",
    "case-study",
    "course-syllabus",
    "pricing",
    "about",
  ]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }

  for (const text of [
    "做知识付费，最怕有本事但卖不出去",
    "这一次，把课程的“成交系统”搭起来",
    "看着爽？等你亲手做出第一套课，才叫真的爽！",
    "这一套课，省掉你摸索3年的弯路",
    "丰俭由人，选择最适合你的起步方式",
  ]) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("keeps the source design language while removing the old industry", () => {
  for (const marker of [
    "SmileySans-Oblique",
    "@keyframes fadeInUp",
    "@keyframes pulseRing",
    "@keyframes floatPreview",
    "data-reveal",
    "IntersectionObserver",
    "course-dashboard",
    "case-before",
    "case-after",
  ]) {
    assert.match(html, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const oldText of ["BeginToGo", "外贸", "老破小", "SOHO", "独立站", "建站神器", "B2B 网站"]) {
    assert.doesNotMatch(html, new RegExp(oldText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("keeps responsive behavior and comparison interaction", () => {
  assert.match(html, /type="range"/);
  assert.match(html, /@media\s*\(max-width:\s*760px\)/);
  assert.match(html, /aria-label="课程改造对比滑块"/);
});

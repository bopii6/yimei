import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");

const includes = (text) => {
  assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
};

const excludes = (text) => {
  assert.doesNotMatch(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
};

test("renders the GEO premium course brand and conversion hero", () => {
  for (const text of [
    "知付岛 GEO 学院",
    "别让你的课程，",
    "卡在 AI 搜索之外",
    "GEO 精优课",
    "让你的知识付费产品被 AI 搜到、讲清、推荐",
  ]) {
    includes(text);
  }
});

test("frames GEO as the knowledge-commerce growth system", () => {
  for (const text of [
    "做知识付费，下一轮流量入口叫 GEO",
    "把你的课程，铺进 AI 会引用的答案系统",
    "不是多发内容，而是让 AI 懂你、信你、推荐你",
    "从 0 到 1 搭建 GEO 获客闭环",
    "这门精优课，承载的是课程成交责任",
  ]) {
    includes(text);
  }
});

test("keeps the conversion sections and interaction model", () => {
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
    "type=\"range\"",
    "aria-label=\"GEO 可见度改造对比滑块\"",
  ]) {
    includes(marker);
  }
});

test("removes the old generic course and unrelated industries", () => {
  for (const oldText of [
    "BeginToGo",
    "外贸",
    "老破小",
    "SOHO",
    "独立站",
    "建站神器",
    "B2B 网站",
    "普通人知识产品孵化课",
    "把经验打包成一门能成交的课",
    "我的多年经验分享课",
  ]) {
    excludes(oldText);
  }
});

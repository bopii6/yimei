# 知付岛 AI 学院网站复刻设计

## Goal

Build a single-page static marketing site that mirrors the structure and interaction rhythm of `starglowai.com`, while using an original brand, original copy, and original visual assets for a knowledge-payment/course-selling platform.

The site should feel like a high-fidelity structural remake, not a direct content copy. It should preserve the target site's core layout pattern: top navigation, left conversion column, central symbolic visual, right founder/ecosystem column, and responsive mobile stacking.

## Brand Direction

Brand name: 知付岛 AI 学院

Positioning: 普通人用 AI 打造可售卖知识产品的第一站。

Core promise: 把经验变课程，把技能变收入。

Tone: decisive, modern, entrepreneurial, Chinese knowledge-commerce native. The site should be compact and conversion-focused rather than like a broad SaaS landing page.

## Page Architecture

The page is implemented as a static HTML page in `web/index.html` with embedded CSS and minimal JavaScript only if needed for small interactions.

Main sections:

1. Header
   - Left: original planet-like brand mark and `知付岛 AI 学院`.
   - Right: `课程与定价` menu label and primary CTA `加入学习社群`.

2. Left Column
   - Section label: `AI 课程变现岛`.
   - H1: `普通人用 AI 做出第一门可售卖课程`.
   - Metrics:
     - `300+` 实战模板
     - `每周` 选题拆解
     - `48` 个交付清单
     - `每日` AI 工作流更新
   - Primary CTA: `看看学什么 ->`.
   - Supporting note: `免费试听 · 无需注册`.
   - Learning direction grid:
     - `AI 课程定位`
     - `AI 课件生产`
     - `AI 销售页搭建`
     - `AI 私域转化`

3. Central Visual
   - A large CSS-created particle/star-ring sphere, not downloaded from the target site.
   - Center text:
     - `把经验变课程`
     - `把技能变收入`
   - The visual should dominate the first viewport on desktop and remain visible, smaller, on mobile.

4. Right Column
   - Section label: `导师介绍`.
   - Two original mentor entries:
     - `林川 · 主理人`: 课程产品设计 | 私域转化 | 知识 IP 孵化
     - `Mira · 主理人`: AI 自动化交付 | 内容系统 | 学员运营
   - Use original abstract portrait panels or CSS image blocks, not copied portraits.

5. Bottom Left Conversion Block
   - Section label: `课程定位测评`.
   - Heading: `找到你的知识变现方向`.
   - Subcopy: `3 分钟定位你的第一门可售卖课程`.
   - CTA: `免费测评`.
   - Proof line: `已有 1,200+ 人完成测评，并获得课程定位报告 + 工具清单`.

6. Bottom Right Ecosystem Block
   - Section label: `知付岛合伙人生态`.
   - Heading: `从学习者到共创者，只差一步`.
   - Subcopy: `参与课程共创，让知识产品卖得更稳`.
   - Two cards:
     - `推荐官`: 推荐学员，赚课程佣金
     - `共创课程`: 写经验，拿分成

## Visual Design

Use the target site's structural language, but with distinct original execution:

- Background: energetic orange/amber field with subtle noise and radial lighting.
- Text: near-black for primary contrast; muted brown for supporting text.
- Buttons: dark charcoal primary CTA with white text; secondary cards use transparent orange borders.
- Logo: CSS-built circular mark with a small orbit line.
- Avoid using target site's logo, avatars, image URLs, exact copy, or proprietary assets.
- Keep the page dense and editorial rather than card-heavy.
- Use 8px or smaller radius on repeated cards/buttons unless the existing local CSS pattern requires otherwise.

## Responsive Behavior

Desktop:

- Full-screen composition with three main columns.
- Left column fixed-width content cluster.
- Central visual sits behind or between columns and scales with viewport.
- Right column aligns with mentor and ecosystem content.

Mobile:

- Header condenses with CTA visible.
- Content stacks in this order: hero copy, CTA/metrics, central sphere, learning directions, mentors, assessment, partner ecosystem.
- No horizontal overflow.
- Font sizes use clamp/min-max values, not viewport-width-only scaling.

## Links

Use local anchors rather than external target-site routes:

- `#curriculum` for learning directions.
- `#assessment` for free assessment.
- `#partners` for partner ecosystem.
- `#join` for joining the learning group.

## Testing

After implementation:

- Serve the `web/` directory locally with a static server.
- Verify desktop layout at about 1440x900.
- Verify mobile layout at about 390x844.
- Check that no text overlaps and no horizontal overflow appears.
- Confirm the page uses only local/original assets or CSS-generated visuals.

## Out Of Scope

- Payment flow.
- Real registration/login.
- Multi-page routing.
- Copying target site's original brand, exact text, avatars, or logo.

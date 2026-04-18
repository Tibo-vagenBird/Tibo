/* ===========================================
   Bo Ti — Portfolio Scripts
   i18n, signal canvas, grid bg, scroll reveal,
   active nav, terminal animation
   =========================================== */

// ---- i18n ----
// Cycle: en → mn → zh → en
var currentLang = "en";
var en = {};

// Traditional Mongolian (Mongolian bichig).
// Short UI labels have been carefully composed; longer prose is
// a best-effort technical Mongolian and should be reviewed by a
// native speaker before production use.
var mn = {
    nav_about:            "ᠮᠢᠨᠦ ᠲᠤᠬᠠᠢ",
    nav_projects:         "ᠲᠥᠰᠥᠯ",
    nav_skills:           "ᠴᠢᠳᠠᠪᠤᠷᠢ",
    nav_experience:       "ᠲᠤᠷᠰᠢᠯᠭ᠎ᠠ",
    nav_contact:          "ᠬᠠᠷᠢᠯᠴᠠᠭ᠎ᠠ",
    scroll_hint:          "ᠭᠦᠯᠭᠡᠬᠦ",
    about_title:          "ᠮᠢᠨᠦ ᠲᠤᠬᠠᠢ",
    about_p1:             "ᠤᠪᠴᠢ ᠶᠡᠬᠡ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠢᠨᠵᠧᠨᠧᠷᠢᠩ ᠤᠨ ᠬᠤᠶᠠᠳᠤᠭᠠᠷ ᠵᠢᠯ ᠤᠨ ᠣᠶᠤᠲᠠᠨ᠃ ᠳᠠᠷᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠫᠷᠣᠭ᠋ᠷᠠᠮ᠂ ᠹᠢᠷᠮᠸᠡᠷ ᠪᠣᠯᠣᠨ ᠪᠣᠳᠠᠲᠤ ᠴᠠᠭ ᠤᠨ ᠰᠢᠰᠲ᠋ᠧᠮ ᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠃ Assembly ᠪᠣᠯᠣᠨ C/C++ ᠢᠶᠠᠷ ᠳᠣᠣᠷᠠᠲᠤ ᠲᠦᠪᠰᠢᠨ ᠤ ᠫᠷᠣᠭ᠋ᠷᠠᠮᠴᠢᠯᠠᠯ᠂ Python ᠢᠶᠠᠷ ᠠᠦ᠋ᠲ᠋ᠣᠮᠠᠲ᠋ᠵᠢᠭᠤᠯᠤᠯᠲᠠ᠃",
    about_p2:             "ᠳᠠᠷᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠫᠷᠣᠭ᠋ᠷᠠᠮ᠂ ᠹᠢᠷᠮᠸᠡᠷ ᠪᠣᠯᠣᠨ ᠬᠢᠨᠠᠯᠲᠠ ᠶᠢᠨ ᠰᠢᠰᠲ᠋ᠧᠮ ᠢ ᠪᠢᠴᠢᠬᠦ᠃ Python ᠤ ᠲᠤᠷᠰᠢᠯᠭ᠎ᠠ ᠨᠢ ᠳᠠᠮᠵᠢᠭᠤᠯᠬᠤ ᠺᠣᠳ᠋ ᠪᠠ ᠠᠦ᠋ᠲ᠋ᠣᠮᠠᠲ᠋ᠵᠢᠭᠤᠯᠤᠯᠲᠠ ᠳᠤ ᠭᠣᠣᠯᠳᠠᠨ᠎ᠠ᠃",
    back_to_projects:     "ᠲᠥᠰᠥᠯ ᠳᠤ ᠪᠤᠴᠠᠬᠤ",
    projects_title:       "ᠲᠥᠰᠥᠯ ᠦᠳ",
    project_label_featured: "ᠲᠡᠷᠢᠭᠦᠨ ᠲᠥᠰᠥᠯ",
    project1_name:        "8052 ᠬᠠᠶᠢᠯᠤᠭᠤᠯᠬᠤ ᠬᠢᠨᠠᠭᠴᠢ",
    project1_summary:     "DE10-Lite FPGA ᠳᠡᠭᠡᠷ᠎ᠡ 8052 ᠵᠢᠭᠠᠪᠤᠷᠢᠯᠠᠯ ᠢᠶᠠᠷ ᠪᠦᠬᠦᠯᠢ ᠪᠡᠷ ᠪᠢᠴᠢᠭᠰᠡᠨ ᠬᠠᠶᠢᠯᠤᠭᠤᠯᠬᠤ ᠬᠢᠨᠠᠭᠴᠢ᠃ ᠪᠢᠲ᠋ ᠬᠠᠶᠢᠭ᠋ᠯᠠᠭᠳᠠᠬᠤ ᠰᠠᠨᠠᠭᠠᠨ ᠤ ᠰᠢᠭᠨᠠᠯ ᠤᠨ ᠱᠦᠭᠦᠮ ᠪᠦᠬᠦᠢ pub-sub ᠪᠦᠲᠦᠴᠡ ᠲᠡᠢ᠂ 7 ᠱᠠᠲᠤᠲᠤ FSM ᠪᠦᠲᠦᠴᠡ᠃",
    project3_name:        "La Voiture — ᠲᠠᠯᠠᠪᠠᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠯᠳᠡ ᠪᠠ ᠠᠯᠤᠰ ᠬᠢᠨᠠᠯᠲᠠ",
    project3_summary:     "STM32L051 ᠲᠡᠷᠭᠡ᠂ EFM8LB12 ᠭᠠᠷ ᠤᠨ ᠬᠢᠨᠠᠭᠴᠢ᠂ PyQt5 ᠫᠠᠨᠧᠯ — ᠭᠤᠷᠪᠠᠨ ᠭᠣᠣᠯ ᠬᠡᠯᠪᠡᠷᠢ᠃ IR ᠫᠷᠣᠲ᠋ᠣᠺᠣᠯ ᠢ 5 ᠤᠳᠠᠭ᠎ᠠ ᠲᠡᠶᠢᠯᠪᠦᠷᠢᠯᠡᠵᠦ 27 fps ᠪᠦᠲᠦᠮᠵᠢ᠃ 6 ᠬᠥᠮᠦᠨ ᠤ ᠪᠠᠭ᠃",
    project2_name:        "Ulysses ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠢᠨᠠᠯᠲᠠ ᠶᠢᠨ ᠰᠲ᠋ᠠᠨᠼ",
    project2_summary:     "UBC Rocket ᠤ Ulysses ᠷᠠᠺᠧᠲ᠋ ᠤᠨ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠢᠨᠠᠯᠲᠠ ᠶᠢᠨ ᠰᠲ᠋ᠠᠨᠼ ᠤᠨ C++ ᠠᠷᠤ ᠲᠠᠯ᠎ᠠ᠃ Qt 6/QML ᠳᠡᠭᠡᠷ᠎ᠡ SerialBridge ᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠵᠦ᠂ COBS ᠪᠠ protobuf ᠢᠶᠠᠷ RFD900x ᠷᠠᠳᠢᠣ᠋ ᠬᠠᠷᠢᠯᠴᠠᠭ᠎ᠠ (10Hz)᠃",
    skills_title:         "ᠴᠢᠳᠠᠪᠤᠷᠢ",
    skills_my:            "ᠮᠢᠨᠦ",
    skills_node_title:    "ᠴᠢᠳᠠᠪᠤᠷᠢ",
    experience_title:     "ᠲᠤᠷᠰᠢᠯᠭ᠎ᠠ",
    exp1_role:            "ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠢᠨᠠᠯᠲᠠ ᠫᠷᠣᠭ᠋ᠷᠠᠮ ᠤᠨ ᠢᠨᠵᠧᠨᠧᠷ",
    exp1_period:          "2025 — ᠡᠳᠦᠭᠡ",
    exp1_desc:            "Qt Quick (C++/QML) ᠢᠶᠠᠷ Ulysses ᠤ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠢᠨᠠᠯᠲᠠ ᠶᠢᠨ ᠰᠲ᠋ᠠᠨᠼ ᠢ ᠪᠦᠲᠦᠭᠡᠵᠦ ᠪᠠᠶᠢᠨ᠎ᠠ᠃ C++ ᠤ ᠠᠷᠤ ᠲᠠᠯ᠎ᠠ᠂ ᠷᠠᠳᠢᠣ᠋ ᠮᠣᠳᠧᠮ ᠤᠨ ᠵᠠᠯᠭᠠᠯᠲᠠ᠂ ᠳᠣᠬᠢᠶᠠᠯ ᠮᠡᠳᠡᠭᠳᠡᠯ ᠪᠣᠯᠣᠨ ᠲᠣᠬᠢᠷᠠᠭᠤᠯᠤᠯᠲᠠ ᠤ ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠭ᠎ᠠ᠃",
    contact_title:        "ᠬᠠᠷᠢᠯᠴᠠᠭ᠎ᠠ",
    contact_text:         "ᠰᠢᠨ᠎ᠡ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠪᠠ ᠰᠣᠨᠢᠷᠬᠠᠯᠲᠠᠢ ᠲᠥᠰᠥᠯ ᠳᠤ ᠦᠷᠭᠦᠯᠵᠢ ᠨᠡᠭᠡᠭᠡᠯᠲᠡᠢ ᠪᠠᠶᠢᠳᠠᠭ᠃ ᠨᠠᠮᠠᠢᠢ ᠬᠠᠷᠢᠯᠴᠠᠭᠠᠷᠠᠢ᠃",
    footer_text:          "© 2026 ᠪᠣ ᠲᠢ᠃"
};

var zh = {
    nav_about: "\u5173\u4e8e\u6211",
    nav_projects: "\u9879\u76ee",
    nav_skills: "\u6280\u80fd",
    nav_experience: "\u7ecf\u5386",
    nav_contact: "\u8054\u7cfb",
    hero_greeting: "\u4f60\u597d\uff0c\u6211\u662f",
    hero_subtitle: "\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5f00\u53d1\u8005",
    hero_bio: "UBC \u7535\u6c14\u5de5\u7a0b\u5927\u4e8c\u5b66\u751f\uff0c\u4e13\u6ce8\u4e8e\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5f00\u53d1\u2014\u2014\u9a71\u52a8\u7a0b\u5e8f\u3001\u56fa\u4ef6\u548c\u5b9e\u65f6\u7cfb\u7edf\u3002\u719f\u7ec3\u638c\u63e1 Assembly \u548c C/C++ \u4f4e\u5c42\u7f16\u7a0b\uff0c\u5e76\u5177\u5907 Python \u811a\u672c\u4e0e\u81ea\u52a8\u5316\u5de5\u5177\u5f00\u53d1\u7ecf\u9a8c\u3002",
    hero_btn_work: "\u67e5\u770b\u6211\u7684\u4f5c\u54c1",
    scroll_hint: "\u5411\u4e0b\u6eda\u52a8",
    about_title: "\u5173\u4e8e\u6211",
    about_p1: "UBC \u7535\u6c14\u5de5\u7a0b\u5927\u4e8c\u5b66\u751f\uff0c\u4e13\u6ce8\u4e8e\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5f00\u53d1\u2014\u2014\u9a71\u52a8\u7a0b\u5e8f\u3001\u56fa\u4ef6\u548c\u5b9e\u65f6\u7cfb\u7edf\u3002\u719f\u7ec3\u638c\u63e1 Assembly \u548c C/C++ \u4f4e\u5c42\u7f16\u7a0b\uff0c\u5e76\u5177\u5907 Python \u811a\u672c\u4e0e\u81ea\u52a8\u5316\u5de5\u5177\u5f00\u53d1\u7ecf\u9a8c\u3002",
    about_p2: "\u6211\u4e13\u6ce8\u4e8e\u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5f00\u53d1\u2014\u2014\u7f16\u5199\u9a71\u52a8\u7a0b\u5e8f\u3001\u56fa\u4ef6\u548c\u5b9e\u65f6\u63a7\u5236\u7cfb\u7edf\u3002\u6211\u7684 Python \u7ecf\u9a8c\u4e3b\u8981\u5728\u811a\u672c\u548c\u81ea\u52a8\u5316\u5de5\u5177\u65b9\u9762\uff0c\u4f5c\u4e3a\u5e95\u5c42\u7cfb\u7edf\u5f00\u53d1\u7684\u8865\u5145\u3002",
    back_to_projects: "\u8fd4\u56de\u9879\u76ee",
    projects_title: "\u9879\u76ee",
    project_label_featured: "\u7cbe\u9009\u9879\u76ee",
    project1_name: "8052 \u56de\u6d41\u7089\u63a7\u5236\u5668",
    project1_summary: "\u4e00\u4e2a\u5b8c\u5168\u7528 8052 \u6c47\u7f16\u8bed\u8a00\u7f16\u5199\u7684\u56de\u6d41\u7118\u63a5\u63a7\u5236\u5668\uff0c\u8fd0\u884c\u5728 DE10-Lite FPGA \u5e73\u53f0\u4e0a\u3002\u6211\u8bbe\u8ba1\u4e86\u57fa\u4e8e\u4f4d\u5bfb\u5740\u5185\u5b58\u4fe1\u53f7\u603b\u7ebf\u7684\u53d1\u5e03-\u8ba2\u9605\u67b6\u6784\uff0c\u7f16\u5199\u4e86\u6240\u6709\u6838\u5fc3\u72b6\u6001\u673a\uff0c\u5305\u62ec 7 \u9636\u6bb5\u56de\u6d41\u63a7\u5236\u6d41\u7a0b\u3002",
    project3_name: "La Voiture \u2014 \u5faa\u8ff9\u4e0e\u9065\u63a7\u673a\u5668\u4eba",
    project3_summary: "\u4e09\u6a21\u5f0f\u673a\u5668\u4eba\u5c0f\u8f66\uff08\u5faa\u8ff9\u3001\u6447\u6746\u9065\u63a7\u3001\u81ea\u4e3b\u822a\u70b9\u5bfc\u822a\uff09\uff0cSTM32L051 \u5c0f\u8f66 + EFM8LB12 \u624b\u6301\u9065\u63a7\u5668 + PyQt5 PC \u7aef\u4eea\u8868\u76d8\u3002\u7ecf 5 \u8f6e\u8fed\u4ee3\u8bbe\u8ba1\u81ea\u5b9a\u4e49\u53cc\u5411\u7ea2\u5916\u901a\u4fe1\u534f\u8bae\uff0c\u5b9e\u73b0 27fps \u541e\u5410\u91cf\u3002\u5e26\u9886 6 \u4eba\u56e2\u961f\u3002",
    project2_name: "Ulysses \u5730\u9762\u63a7\u5236\u7ad9",
    project2_summary: "\u72ec\u7acb\u7f16\u5199 UBC Rocket \u7684 Ulysses \u63a2\u7a7a\u706b\u7bad\u5730\u9762\u63a7\u5236\u7ad9\u5168\u90e8 C++ \u540e\u7aef\uff08\u57fa\u4e8e Qt 6 / QML\uff09\u3002\u5f00\u53d1 SerialBridge \u53cc\u4e32\u53e3 RFD900x \u65e0\u7ebf\u7535\u901a\u4fe1\uff0cCOBS \u5e27\u5c01\u88c5 + protobuf \u9065\u6d4b\u89e3\u7801\uff0810Hz\uff09\u3002",
    skills_title: "\u6280\u80fd",
    skills_my: "\u6211\u7684",
    skills_node_title: "\u6280\u80fd",
    skill_cat_lang: "\u7f16\u7a0b\u8bed\u8a00",
    skill_cat_embedded: "\u5d4c\u5165\u5f0f\u4e0e\u786c\u4ef6",
    skill_items_embedded: "\u72b6\u6001\u673a\u8bbe\u8ba1,PWM \u63a7\u5236,UART/\u4e32\u53e3\u901a\u4fe1,\u53d1\u5e03-\u8ba2\u9605\u67b6\u6784,\u534f\u4f5c\u5f0f\u591a\u4efb\u52a1,\u5b9a\u65f6\u5668/\u4e2d\u65ad\u914d\u7f6e",
    skill_cat_frameworks: "\u6846\u67b6\u4e0e\u5e93",
    skill_cat_scripting: "\u811a\u672c\u4e0e\u81ea\u52a8\u5316",
    skill_cat_tools: "\u8f6f\u4ef6\u4e0e\u5de5\u5177",
    skill_cat_cad: "CAD / \u8bbe\u8ba1",
    skill_cat_lab: "\u5b9e\u9a8c\u5ba4\u8bbe\u5907",
    skill_items_lab: "\u903b\u8f91\u5206\u6790\u4eea,\u4e07\u7528\u8868,\u793a\u6ce2\u5668,\u4fe1\u53f7\u53d1\u751f\u5668",
    experience_title: "\u7ecf\u5386",
    exp1_role: "\u5730\u9762\u63a7\u5236\u8f6f\u4ef6\u5de5\u7a0b\u5e08 \u2014 \u5d4c\u5165\u5f0f\u63a5\u53e3",
    exp1_period: "2025 \u5e74 - \u81f3\u4eca",
    exp1_desc: "\u4f7f\u7528 Qt Quick (C++/QML) \u4e3a Ulysses \u6784\u5efa\u5730\u9762\u63a7\u5236\u7ad9\u3002\u8d1f\u8d23 C++ \u540e\u7aef\u3001\u65e0\u7ebf\u7535\u8c03\u5236\u89e3\u8c03\u5668\u63a5\u53e3\u3001\u544a\u8b66\u5904\u7406\u3001\u53c2\u6570\u8bbe\u7f6e\u548c\u8bbe\u7f6e\u9875\u9762 UI\u3002",
    contact_title: "\u8054\u7cfb\u6211",
    contact_text: "\u6211\u59cb\u7ec8\u5bf9\u65b0\u7684\u673a\u4f1a\u548c\u6709\u8da3\u7684\u9879\u76ee\u4fdd\u6301\u5f00\u653e\u3002\u6b22\u8fce\u968f\u65f6\u8054\u7cfb\u6211\uff01",
    footer_text: "\u00a9 2026 \u501c\u535a\u3002",

    /* ── La Voiture project page ── */
    voiture_toc_robot_hw: "\u5c0f\u8f66\u786c\u4ef6",
    voiture_toc_ctrl_hw: "\u9065\u63a7\u5668\u786c\u4ef6",
    voiture_toc_robot_sw: "\u5c0f\u8f66\u8f6f\u4ef6",
    voiture_toc_ctrl_sw: "\u9065\u63a7\u5668\u8f6f\u4ef6",
    voiture_meta_team_value: "6 \u4eba\u56e2\u961f \u2014 \u8f6f\u4ef6\u8d1f\u8d23\u4eba",
    voiture_overview_h: "\u9879\u76ee\u6982\u8ff0",
    voiture_overview_p1: "\u4e00\u6b3e\u7535\u6c60\u9a71\u52a8\u7684\u79fb\u52a8\u673a\u5668\u4eba\uff0c\u53ef\u6cbf\u5bfc\u7ebf\u4ea7\u751f\u7684\u78c1\u573a\u884c\u9a76\uff0c\u652f\u6301\u81ea\u52a8\u548c\u624b\u52a8\u4e24\u79cd\u6a21\u5f0f\u3002\u81ea\u52a8\u6a21\u5f0f\u4e0b\u8ddf\u8e2a\u5bfc\u7ebf\u3001\u5728\u4ea4\u53c9\u53e3\u4f7f\u7528 IMU \u8fdb\u884c\u822a\u5411\u63a7\u5236\u8f6c\u5f2f\uff0c\u5e76\u901a\u8fc7 VL53L0X \u98de\u884c\u65f6\u95f4\u4f20\u611f\u5668\u68c0\u6d4b\u969c\u788d\u7269\u3002\u624b\u52a8\u6a21\u5f0f\u4e0b\u901a\u8fc7\u7ea2\u5916\u9065\u63a7\u5668\u7684\u6447\u6746\u76f4\u63a5\u63a7\u5236\u8fd0\u52a8\u3002",
    voiture_overview_p2: "\u7cfb\u7edf\u7531\u4e09\u4e2a\u534f\u4f5c\u5b50\u7cfb\u7edf\u6784\u6210\uff1a\u8fd0\u884c\u88f8\u673a C \u56fa\u4ef6\u7684 <strong>STM32L051 \u5c0f\u8f66</strong>\u3001\u5e26 LCD \u83dc\u5355\u548c\u7ea2\u5916/\u84dd\u7259\u63a5\u53e3\u7684 <strong>EFM8LB12 \u624b\u6301\u9065\u63a7\u5668</strong>\u3001\u4ee5\u53ca\u7528\u4e8e\u5b9e\u65f6\u9065\u6d4b\u548c\u822a\u70b9\u8def\u5f84\u89c4\u5212\u7684 <strong>PyQt5 PC \u4eea\u8868\u76d8</strong>\u3002\u6211\u8bbe\u8ba1\u4e86\u81ea\u5b9a\u4e49\u53cc\u5411\u7ea2\u5916\u901a\u4fe1\u534f\u8bae\uff08\u7ecf 5 \u8f6e\u8fed\u4ee3\u8fbe\u5230 27fps \u541e\u5410\u91cf\uff09\u3001\u53cc\u72b6\u6001\u673a\u56fa\u4ef6\u67b6\u6784\uff0c\u5e76\u5e26\u9886 6 \u4eba\u56e2\u961f\u3002",
    voiture_overview_photo_caption: "\u5b8c\u6574\u7cfb\u7edf \u2014 \u673a\u5668\u4eba\u5c0f\u8f66\u3001\u624b\u6301\u7ea2\u5916\u9065\u63a7\u5668\u548c PyQt5 PC \u4eea\u8868\u76d8",
    voiture_robot_hw_h: "\u5c0f\u8f66\u786c\u4ef6\u8bbe\u8ba1",
    voiture_robot_hw_p: "\u5c0f\u8f66\u4ee5 STM32L051K8T6\uff08ARM Cortex-M0+\uff0c32MHz\uff09\u4e3a\u6838\u5fc3\u3002\u5355\u7247\u673a\u7531 9V \u7535\u6c60\u7ecf LM7805 + MCP1700-3302E \u7a33\u538b\u4f9b\u7535\uff0c\u7535\u673a\u7531\u72ec\u7acb 4\u00d7AA \u7535\u6c60\u7ec4\u901a\u8fc7\u5149\u8026\u9694\u79bb\u7684 MOSFET H \u6865\u9a71\u52a8\u3002\u4e09\u4e2a\u8c10\u632f LC \u7535\u611f\u7ebf\u5708\u611f\u5e94\u5bfc\u7ebf\u7684 17.5kHz \u78c1\u573a\uff0c\u7ecf LM358 \u653e\u5927\u548c\u5cf0\u503c\u68c0\u6d4b\u540e\u8f93\u5165 12 \u4f4d ADC\u3002",
    voiture_robot_photo_caption: "\u5c0f\u8f66\u4fef\u89c6\u56fe \u2014 STM32 \u4e3b\u677f\u3001\u7535\u611f\u4f20\u611f\u5668\u3001H \u6865\u7535\u673a\u9a71\u52a8\u548c\u7ea2\u5916\u6536\u53d1\u5668",
    voiture_ctrl_photo_caption: "\u9065\u63a7\u5668\u4fef\u89c6\u56fe \u2014 EFM8 \u4e3b\u677f\u3001\u6447\u6746\u3001\u6309\u952e\u3001LCD \u548c JDY-23 BLE \u6a21\u5757",
    voiture_robot_hw_caption: "\u5c0f\u8f66\u786c\u4ef6\u6846\u56fe \u2014 STM32 + \u7535\u611f\u4f20\u611f\u3001\u7ea2\u5916\u3001IMU\u3001\u969c\u788d\u68c0\u6d4b\u548c\u53cc H \u6865\u7535\u673a\u9a71\u52a8",
    voiture_hw_sensing_h: "\u78c1\u573a\u4f20\u611f",
    voiture_hw_sensing_p: "\u4e09\u4e2a\u8c10\u632f LC \u7535\u611f\uff08\u5de6\u3001\u524d\u3001\u53f3\uff09\u62fe\u53d6\u5bfc\u7ebf\u7684 17.5kHz \u78c1\u573a\u3002\u6bcf\u8def\u4fe1\u53f7\u7ecf LM358 \u653e\u5927\uff08\u589e\u76ca\u2248 20\uff09\uff0c\u7ecf\u8096\u7279\u57fa\u4e8c\u6781\u7ba1\u6574\u6d41\u548c RC \u5cf0\u503c\u68c0\u6d4b\u540e\u8f6c\u4e3a\u4e0e\u573a\u5f3a\u6210\u6b63\u6bd4\u7684\u76f4\u6d41\u7535\u538b\u3002",
    voiture_hw_ir_h: "\u7ea2\u5916\u901a\u4fe1",
    voiture_hw_ir_p: "SFH4546 \u7ea2\u5916 LED \u53d1\u5c04\uff0cTSOP33338 \u89e3\u8c03 38kHz \u8c03\u5236\u4fe1\u53f7\u3002\u81ea\u5b9a\u4e49\u8109\u51b2\u8ddd\u79bb\u534f\u8bae\uff1a28 \u4f4d\u5e27\uff088 \u4f4d\u547d\u4ee4 + 16 \u4f4d\u6570\u636e + 4 \u4f4d\u5730\u5740\uff09\uff0c\u534a\u53cc\u5de5\u505c\u7b49\u4e52\u4e53\u673a\u5236\u6d88\u9664\u6536\u53d1\u4e32\u6270\u3002",
    voiture_hw_imu_h: "IMU \u4e0e\u969c\u788d\u68c0\u6d4b",
    voiture_hw_imu_p: "IMU04A \u901a\u8fc7 I\u00b2C \u63d0\u4f9b\u9640\u87ba\u4eea\u6570\u636e\u7528\u4e8e\u8f6c\u5f2f\u822a\u5411\u4f30\u7b97\u3002VL53L0X \u98de\u884c\u65f6\u95f4\u4f20\u611f\u5668\u6d4b\u91cf\u524d\u65b9\u8ddd\u79bb\u2014\u2014\u969c\u788d\u7269\u5728 100mm \u5185\u65f6\u7acb\u5373\u5236\u52a8\u3002\u4e24\u8005\u5171\u4eab I\u00b2C \u603b\u7ebf\u3002",
    voiture_hw_motor_h: "\u7535\u673a\u9a71\u52a8",
    voiture_hw_motor_p: "\u4e24\u4e2a\u76f4\u6d41\u7535\u673a\u7531\u5206\u7acb\u7684 PMOS-NMOS H \u6865\u9a71\u52a8\u3002LTV846 \u5149\u8026\u5408\u5668\u9694\u79bb\u63a7\u5236\u4fe1\u53f7\u4e0e\u7535\u673a\u566a\u58f0\u3002PWM \u9891\u7387\u7ea6 1kHz\uff0c\u901f\u5ea6\u8303\u56f4 \u00b1100\uff0c\u901a\u8fc7\u5bf9\u89d2\u6676\u4f53\u7ba1\u5bf9\u9009\u62e9\u65b9\u5411\u3002",
    voiture_ctrl_hw_h: "\u9065\u63a7\u5668\u786c\u4ef6\u8bbe\u8ba1",
    voiture_ctrl_hw_p: "\u624b\u6301\u9065\u63a7\u5668\u57fa\u4e8e EFM8LB12F64 MCU\u3002\u7528\u6237\u8f93\u5165\u5305\u62ec\u56db\u4e2a\u6309\u952e\uff08\u542f\u52a8\u3001\u6682\u505c\u3001\u91cd\u7f6e\u3001\u53d1\u9001\uff09\u548c\u4e00\u4e2a\u7531 14 \u4f4d ADC \u91c7\u6837\u7684\u6a21\u62df\u6447\u6746\u30024 \u4f4d\u6a21\u5f0f\u7684 16\u00d72 \u5b57\u7b26 LCD \u63d0\u4f9b\u83dc\u5355\u5bfc\u822a\u548c\u5b9e\u65f6\u72b6\u6001\u3002UART1 \u4e0a\u7684 JDY-23 BLE \u6a21\u5757\u5b9e\u73b0\u4e0e PC \u7684\u65e0\u7ebf\u8fde\u63a5\u3002",
    voiture_ctrl_hw_caption: "\u9065\u63a7\u5668\u786c\u4ef6\u6846\u56fe \u2014 EFM8 + \u6447\u6746\u3001\u6309\u952e\u3001LCD\u3001\u7ea2\u5916\u94fe\u8def\u548c BLE \u6a21\u5757",
    voiture_toc_ir: "\u7ea2\u5916\u534f\u8bae",
    voiture_ir_h: "\u7ea2\u5916\u901a\u4fe1\u534f\u8bae",
    voiture_ir_intro_p: "\u5c0f\u8f66\u4e0e\u9065\u63a7\u5668\u4e4b\u95f4\u7684\u53cc\u5411\u7ea2\u5916\u94fe\u8def\u662f\u8fed\u4ee3\u6b21\u6570\u6700\u591a\u7684\u5b50\u7cfb\u7edf\u2014\u2014\u7ecf\u8fc7 <strong>5 \u8f6e\u8bbe\u8ba1\u4fee\u8ba2</strong>\u624d\u5b9e\u73b0\u4e86\u540c\u4f4d\u7f6e TSOP33338 \u63a5\u6536\u5668\u4e0e\u7ea2\u5916 LED \u53d1\u5c04\u5668\u4e4b\u95f4\u7684\u53ef\u9760\u5b9e\u65f6\u901a\u4fe1\u3002",
    voiture_ir_diagram_caption: "\u7ea2\u5916\u534f\u8bae\u67b6\u6784 \u2014 \u5e27\u7f16\u7801\u3001\u4e52\u4e53\u6d41\u7a0b\u548c\u786c\u4ef6\u5b9a\u65f6\u5668\u6620\u5c04",
    voiture_ir_iter_h: "\u4ece 7fps \u5230 27fps \u7684 5 \u8f6e\u8fed\u4ee3",
    voiture_ir_iter1_h: "v1: UART \u5f0f\u91c7\u6837",
    voiture_ir_iter1_p: "\u6a21\u4eff UART\uff1a\u8f7d\u6ce2=1\uff0c\u9759\u9ed8=0\u3002\u5b8c\u5168\u5931\u8d25\u2014\u2014TSOP33338 \u5185\u90e8 AGC \u5728\u6301\u7eed\u8f7d\u6ce2\u671f\u95f4\u6291\u5236\u8f93\u51fa\uff0c\u9700\u8981\u95f4\u6b47\u624d\u80fd\u7a33\u5b9a\u5de5\u4f5c\u3002",
    voiture_ir_iter2_h: "v2: \u8109\u51b2\u8ddd\u79bb\u7f16\u7801",
    voiture_ir_iter2_p: "\u56fa\u5b9a\u8f7d\u6ce2 + \u53ef\u53d8\u9759\u9ed8\u7f16\u7801\u6bcf\u4e2a\u6bd4\u7279\u3002\u4f46 1T+1T \u7684\u5360\u7a7a\u6bd4\u8d85\u8fc7 50%\uff0c\u89e6\u53d1 TSOP \u8f7d\u6ce2\u6291\u5236\u3002\u6269\u5c55\u4e3a 1T+2T(0) / 1T+3T(1) \u4ee5\u4fdd\u6301\u5728 AGC \u9608\u503c\u4ee5\u4e0b\u3002",
    voiture_ir_iter3_h: "v3: \u5149\u5b66\u81ea\u5e72\u6270",
    voiture_ir_iter3_p: "\u540c\u4f4d TX LED \u5149\u8026\u5408\u5230\u672c\u5730 TSOP \u63a5\u6536\u5668\u2014\u2014\u5149\u5b66\u4e32\u6270\u635f\u574f\u5e27\u3002\u6dfb\u52a0 100ms \u9759\u9ed8\u95f4\u9694\u540e\u541e\u5410\u91cf\u964d\u81f3 ~7fps\uff0c\u65e0\u6cd5\u7528\u4e8e\u5b9e\u65f6\u9065\u6d4b\u3002",
    voiture_ir_iter4_h: "v4: \u505c\u7b49\u4e52\u4e53\u534f\u8bae",
    voiture_ir_iter4_p: "\u67b6\u6784\u91cd\u8bbe\u8ba1\uff1a\u6bcf\u4fa7\u53d1\u9001\u4e00\u5e27\u540e\u7b49\u5f85\u56de\u590d\uff0c\u6d88\u9664\u6240\u6709\u78b0\u649e\u6b7b\u533a\u65f6\u95f4\u300216 \u9879 FIFO \u53d1\u9001\u961f\u5217\u3001NOP \u4fdd\u6d3b\u5e27\uff0cT \u4ece 263\u00b5s \u538b\u7f29\u81f3 184\u00b5s\u3002\u7ed3\u679c\uff1a<strong>7fps \u2192 27fps</strong>\uff084 \u500d\u63d0\u5347\uff09\u3002",
    voiture_ir_deadlock_h: "v5: \u975e\u5bf9\u79f0\u6b7b\u9501\u6062\u590d",
    voiture_ir_deadlock_p: "\u4e52\u4e53\u534f\u8bae\u5f15\u5165\u7ecf\u5178\u5206\u5e03\u5f0f\u6b7b\u9501\uff1a\u4e00\u65b9\u4e22\u5e27\u540e\u53cc\u65b9\u6c38\u4e45\u7b49\u5f85\u3002\u89e3\u51b3\u65b9\u6848\uff1a<strong>\u975e\u5bf9\u79f0\u8d85\u65f6</strong>\u2014\u2014\u5c0f\u8f66\u548c\u9065\u63a7\u5668\u4f7f\u7528\u4e0d\u540c\u7684\u7b49\u5f85\u65f6\u957f\uff0c\u4fdd\u8bc1\u6070\u597d\u4e00\u65b9\u5148\u6253\u7834\u6c89\u9ed8\uff0c\u65e0\u9700\u663e\u5f0f\u63e1\u624b\u5373\u53ef\u91cd\u65b0\u540c\u6b65\u94fe\u8def\u3002",
    voiture_ir_spec_h: "\u6700\u7ec8\u534f\u8bae\u89c4\u683c",
    voiture_ir_frame_h: "\u5e27\u683c\u5f0f",
    voiture_ir_frame_p: "28 \u4f4d\u8109\u51b2\u8ddd\u79bb\u7f16\u7801\uff1a4 \u4f4d\u8bbe\u5907\u5730\u5740 + 8 \u4f4d\u547d\u4ee4 + 16 \u4f4d\u6709\u6548\u8f7d\u8377\u3002\u8d77\u59cb\u7b26\uff1a2T \u8f7d\u6ce2 + 2T \u9759\u9ed8\u3002\u89e3\u7801\u9608\u503c 3.5T\uff08644\u00b5s\uff09\u3002",
    voiture_ir_timing_h: "\u786c\u4ef6\u5b9a\u65f6\u5668",
    voiture_ir_timing_p: "TIM22 \u901a\u8fc7 PWM \u4ea7\u751f 38kHz \u8f7d\u6ce2\uff08PSC=0, ARR=420, CCR=210\uff09\u3002TIM21 \u6bcf 184\u00b5s\uff087 \u4e2a\u8f7d\u6ce2\u5468\u671f\uff09\u9a71\u52a8 TX \u72b6\u6001\u673a ISR\u3002EXTI \u8fb9\u6cbf\u89e6\u53d1 RX + TIM6 \u5fae\u79d2\u65f6\u95f4\u6233\u3002\u96f6 CPU \u8f6e\u8be2\u3002",
    voiture_ir_link_h: "\u94fe\u8def\u5c42",
    voiture_ir_link_p: "\u534a\u53cc\u5de5\u505c\u7b49\u534f\u8bae + NOP \u4fdd\u6d3b\u5e27\uff08cmd 41\uff09\u300216 \u9879 2 \u7684\u5e42\u6b21 FIFO \u73af\u5f62\u7f13\u51b2\u533a\u89e3\u8026\u5e94\u7528\u5c42\u4e0e\u94fe\u8def\u65f6\u5e8f\u300220ms \u770b\u95e8\u72d7\u5728\u5e27\u4e2d\u505c\u987f\u65f6\u91cd\u7f6e\u63a5\u6536 FSM\u3002",
    voiture_ir_perf_h: "\u6027\u80fd",
    voiture_ir_perf_p: "\u7a33\u5b9a\u53cc\u5411\u541e\u5410\u91cf ~27fps\u3002\u6d41\u5f0f\u4f20\u8f93 6 \u4e2a IMU \u5bc4\u5b58\u5668 + 2 \u4e2a\u7535\u673a\u529f\u7387\u503c\uff0c\u7528\u4e8e PyQt5 \u4eea\u8868\u76d8\u7684\u5b9e\u65f6 3D \u59ff\u6001\u53ef\u89c6\u5316\u3002",
    voiture_robot_sw_h: "\u5c0f\u8f66\u8f6f\u4ef6\u8bbe\u8ba1",
    voiture_robot_sw_p: "\u5c0f\u8f66\u56fa\u4ef6\u4ee5\u88f8\u673a C \u5b9e\u73b0\u4e8e STM32\uff08ARM Cortex-M0+\uff0c64KB Flash\uff09\u3002\u67b6\u6784\u4e3a\u677e\u8026\u5408\u7684\u9a71\u52a8\u548c\u670d\u52a1\u5757\uff0c\u7531<strong>\u9876\u5c42\u53cc\u72b6\u6001\u673a</strong>\u534f\u8c03\u3002\u65f6\u5ef6\u654f\u611f\u7684\u5de5\u4f5c\uff08\u7ea2\u5916\u65f6\u5e8f\u3001PWM\uff09\u5728\u4e2d\u65ad\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\uff0c\u4e3b\u5faa\u73af\u5904\u7406\u5e94\u7528\u903b\u8f91\u548c\u6a21\u5757\u95f4\u6570\u636e\u4ea4\u6362\u3002",
    voiture_robot_sw_caption: "\u5c0f\u8f66\u8f6f\u4ef6\u67b6\u6784 \u2014 \u4f20\u611f\u3001\u7ea2\u5916\u901a\u4fe1\u3001\u63a7\u5236 FSM \u548c\u5b89\u5168\u8c03\u5ea6\u5c42",
    voiture_fsm_dual_h: "\u53cc\u72b6\u6001\u673a\u67b6\u6784",
    voiture_fsm_dual_p: "\u56fa\u4ef6\u56f4\u7ed5\u4e24\u4e2a\u8026\u5408\u7684\u72b6\u6001\u673a\u7ec4\u7ec7\u3002\u5916\u5c42 FSM <em>controller_state</em> \u7ba1\u7406\u4f1a\u8bdd\u751f\u547d\u5468\u671f\uff1a<strong>CONFIG \u2192 DRIVE \u2192 PAUSE</strong>\u3002\u5185\u5c42 FSM <em>car_state</em> \u4ec5\u5728 DRIVE \u5185\u6c42\u503c\uff0c\u9009\u62e9\u9a7e\u9a76\u6a21\u5f0f\uff1a<strong>FIELD_TRACKING</strong>\u3001<strong>REMOTE</strong> \u6216 <strong>PATH_TRACKING</strong>\u3002\u5b89\u5168\u5236\u52a8\uff08VL53L0X < 100mm \u6216\u4fa7\u7ffb > \u00b150\u00b0\uff09\u5728\u8c03\u5ea6\u5c42\u5e94\u7528\uff0c\u76f4\u63a5\u5f52\u96f6\u7535\u673a\u4f46\u4e0d\u6539\u53d8\u72b6\u6001\u53d8\u91cf\uff0c\u6761\u4ef6\u6d88\u9664\u540e\u81ea\u52a8\u6062\u590d\u3002",
    voiture_fsm_field_h: "\u5faa\u8ff9\u6a21\u5f0f",
    voiture_fsm_field_p: "\u5faa\u8ff9\u6a21\u5f0f\u91c7\u7528\u6bd4\u4f8b-\u5fae\u5206\u8f6c\u5411\u63a7\u5236\u3002\u5de6\u53f3\u7535\u611f\u8bfb\u6570\u4e4b\u5dee\u4f5c\u4e3a\u8bef\u5dee\u4fe1\u53f7\u8c03\u6574\u7535\u673a\u901f\u5ea6\u4ee5\u4fdd\u6301\u5c45\u4e2d\u3002\u5728\u4ea4\u53c9\u53e3\u5904\uff0c\u524d\u7535\u611f\u7684\u5fae\u5206\u9879\u63d0\u9ad8\u54cd\u5e94\u901f\u5ea6\u3002FSM \u5c06\u884c\u4e3a\u7ec4\u7ec7\u4e3a\uff1a<em>\u6b63\u5e38\u8ddf\u8e2a \u2192 \u4ea4\u53c9\u53e3\u68c0\u6d4b \u2192 \u8f6c\u5f2f\u6267\u884c\uff08\u57fa\u4e8e IMU\uff09\u2192 \u8f6c\u5f2f\u540e\u7a33\u5b9a</em>\u3002",
    voiture_fsm_field_caption: "\u5faa\u8ff9\u6a21\u5f0f FSM \u2014 PD \u8f6c\u5411\u63a7\u5236 + IMU \u8f85\u52a9\u4ea4\u53c9\u53e3\u8f6c\u5f2f",
    voiture_fsm_waypoint_h: "\u822a\u70b9\u5bfc\u822a\u6a21\u5f0f",
    voiture_fsm_waypoint_p: "\u822a\u70b9\u5bfc\u822a\u5668\u5904\u7406\u70b9\u5230\u70b9\u81ea\u4e3b\u5bfc\u822a\u3002\u822a\u70b9\u5217\u8868\uff08X/Y \u5750\u6807\uff0c\u5355\u4f4d cm\uff09\u7531 PyQt5 GUI \u7ecf\u84dd\u7259\u53d1\u9001\u81f3\u9065\u63a7\u5668\uff0c\u518d\u7ecf\u7ea2\u5916\u8f6c\u53d1\u81f3\u5c0f\u8f66\u3002\u5bf9\u6bcf\u6bb5\u8def\u5f84\uff0c\u5bfc\u822a\u5668\u8ba1\u7b97\u6b27\u6c0f\u8ddd\u79bb\u548c\u76ee\u6807\u65b9\u4f4d\u89d2\uff0c\u4ee5\u9640\u87ba\u4eea\u79ef\u5206\u504f\u822a\u4e3a\u53cd\u9988\u3002\u6bd4\u4f8b\u5f8b\u7ea0\u6b63\u822a\u5411\u8bef\u5dee\uff0c\u5269\u4f59\u8ddd\u79bb\u5c0f\u4e8e 20cm \u6216\u822a\u5411\u8bef\u5dee\u8d85\u8fc7 60\u00b0 \u65f6\u964d\u4f4e\u524d\u8fdb\u901f\u5ea6\u3002",
    voiture_fsm_waypoint_caption: "\u822a\u70b9\u5bfc\u822a FSM \u2014 \u57fa\u4e8e\u65b9\u4f4d\u89d2\u7684\u6bd4\u4f8b\u63a7\u5236\u4e0e\u8ddd\u79bb\u95e8\u63a7",
    voiture_ctrl_sw_h: "\u9065\u63a7\u5668\u8f6f\u4ef6\u8bbe\u8ba1",
    voiture_ctrl_sw_p: "\u9065\u63a7\u5668\u56fa\u4ef6\u8fd0\u884c\u5728 EFM8 MCU \u4e0a\u3002<strong>18 \u72b6\u6001 LCD FSM</strong> \u9a71\u52a8\u83dc\u5355\u7cfb\u7edf\uff1a\u6a21\u5f0f\u9009\u62e9\uff08\u5faa\u8ff9/\u9065\u63a7/\u5bfc\u822a\uff09\u3001\u8def\u5f84\u9009\u62e9\uff08\u4e09\u4e2a\u9884\u8bbe\u6216\u624b\u52a8\uff09\u548c\u5b9e\u65f6\u72b6\u6001\u663e\u793a\u3002\u6447\u6746\u504f\u8f6c\u548c\u6309\u952e\u901a\u8fc7\u8fb9\u6cbf\u9501\u5b58\u68c0\u6d4b\u3002\u9065\u63a7\u6a21\u5f0f\u4e0b\uff0c\u6447\u6746 X/Y \u8f74\u4ee5\u8857\u673a\u98ce\u683c\u6df7\u5408\u5668\u547d\u4ee4\u53d1\u9001\uff0c\u64cd\u63a7\u76f4\u89c9\u3002",
    voiture_ctrl_sw_caption: "\u9065\u63a7\u5668\u8f6f\u4ef6\u6846\u56fe \u2014 HMI\u3001\u7ea2\u5916\u6536\u53d1\u3001\u84dd\u7259 BLE \u6865\u63a5\u548c\u8def\u5f84\u7f13\u51b2",
    voiture_gui_h: "PyQt5 \u4eea\u8868\u76d8",
    voiture_gui_p: "\u4f7f\u7528 PyQt5 \u548c Bleak BLE \u5e93\u6784\u5efa\u7684 Python GUI\uff0c\u901a\u8fc7 JDY-23 \u6a21\u5757\u65e0\u7ebf\u8fde\u63a5\u9065\u63a7\u5668\u3002\u4ee5 2Hz \u663e\u793a\u5b9e\u65f6\u9065\u6d4b\u6570\u636e\uff08IMU \u5bc4\u5b58\u5668\u3001\u7535\u673a\u529f\u7387\uff09\uff0c\u5e76\u63d0\u4f9b\u70b9\u51fb\u653e\u7f6e\u822a\u70b9\u7f16\u8f91\u5668\u7528\u4e8e\u81ea\u4e3b\u8def\u5f84\u89c4\u5212\u3002\u822a\u70b9\u901a\u8fc7 PATH_BEGIN / point / PATH_END \u5e8f\u5217\u7ecf BLE \u2192 UART \u2192 \u7ea2\u5916\u53d1\u9001\u81f3\u5c0f\u8f66\u3002",
    voiture_gui_caption: "\u5b9e\u65f6\u9065\u6d4b\u4eea\u8868\u76d8 \u2014 IMU \u6570\u636e\u548c\u7535\u673a\u529f\u7387",
    voiture_gui_wp_caption: "\u822a\u70b9\u8def\u5f84\u7f16\u8f91\u5668 \u2014 \u70b9\u51fb\u653e\u7f6e\u81ea\u4e3b\u5bfc\u822a",
    voiture_results_h: "\u9879\u76ee\u6210\u679c",
    voiture_result_1_label: "\u7ea2\u5916\u534f\u8bae\u7ecf 5 \u8f6e\u8fed\u4ee3\u540e\u7684\u541e\u5410\u91cf",
    voiture_result_2_label: "\u9a7e\u9a76\u6a21\u5f0f\uff1a\u5faa\u8ff9\u3001\u9065\u63a7\u3001\u822a\u70b9\u5bfc\u822a",
    voiture_result_3_label: "\u81ea\u5b9a\u4e49\u7ea2\u5916\u5e27 + \u534a\u53cc\u5de5\u4e52\u4e53\u534f\u8bae",
    voiture_result_4_label: "MCU \u5e73\u53f0\uff1aSTM32 (Cortex-M0+) \u548c EFM8 (8051)",

    /* ── SolidWorks project page ── */
    project_label_project: "\u9879\u76ee",
    project4_name: "SolidWorks CAD \u5efa\u6a21",
    project4_summary: "\u4e24\u4e2a\u81ea\u5b66\u5efa\u6a21\u9879\u76ee\u2014\u2014PC \u673a\u7bb1\uff08\u9499\u91d1\uff09\u548c\u65e0\u7ebf\u9f20\u6807\uff08\u9ad8\u7ea7\u66f2\u9762\uff09\u2014\u2014\u63d0\u5347\u591a\u9886\u57df SolidWorks \u5efa\u6a21\u80fd\u529b\u3002",
    sw_toc_case: "PC \u673a\u7bb1",
    sw_toc_mouse: "\u9f20\u6807",
    sw_meta_type: "\u7c7b\u578b",
    sw_meta_type_value: "\u81ea\u5b66\u7ec3\u4e60",
    meta_date: "\u65e5\u671f",
    sw_overview_h: "\u6982\u8ff0",
    sw_overview_p: "\u4e24\u4e2a\u81ea\u5b66 SolidWorks \u5efa\u6a21\u9879\u76ee\uff0c\u8986\u76d6\u4e0d\u540c CAD \u65b9\u5411\uff1a<strong>PC \u673a\u7bb1</strong>\u7ec3\u4e60\u9499\u91d1\u4e0e\u591a\u4f53\u96f6\u4ef6\u8bbe\u8ba1\uff0c<strong>\u65e0\u7ebf\u9f20\u6807</strong>\u7ec3\u4e60\u9ad8\u7ea7\u66f2\u9762\u4e0e\u4eba\u4f53\u5de5\u7a0b\u81ea\u7531\u66f2\u9762\u5efa\u6a21\u3002",
    sw_case_h: "PC \u673a\u7bb1",
    sw_case_p: "\u4ee5\u9499\u91d1\u529f\u80fd\u5efa\u6a21\u7684\u5168\u5c3a\u5bf8 ATX \u673a\u7bb1\u3002\u5305\u542b\u98ce\u6247\u5b89\u88c5\u5f00\u53e3\u3001PCIe \u6269\u5c55\u69fd\u3001\u901a\u98ce\u683c\u6805\u3001\u8d70\u7ebf\u5b54\u4ee5\u53ca\u5185\u90e8\u94dc\u67f1\u7279\u5f81\u3002",
    sw_case_caption: "PC \u673a\u7bb1 \u2014 \u9499\u91d1\u4e3b\u4f53 + \u5f00\u53e3\u4e0e\u901a\u98ce",
    sw_mouse_h: "\u65e0\u7ebf\u9f20\u6807",
    sw_mouse_p: "\u4f7f\u7528\u9ad8\u7ea7\u66f2\u9762\u6280\u672f\u5efa\u6a21\u7684\u4eba\u4f53\u5de5\u7a0b\u65e0\u7ebf\u9f20\u6807\u3002\u5177\u6709\u5e73\u6ed1\u6709\u673a\u8f6e\u5ed3\u3001\u6eda\u8f6e\u51f9\u69fd\u3001\u4fa7\u9762\u63e1\u6301\u538b\u75d5\u4ee5\u53ca\u5206\u4f53\u5916\u58f3\u8bbe\u8ba1\u3002",
    sw_mouse_caption: "\u65e0\u7ebf\u9f20\u6807 \u2014 \u9ad8\u7ea7\u66f2\u9762\u4e0e\u81ea\u7531\u66f2\u9762\u5efa\u6a21"
};

// Merge external mn-translations.js if loaded before this script
if (window._mn) {
    var key;
    for (key in window._mn) {
        if (window._mn.hasOwnProperty(key)) mn[key] = window._mn[key];
    }
}

// Save English defaults on load
(function () {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
        en[els[i].getAttribute("data-i18n")] = els[i].innerHTML;
    }
})();

function setLang(lang) {
    currentLang = lang;
    var translations = lang === "zh" ? zh : (lang === "mn" ? mn : en);
    var btn = document.getElementById("langLabel");

    if (lang === "zh") {
        document.documentElement.lang = "zh-CN";
        document.title = "\u501c\u535a - \u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5f00\u53d1\u8005";
        if (btn) btn.textContent = "EN";
        var heroName = document.querySelector('.hero-name');
        if (heroName) heroName.innerHTML = '\u501c\u535a<span class="cursor">_</span>';
        if (window._mnDeactivate) window._mnDeactivate();
    } else if (lang === "mn") {
        document.documentElement.lang = "mn";
        document.title = "ᠪᠣ ᠲᠢ — ᠳᠠᠷᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠫᠷᠣᠭ᠋ᠷᠠᠮ ᠤᠨ ᠢᠨᠵᠧᠨᠧᠷ";
        if (btn) btn.textContent = "CN";
        var heroName = document.querySelector('.hero-name');
        if (heroName) heroName.innerHTML = 'ᠪᠣ ᠲᠢ<span class="cursor">_</span>';
        window._mnActivate();
    } else {
        document.documentElement.lang = "en";
        document.title = "Bo Ti - Embedded Software Developer";
        if (btn) btn.textContent = "MN";
        var heroName = document.querySelector('.hero-name');
        if (heroName) heroName.innerHTML = 'Bo Ti<span class="cursor">_</span>';
    }
    // Deactivate MN mode when switching to any other language
    if (lang !== "mn" && window._mnDeactivate) window._mnDeactivate();

    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute("data-i18n");
        if (translations[key]) {
            els[i].innerHTML = translations[key];
        }
    }

    // Update orbital skill labels
    if (typeof window.updateSkillsLang === 'function') {
        window.updateSkillsLang();
    }

    var tagEls = document.querySelectorAll("[data-i18n-tags]");
    for (var i = 0; i < tagEls.length; i++) {
        var key = tagEls[i].getAttribute("data-i18n-tags");
        if (translations[key]) {
            var items = translations[key].split(",");
            tagEls[i].innerHTML = items.map(function(item) {
                return '<span>' + item.trim() + '</span>';
            }).join('');
        } else if (lang === "en") {
            var enKey = tagEls[i].getAttribute("data-i18n-tags");
            if (enKey === "skill_items_embedded") {
                tagEls[i].innerHTML = '<span>FSM Design</span><span>PWM Control</span><span>UART/Serial Communication</span><span>Pub-Sub Architecture</span><span>Cooperative Multitasking</span><span>Timer/Interrupt Configuration</span>';
            } else if (enKey === "skill_items_lab") {
                tagEls[i].innerHTML = '<span>Logic Analyzer</span><span>Multimeter</span><span>Oscilloscope</span><span>Signal Generator</span>';
            }
        }
    }
}

// Cycle: en → mn → zh → en
function toggleLang() {
    var next = currentLang === "en" ? "mn" : (currentLang === "mn" ? "zh" : "en");
    setLang(next);
    localStorage.setItem('lang', next);
}

// Restore language: localStorage first, then IP auto-detect
(function () {
    var saved = localStorage.getItem('lang');
    if (saved && (saved === 'mn' || saved === 'zh' || saved === 'en')) {
        setLang(saved);
        return;
    }
    // Auto-detect country via IP only if no saved preference
    fetch("https://ipapi.co/json/")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (data.country_code === "CN") {
                setLang("zh");
                localStorage.setItem('lang', 'zh');
            }
        })
        .catch(function () { });
})();


// ---- THEME TOGGLE ----
function getTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function updateThemeIcon() {
    var icon = document.getElementById('themeIcon');
    if (!icon) return;
    icon.innerHTML = getTheme() === 'light' ? '&#9728;' : '&#9790;';
}

function toggleTheme() {
    var isLight = getTheme() === 'light';
    if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    updateThemeIcon();
    if (typeof window.redrawGrid === 'function') window.redrawGrid();
}

// Set correct icon on load
updateThemeIcon();


// ---- MOBILE MENU ----
function toggleMenu() {
    var links = document.getElementById("navLinks");
    var toggle = document.getElementById("menuToggle");
    links.classList.toggle("open");
    toggle.classList.toggle("active");
}

document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('menuToggle').classList.remove('active');
    });
});


// ---- DOT GRID BACKGROUND ----
(function () {
    var canvas = document.getElementById("gridCanvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = window.devicePixelRatio || 1;

    function resize() {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        draw();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var spacing = 32;
        var dotSize = 0.8;
        var isLight = document.documentElement.getAttribute('data-theme') === 'light';
        ctx.fillStyle = isLight ? "rgba(14, 143, 208, 0.18)" : "rgba(56, 189, 248, 0.15)";

        for (var x = spacing; x < window.innerWidth; x += spacing) {
            for (var y = spacing; y < window.innerHeight; y += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    resize();
    window.addEventListener("resize", resize);
    window.redrawGrid = function() { draw(); };
})();


// ---- SIGNAL CANVAS (oscilloscope waveform) ----
(function () {
    var canvas = document.getElementById("signalCanvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var W, H;
    var dpr = window.devicePixelRatio || 1;
    var phase = 0;

    function resize() {
        var parent = canvas.parentElement;
        if (!parent) return;
        var rect = parent.getBoundingClientRect();
        W = rect.width;
        H = Math.min(rect.width * 0.65, 220);
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + "px";
        canvas.style.height = H + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawGrid() {
        var isLight = document.documentElement.getAttribute('data-theme') === 'light';
        ctx.strokeStyle = isLight ? "rgba(14, 143, 208, 0.08)" : "rgba(56, 189, 248, 0.06)";
        ctx.lineWidth = 0.5;
        var step = 20;
        for (var x = 0; x <= W; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
            ctx.stroke();
        }
        for (var y = 0; y <= H; y += step) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
            ctx.stroke();
        }
    }

    var waveRunning = false;

    function drawWave() {
        if (!waveRunning) return;
        ctx.clearRect(0, 0, W, H);
        drawGrid();

        var isLight = document.documentElement.getAttribute('data-theme') === 'light';

        // Main signal — sine-ish waveform
        ctx.beginPath();
        ctx.strokeStyle = isLight ? "rgba(14, 143, 208, 0.75)" : "rgba(56, 189, 248, 0.8)";
        ctx.lineWidth = 1.8;
        ctx.shadowColor = isLight ? "rgba(14, 143, 208, 0.4)" : "rgba(56, 189, 248, 0.5)";
        ctx.shadowBlur = 6;

        for (var x = 0; x < W; x++) {
            var t = (x / W) * Math.PI * 6 + phase;
            var y = H / 2 + Math.sin(t) * (H * 0.3) + Math.sin(t * 2.7) * (H * 0.08);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Secondary signal — faint square wave in amber
        ctx.beginPath();
        ctx.strokeStyle = "rgba(240, 160, 48, 0.25)";
        ctx.lineWidth = 1;

        for (var x = 0; x < W; x++) {
            var t = (x / W) * Math.PI * 4 + phase * 0.7;
            var val = Math.sin(t) > 0 ? 1 : -1;
            var y = H / 2 + val * (H * 0.2);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        phase += 0.02;
        requestAnimationFrame(drawWave);
    }

    // Only animate when visible
    var waveObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !waveRunning) {
                waveRunning = true;
                requestAnimationFrame(drawWave);
            } else if (!entry.isIntersecting) {
                waveRunning = false;
            }
        });
    }, { threshold: 0 });

    resize();
    waveObserver.observe(canvas);
    window.addEventListener("resize", resize);
})();


// ---- SCROLL REVEAL (enhanced with directional variants) ----
(function () {
    // About section: text from left, aside from right
    document.querySelectorAll('.about-text').forEach(function (el) {
        el.classList.add('reveal-left');
    });
    document.querySelectorAll('.about-aside').forEach(function (el) {
        el.classList.add('reveal-right');
    });

    // Standard reveals with staggered delays
    var staggerSets = [
        { sel: '.project-card', delay: 0.12 },
        { sel: '.skill-block', delay: 0.08 },
        { sel: '.exp-card', delay: 0.1 },
        { sel: '.contact-box', delay: 0 },
        { sel: '.section-header', delay: 0 }
    ];

    staggerSets.forEach(function (set) {
        document.querySelectorAll(set.sel).forEach(function (el, i) {
            el.classList.add('reveal');
            if (set.delay > 0) {
                el.style.transitionDelay = (i * set.delay) + 's';
            }
        });
    });

    var allRevealable = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve — keeps it simple
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    allRevealable.forEach(function (el) {
        observer.observe(el);
    });
})();


// ---- ACTIVE NAV SECTION HIGHLIGHTING ----
(function () {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    function updateActive() {
        var scrollY = window.pageYOffset;
        var navHeight = 80;

        sections.forEach(function (section) {
            var top = section.offsetTop - navHeight - 100;
            var bottom = top + section.offsetHeight;
            var id = section.getAttribute('id');

            navLinks.forEach(function (link) {
                if (link.getAttribute('href') === '#' + id) {
                    if (scrollY >= top && scrollY < bottom) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
        });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
})();


// ---- NAVBAR SCROLL EFFECT ----
(function () {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
})();


// ---- TERMINAL TYPING ANIMATION (trigger on scroll) ----
(function () {
    var terminal = document.querySelector('.terminal-card');
    if (!terminal) return;

    // Initially hide terminal lines until scrolled into view
    terminal.classList.add('terminal-animate');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Remove the class to let CSS animation play
                terminal.classList.remove('terminal-animate');
                // Re-trigger animations by cloning
                var code = terminal.querySelector('code');
                if (code) {
                    var spans = code.querySelectorAll(':scope > span');
                    spans.forEach(function (span) {
                        span.style.animation = 'none';
                        span.offsetHeight; // force reflow
                        span.style.animation = '';
                    });
                }
                observer.unobserve(terminal);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(terminal);
})();


// ================================================================
//  MONGOLIAN BICHIG MODE
//  Full horizontal-scroll manuscript layout.
//  All layout applied via inline styles + injected <style> tag
//  to be immune to CSS caching.
// ================================================================
(function () {
    var mnStyleEl = null;
    var mnActive = false;
    var wheelHandler = null;
    var velocity = 0;
    var raf = null;
    var MN_FONT = '"Noto Sans Mongolian","Menksoft Qagan","Mongolian Baiti",serif';

    var MN_CSS = [
        /* ── Kill overlays ── */
        'body.mn-mode::after { display:none !important; content:none !important; }',
        '#gridCanvas.mn-hidden { display:none !important; }',

        /* ── Force reveals & hero animations visible ── */
        'body.mn-mode .reveal, body.mn-mode .reveal-left, body.mn-mode .reveal-right {',
        '  opacity:1 !important; transform:none !important; transition:none !important; }',
        'body.mn-mode .glass-card, body.mn-mode .glass-card-signal,',
        'body.mn-mode .hero-bottom-bar, body.mn-mode .hero-title,',
        'body.mn-mode .hero-bio, body.mn-mode .hero-actions {',
        '  opacity:1 !important; transform:none !important; animation:none !important; }',

        /* ── All body direct children visible ── */
        'body.mn-mode > * { opacity:1 !important; visibility:visible !important; }',

        /* ── Scrollbar ── */
        'body.mn-mode::-webkit-scrollbar { height:6px; }',
        'body.mn-mode::-webkit-scrollbar-track { background:#0a0e17; }',
        'body.mn-mode::-webkit-scrollbar-thumb { background:linear-gradient(90deg,#38bdf8,#818cf8); border-radius:3px; }',

        /* ── Panel separator ── */
        'body.mn-mode .section::before {',
        '  content:""; position:absolute; left:0; top:8%; bottom:8%; width:1px;',
        '  background:linear-gradient(180deg,transparent,rgba(56,189,248,0.15) 20%,#38bdf8 50%,rgba(56,189,248,0.15) 80%,transparent);',
        '  box-shadow:0 0 12px rgba(56,189,248,0.06); }',
        'body.mn-mode .section::after {',
        '  content:"◇"; position:absolute; left:-5px; top:50%; transform:translateY(-50%);',
        '  font-size:10px; color:#38bdf8; opacity:0.5; z-index:1; }',
        'body.mn-mode .footer::before {',
        '  content:""; position:absolute; left:0; top:15%; bottom:15%; width:1px;',
        '  background:linear-gradient(180deg,transparent,rgba(56,189,248,0.12) 30%,rgba(56,189,248,0.12) 70%,transparent); }',

        /* ── Vertical text ── */
        'body.mn-mode .section-title, body.mn-mode .section-index,',
        'body.mn-mode .about-text p, body.mn-mode .project-name,',
        'body.mn-mode .project-desc, body.mn-mode .project-label,',
        'body.mn-mode .exp-role, body.mn-mode .exp-desc,',
        'body.mn-mode .exp-period, body.mn-mode .exp-company,',
        'body.mn-mode .contact-text, body.mn-mode .footer p,',
        'body.mn-mode .scroll-hint span, body.mn-mode .skill-glass-title,',
        'body.mn-mode .hero-name, body.mn-mode .hero-tagline, body.mn-mode .hero-sub,',
        'body.mn-mode .nav-links a, body.mn-mode .nav-logo,',
        'body.mn-mode .project-tech span {',
        '  writing-mode:vertical-lr;',
        '  font-family:' + MN_FONT + ';',
        '  line-height:1.6; letter-spacing:0.02em; }',

        /* ── Keep media horizontal ── */
        'body.mn-mode img, body.mn-mode canvas, body.mn-mode svg { writing-mode:horizontal-tb; }',

        /* ── Container ── */
        'body.mn-mode .container { max-width:none; padding:0; }',

        /* ── Section header ── */
        'body.mn-mode .section-header { display:flex; flex-direction:row; align-items:flex-start; gap:1rem; margin-bottom:2rem; }',
        'body.mn-mode .section-title { max-height:280px; white-space:normal; font-size:1.3rem; }',
        'body.mn-mode .section-index { font-size:0.85rem; }',
        'body.mn-mode .section-line { flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }',

        /* ── About ── */
        'body.mn-mode .about-grid { display:flex; flex-direction:row; gap:2rem; }',
        'body.mn-mode .about-text { display:flex; flex-direction:row; gap:1.5rem; align-items:flex-start; }',
        'body.mn-mode .about-text p { max-height:55vh; margin-bottom:0; font-size:0.95rem; }',

        /* ── Projects: 3 cards side by side, each card = image left + text right ── */
        'body.mn-mode .projects-list {',
        '  display:flex !important; flex-direction:row !important;',
        '  gap:1.5rem; height:calc(100vh - 8rem);',
        '  align-items:stretch; flex-wrap:nowrap; }',
        'body.mn-mode .project-card {',
        '  flex:1 1 0; display:flex !important; flex-direction:row !important;',
        '  height:100%; overflow:hidden; padding:0 !important; }',
        'body.mn-mode .project-card:hover { transform:none; }',
        'body.mn-mode .project-img-wrapper {',
        '  flex:0 0 45%; height:100% !important; border-radius:12px 0 0 12px; }',
        'body.mn-mode .project-img { height:100%; object-fit:cover; }',
        'body.mn-mode .project-img-fade { background:linear-gradient(to right,transparent 60%,var(--bg-card) 100%) !important; }',
        'body.mn-mode .project-card > :not(.project-img-wrapper) {',
        '  padding:1rem 1.2rem; }',
        'body.mn-mode .project-top { padding:1rem 1.2rem 0; }',
        'body.mn-mode .project-name { max-height:200px; white-space:normal; font-size:1rem; padding:0 1.2rem; }',
        'body.mn-mode .project-desc { max-height:300px; font-size:0.85rem; overflow:hidden; padding:0 1.2rem; }',
        'body.mn-mode .project-label { max-height:120px; }',
        'body.mn-mode .project-tech { display:flex; flex-direction:row; flex-wrap:wrap; gap:0.3rem; margin-top:auto; padding:0 1.2rem 1rem; }',
        'body.mn-mode .project-tech span { writing-mode:horizontal-tb; font-size:0.6rem; }',

        /* ── Skills ── */
        'body.mn-mode .track-name, body.mn-mode #ttTitle, body.mn-mode #ttDesc {',
        '  font-family:' + MN_FONT + '; }',
        'body.mn-mode .skill-glass-title { max-height:160px; font-size:0.8rem; }',
        'body.mn-mode .skill-glass-items span { font-family:' + MN_FONT + '; }',

        /* ── Experience: cards left to right ── */
        'body.mn-mode .experience-list { display:flex; flex-direction:row; gap:1.5rem; }',
        'body.mn-mode .exp-card { flex:1; }',
        'body.mn-mode .exp-role { max-height:220px; font-size:1.05rem; }',
        'body.mn-mode .exp-period { max-height:110px; }',
        'body.mn-mode .exp-company { max-height:120px; }',
        'body.mn-mode .exp-desc { max-height:320px; font-size:0.9rem; }',

        /* ── Contact ── */
        'body.mn-mode .contact-text { max-height:260px; margin:0 auto 2rem; font-size:1rem; }',

        /* ── Footer ── */
        'body.mn-mode .footer-inner { flex-direction:column; gap:1rem; text-align:center; }',
        'body.mn-mode .footer p { max-height:100px; }',

        /* ── Scroll hint ── */
        'body.mn-mode .scroll-hint { flex-direction:row; }',

        /* ── Nav sidebar ── */
        'body.mn-mode .nav-links { display:flex !important; flex-direction:column; gap:0.25rem; padding:0; }',
        'body.mn-mode .nav-links a { font-size:0.75rem; letter-spacing:0; line-height:1.4; padding:0.5rem 0.3rem; }',
        'body.mn-mode .nav-right { flex-direction:column; gap:0.6rem; margin-top:auto; }',

        /* ── Light mode ── */
        'html[data-theme="light"] body.mn-mode .navbar { background:rgba(245,246,250,0.92); }',

        /* ── Project detail pages ── */
        'body.mn-mode .project-hero { flex:0 0 100vw; height:100vh; scroll-snap-align:start; overflow:hidden; }',
        'body.mn-mode .project-hero-title { writing-mode:vertical-lr; font-family:' + MN_FONT + '; max-height:55vh; line-height:1.4; font-size:clamp(1.4rem,3.5vw,2.2rem); }',
        'body.mn-mode .project-back { font-family:' + MN_FONT + '; }',
        'body.mn-mode .project-content { flex:0 0 min(900px,85vw); height:100vh; overflow-y:auto; }',
        'body.mn-mode .proj-heading { writing-mode:vertical-lr; font-family:' + MN_FONT + '; max-height:200px; line-height:1.5; }',
        'body.mn-mode .proj-meta-label, body.mn-mode .proj-meta-value { writing-mode:vertical-lr; font-family:' + MN_FONT + '; max-height:120px; line-height:1.5; }',
        'body.mn-mode .proj-section p { writing-mode:vertical-lr; font-family:' + MN_FONT + '; max-height:380px; line-height:1.6; }',
        'body.mn-mode .proj-result-label, body.mn-mode .proj-result-value { writing-mode:vertical-lr; font-family:' + MN_FONT + '; max-height:180px; line-height:1.5; }',
        'body.mn-mode .proj-compare-card p, body.mn-mode .proj-compare-card h4, body.mn-mode .proj-compare-label { writing-mode:vertical-lr; font-family:' + MN_FONT + '; line-height:1.5; }',
        'body.mn-mode .proj-hw-item h4, body.mn-mode .proj-hw-item p { writing-mode:vertical-lr; font-family:' + MN_FONT + '; line-height:1.5; }',
        'body.mn-mode .proj-hw-item p { max-height:260px; }',
        'body.mn-mode figcaption { writing-mode:vertical-lr; font-family:' + MN_FONT + '; max-height:160px; line-height:1.5; }',
    ].join('\n');

    // Helper: apply a style map to an element
    function applyStyles(el, styles) {
        if (!el) return;
        for (var k in styles) el.style[k] = styles[k];
    }
    function clearStyles(el, keys) {
        if (!el) return;
        keys.forEach(function (k) { el.style[k] = ''; });
    }

    function activate() {
        if (mnActive) return;
        mnActive = true;

        // 1. Inject style tag (once)
        if (!mnStyleEl) {
            mnStyleEl = document.createElement('style');
            mnStyleEl.id = 'mn-mode-styles';
            mnStyleEl.textContent = MN_CSS;
            document.head.appendChild(mnStyleEl);
        }

        // 2. Body class + hide grid canvas
        document.body.classList.add('mn-mode');
        var gc = document.getElementById('gridCanvas');
        if (gc) gc.classList.add('mn-hidden');

        // 3. Body layout — horizontal scroll container
        applyStyles(document.body, {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            height: '100vh',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            fontFamily: MN_FONT
        });

        // 4. Navbar → vertical sidebar
        applyStyles(document.querySelector('.navbar'), {
            writingMode: 'vertical-lr',
            position: 'fixed',
            top: '0', left: '0', right: 'auto',
            width: 'auto', height: '100vh',
            borderBottom: 'none',
            borderRight: '1px solid var(--border)',
            zIndex: '100',
            background: 'rgba(10,14,23,0.92)',
            backdropFilter: 'blur(20px)'
        });
        applyStyles(document.querySelector('.nav-inner'), {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '1.2rem 0.6rem',
            height: '100%',
            gap: '1.5rem',
            maxWidth: 'none'
        });

        // 5. Hero panel
        applyStyles(document.querySelector('.hero'), {
            flex: '0 0 100vw',
            width: '100vw',
            minWidth: '100vw',
            height: '100vh',
            scrollSnapAlign: 'start',
            overflow: 'hidden',
            background: 'var(--bg-deep)'
        });

        // 6. Sections — projects section gets a wider panel for 3 side-by-side cards
        var projSection = document.getElementById('projects');
        document.querySelectorAll('.section').forEach(function (sec) {
            var isProjects = (sec === projSection);
            var w = isProjects ? 'max(1100px, 75vw)' : 'min(900px, 85vw)';
            applyStyles(sec, {
                flex: '0 0 ' + w,
                width: w,
                minWidth: w,
                height: '100vh',
                padding: '2.5rem 3rem',
                overflowY: 'hidden',
                boxSizing: 'border-box',
                scrollSnapAlign: 'start',
                position: 'relative',
                background: 'var(--bg-deep)'
            });
        });

        // 7. Footer
        applyStyles(document.querySelector('.footer'), {
            flex: '0 0 180px',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            scrollSnapAlign: 'start',
            position: 'relative',
            background: 'var(--bg-deep)'
        });

        // 8. Force all reveal elements visible
        document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(function (el) {
            el.classList.add('visible');
        });

        // 9. Wheel → horizontal scroll with momentum
        velocity = 0;
        raf = null;
        wheelHandler = function (e) {
            if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
            e.preventDefault();
            velocity += e.deltaY * 0.6;
            if (!raf) raf = requestAnimationFrame(tick);
        };
        document.addEventListener('wheel', wheelHandler, { passive: false });
    }

    function tick() {
        document.body.scrollLeft += velocity;
        velocity *= 0.92;
        if (Math.abs(velocity) > 0.5) {
            raf = requestAnimationFrame(tick);
        } else {
            velocity = 0; raf = null;
        }
    }

    var BODY_KEYS = ['display','flexDirection','flexWrap','height','overflowX','overflowY','scrollSnapType','fontFamily'];
    var NAV_KEYS = ['writingMode','position','top','left','right','width','height','borderBottom','borderRight','zIndex','background','backdropFilter'];
    var NAVIN_KEYS = ['flexDirection','alignItems','justifyContent','padding','height','gap','maxWidth'];
    var HERO_KEYS = ['flex','width','minWidth','height','scrollSnapAlign','overflow','background'];
    var SEC_KEYS = ['flex','width','minWidth','height','padding','overflowY','boxSizing','scrollSnapAlign','position','background'];
    var FOOT_KEYS = ['flex','height','display','alignItems','justifyContent','padding','scrollSnapAlign','position','background'];

    function deactivate() {
        if (!mnActive) return;
        mnActive = false;

        document.body.classList.remove('mn-mode');
        clearStyles(document.body, BODY_KEYS);

        var gc = document.getElementById('gridCanvas');
        if (gc) gc.classList.remove('mn-hidden');

        clearStyles(document.querySelector('.navbar'), NAV_KEYS);
        clearStyles(document.querySelector('.nav-inner'), NAVIN_KEYS);
        clearStyles(document.querySelector('.hero'), HERO_KEYS);
        document.querySelectorAll('.section').forEach(function (sec) {
            clearStyles(sec, SEC_KEYS);
        });
        clearStyles(document.querySelector('.footer'), FOOT_KEYS);

        if (wheelHandler) {
            document.removeEventListener('wheel', wheelHandler);
            wheelHandler = null;
        }
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        velocity = 0;
    }

    window._mnActivate = activate;
    window._mnDeactivate = deactivate;
})();


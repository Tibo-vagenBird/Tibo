/* ===========================================
   Bo Ti — Portfolio Scripts
   i18n, signal canvas, grid bg, scroll reveal,
   active nav, terminal animation
   =========================================== */

// ---- i18n ----
var currentLang = "en";
var en = {};
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
    projects_title: "\u9879\u76ee",
    project_label_featured: "\u7cbe\u9009\u9879\u76ee",
    project1_name: "8052 \u56de\u6d41\u7089\u63a7\u5236\u5668",
    project1_desc: "\u4e00\u4e2a\u5b8c\u5168\u7528 8052 \u6c47\u7f16\u8bed\u8a00\u7f16\u5199\u7684\u56de\u6d41\u7118\u63a5\u63a7\u5236\u5668\uff0c\u8fd0\u884c\u5728 DE10-Lite FPGA \u5e73\u53f0\u4e0a\u3002\u6211\u8bbe\u8ba1\u4e86\u57fa\u4e8e\u4f4d\u5bfb\u5740\u5185\u5b58\u4fe1\u53f7\u603b\u7ebf\u7684\u53d1\u5e03-\u8ba2\u9605\u67b6\u6784\uff0c\u7f16\u5199\u4e86\u6240\u6709\u6838\u5fc3\u72b6\u6001\u673a\uff08\u6309\u952e\u6d88\u6296\u3001UI \u66f4\u65b0\u3001\u8ba1\u65f6\u548c 7 \u9636\u6bb5\u56de\u6d41\u63a7\u5236\u6d41\u7a0b\uff09\uff0c\u5e76\u914d\u7f6e\u4e86\u5b9a\u65f6\u5668\u548c\u4e2d\u65ad\u3002\u9879\u76ee\u4e2d\u671f\uff0c\u6211\u5ba1\u67e5\u5e76\u91cd\u5199\u4e86 2,500 \u591a\u884c\u4ee3\u7801\u4ee5\u7edf\u4e00\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f\u3002\u7cfb\u7edf\u901a\u8fc7\u8f6f PWM \u6bd4\u4f8b\u63a7\u5236\u9a71\u52a8 SSR\uff0c\u652f\u6301 4x4 \u952e\u76d8/LCD \u786c\u4ef6\u754c\u9762\u548c\u57fa\u4e8e UART \u7684 PC GUI\uff0857600 \u6ce2\u7279\u7387\uff09\u53cc\u4ea4\u4e92\uff0c\u5e76\u5305\u542b\u70ed\u7535\u5076\u6545\u969c\u68c0\u6d4b\u4e0e\u7d27\u6025\u5173\u65ad\u529f\u80fd\u3002",
    project2_name: "Ulysses \u5730\u9762\u63a7\u5236\u7ad9",
    project2_desc: "\u4e3a UBC Rocket \u7684 Ulysses \u8fd0\u8f7d\u706b\u7bad\u5f00\u53d1\u7684 Qt Quick \u5730\u9762\u63a7\u5236\u8f6f\u4ef6\u3002\u6784\u5efa\u4e86 C++ \u540e\u7aef\uff0c\u5305\u62ec\u65e0\u7ebf\u7535\u8c03\u5236\u89e3\u8c03\u5668\u7684\u4e32\u53e3\u63a5\u53e3\u3001\u544a\u8b66\u63a5\u6536/\u5904\u7406/\u663e\u793a\u7ba1\u7ebf\u548c\u53c2\u6570\u8bbe\u7f6e\u903b\u8f91\u3002\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e86\u7528\u4e8e\u8fd0\u884c\u65f6\u81ea\u5b9a\u4e49\u6570\u636e\u663e\u793a\u5e03\u5c40\u7684\u8bbe\u7f6e\u9875\u9762 UI\u3002\u8be5\u7ad9\u5305\u542b\u5b9e\u65f6\u9065\u6d4b\u4eea\u8868\u76d8\uff08\u5361\u5c14\u66fc\u6ee4\u6ce2\u59ff\u6001\u3001\u6c14\u538b\u4e0e\u73af\u5883\u6570\u636e\u3001\u53d1\u52a8\u673a\u76d1\u63a7\uff09\u3001\u53ef\u914d\u7f6e\u7684\u591a\u98de\u884c\u6a21\u5f0f PID \u63a7\u5236\u5668\u754c\u9762\uff0c\u4ee5\u53ca\u5355/\u53cc\u7aef\u53e3\u6a21\u5f0f\u7684\u65e0\u7ebf\u7535\u8c03\u5236\u89e3\u8c03\u5668\u63a7\u5236\u53f0\u3002",
    skills_title: "\u6280\u80fd",
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
    footer_text: "\u00a9 2026 \u501c\u535a\u3002\u4f7f\u7528 Rust & Rocket \u6784\u5efa\u3002",
    footer_claude: "\u5b8c\u5168\u7531 Claude Code \u5f00\u53d1\u3002"
};

// Save English defaults on load
(function () {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
        en[els[i].getAttribute("data-i18n")] = els[i].innerHTML;
    }
})();

function setLang(lang) {
    currentLang = lang;
    var translations = lang === "zh" ? zh : en;
    var btn = document.getElementById("langLabel");

    if (lang === "zh") {
        document.documentElement.lang = "zh-CN";
        document.title = "\u501c\u535a - \u5d4c\u5165\u5f0f\u8f6f\u4ef6\u5f00\u53d1\u8005";
        btn.textContent = "EN";
        var heroName = document.querySelector('.hero-name');
        if (heroName) heroName.innerHTML = '\u501c\u535a<span class="cursor">_</span>';
    } else {
        document.documentElement.lang = "en";
        document.title = "Bo Ti - Embedded Software Developer";
        btn.textContent = "CN";
        var heroName = document.querySelector('.hero-name');
        if (heroName) heroName.innerHTML = 'Bo Ti<span class="cursor">_</span>';
    }

    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute("data-i18n");
        if (translations[key]) {
            els[i].innerHTML = translations[key];
        }
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

function toggleLang() {
    setLang(currentLang === "en" ? "zh" : "en");
}

// Auto-detect country via IP
(function () {
    fetch("https://ipapi.co/json/")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (data.country_code === "CN") {
                setLang("zh");
            }
        })
        .catch(function () { });
})();


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
        ctx.fillStyle = "rgba(56, 189, 248, 0.15)";

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
        ctx.strokeStyle = "rgba(56, 189, 248, 0.06)";
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

    function drawWave() {
        ctx.clearRect(0, 0, W, H);
        drawGrid();

        // Main signal — sine-ish waveform
        ctx.beginPath();
        ctx.strokeStyle = "rgba(56, 189, 248, 0.8)";
        ctx.lineWidth = 1.8;
        ctx.shadowColor = "rgba(56, 189, 248, 0.5)";
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

    resize();
    drawWave();
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

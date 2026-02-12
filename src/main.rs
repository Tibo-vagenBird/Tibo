#[macro_use]
extern crate rocket;

use rocket::fs::FileServer;
use rocket::serde::json::serde_json::json;
use rocket_dyn_templates::Template;

#[get("/")]
fn index() -> Template {
    let context = json!({
        "name": "Bo Ti",
        "title": "Embedded Software Developer",
        "bio": "2nd year Electrical Engineering student at UBC pursuing embedded software development — drivers, firmware, and real-time systems. Experienced in low-level programming with Assembly and C/C++, with scripting proficiency in Python for automation and tooling.",
        "github": "https://github.com/Tibo-vagenBird",
        "linkedin": "https://www.linkedin.com/in/tibo-bcece71/",
        "projects": [
            {
                "name": "8052 Oven Reflow Controller",
                "description": "A reflow soldering controller written entirely in 8052 Assembly on the DE10-Lite FPGA platform. I designed the pub-sub architecture using bit-addressable memory as a signal bus, wrote all core FSMs (button debouncing, UI updates, timing, and the 7-stage reflow control workflow), and configured timers and interrupts. Mid-project, I reviewed and rewrote 2,500+ lines of code to enforce the pub-sub pattern as new features were merged. The system drives an SSR via soft-PWM with proportional control, supports dual interaction through a 4x4 keypad/LCD hardware interface and a UART-based PC GUI (57600 baud), and includes thermocouple fault detection with emergency shutdown.",
                "tech": "8052 Assembly, Cooperative Multitasking, Pub-Sub Architecture, FSM Design, SSR PWM Control, UART, DE10-Lite FPGA",
                "link": "https://github.com/Elec-291-Group/Reflow-Oven-Controller"
            },
            {
                "name": "Ulysses Ground Control Station",
                "description": "Qt Quick ground control software for UBC Rocket's Ulysses vehicle. Built the C++ backend including the serial interface with the radio modem, alarm receive/processing/display pipeline, and parameter setting logic. Designed and implemented the settings page UI for customizing data display layouts at runtime. The station features a real-time telemetry dashboard with Kalman-filtered orientation, barometric and environmental data, engine control monitoring, a configurable PID controller interface for multiple flight modes, and a radio modem console with single/dual-port modes.",
                "tech": "C++, QML, Qt Quick, Serial Communication, Radio Modem",
                "link": "https://github.com/UBC-Rocket/ulysses-ground-control"
            }
        ],
        "skills": [
            { "category": "Languages", "items": "8052 Assembly, C/C++, QML, Python" },
            { "category": "Embedded & Hardware", "items": "FSM Design, PWM Control, UART/Serial Communication, Pub-Sub Architecture, Cooperative Multitasking, Timer/Interrupt Configuration" },
            { "category": "Frameworks & Libraries", "items": "Qt Quick" },
            { "category": "Scripting & Automation", "items": "Selenium, BeautifulSoup, OpenCV, NumPy, Pandas, Matplotlib" },
            { "category": "Software & Tools", "items": "Quartus, Qt Creator, VS Code, Git, Office Suite" },
            { "category": "CAD / Design", "items": "SolidWorks (Advanced Surfacing, Sheet Metal, Assembly)" },
            { "category": "Lab Equipment", "items": "Logic Analyzer, Multimeter, Oscilloscope, Signal Generator" }
        ],
        "experiences": [
            {
                "role": "Ground Control Software Engineer — Embedded Interface",
                "company": "UBC Rocket",
                "period": "2025 - Present",
                "description": "Building the ground control station for Ulysses using Qt Quick (C++/QML). Responsible for the C++ backend, radio modem interface, alarm processing, parameter settings, and settings page UI."
            }
        ],
        "email": "bti@student.ubc.ca"
    });

    Template::render("index", &context)
}

#[shuttle_runtime::main]
async fn main() -> shuttle_rocket::ShuttleRocket {
    let rocket = rocket::build()
        .mount("/", routes![index])
        .mount("/static", FileServer::from("static"))
        .attach(Template::fairing());

    Ok(rocket.into())
}

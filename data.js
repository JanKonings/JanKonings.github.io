const projects = [
  {
    "id": "processor",
    "number": "01",
    "category": "Digital",
    "label": "DIGITAL DESIGN",
    "title": "A processor, built from the gates up.",
    "name": "LEGv8 Five-Stage Pipelined Processor",
    "summary": "A five-stage processor in VHDL, with forwarding, stalling, and load-use hazard detection.",
    "tags": [
      "VHDL",
      "GHDL",
      "GTKWave"
    ],
    "repo": "5-Stage-Pipelined-Processor-VHDL-",
    "visual": "pipeline",
    "accent": "lime",
    "description": "Designed and implemented a five-stage LEGv8 processor, an ARMv8 subset, covering instruction fetch, decode, execute, memory access, and write back.",
    "details": [
      "Built the program counter, register file, ALU, control logic, instruction memory, and data memory.",
      "Implemented forwarding paths and pipeline stalls to handle data hazards, including load-use dependencies.",
      "Verified instruction flow and hazard behavior with testbenches and waveform analysis."
    ],
    "keywords": [
      "FPGA",
      "processor",
      "computer architecture",
      "pipeline",
      "verification",
      "simulation",
      "hazard detection",
      "ARM"
    ],
    "collaborators": []
  },
  {
    "id": "temperature",
    "number": "02",
    "category": "Embedded",
    "label": "EMBEDDED / IoT",
    "title": "Less radio. More battery.",
    "name": "Low-Power IoT Temperature Node",
    "summary": "A custom PCB and ESP32-C3 node that sleeps between readings and batches data over MQTT.",
    "tags": [
      "ESP32-C3",
      "ESP-IDF",
      "MQTT",
      "PCB"
    ],
    "repo": "EE153-Final-Code-for-Temperature-Module",
    "image": "temperature-node.jpg",
    "accent": "teal",
    "description": "A battery-powered outdoor temperature node with hourly measurements, persistent storage, and batched wireless reporting. Designed for six months or longer of operation; this is a design target, not a verified field-runtime claim.",
    "details": [
      "Integrated an ESP32-C3, TMP1075 I²C sensor, buck converter, and custom single-layer PCB in a weather-resistant enclosure.",
      "Used deep sleep and GPIO-controlled sensor power to reduce duty-cycle energy consumption.",
      "Stored timestamped measurements in NVS; synchronized time using NTP when needed.",
      "Transmitted batches of 12 samples twice daily over WiFi/MQTT and retained readings during outages."
    ],
    "keywords": [
      "C",
      "firmware",
      "wireless",
      "WiFi",
      "I2C",
      "NVS",
      "power",
      "low power",
      "battery",
      "sensor",
      "embedded"
    ],
    "collaborators": [
      "Leah Berube",
      "Paul Hickey"
    ]
  },
  {
    "id": "rc",
    "number": "03",
    "category": "Embedded",
    "label": "EMBEDDED / WIRELESS",
    "title": "From joystick to motion.",
    "name": "STM32 + ESP32 RC Vehicle",
    "summary": "A modular wireless control chain connecting joystick input to steering and motor outputs.",
    "tags": [
      "STM32",
      "ESP-NOW",
      "C / C++",
      "UART"
    ],
    "repo": "EE14-Final-RC-Car",
    "image": "rc-car.jpg",
    "accent": "orange",
    "description": "An EE14 team project combining STM32 microcontrollers and ESP32 radios for wireless vehicle control. The STM32 captures analog joystick inputs, ESP32 modules relay them over ESP-NOW, and the receiving STM32 drives the motors.",
    "details": [
      "Built a four-byte joystick data frame and a UART state machine for the communication chain.",
      "Used PWM for steering and speed, plus an H-bridge for motor direction.",
      "Programmed STM32 firmware in C using PlatformIO and ESP32 firmware in C++ using Arduino IDE.",
      "Integrated a LiPo battery and buck converter for the power system."
    ],
    "keywords": [
      "firmware",
      "embedded",
      "wireless",
      "robot",
      "robotics",
      "motor control",
      "ADC",
      "PWM",
      "H-bridge",
      "PlatformIO"
    ],
    "collaborators": [
      "Isaac Medina",
      "Ryan Chen"
    ]
  },
  {
    "id": "game",
    "number": "04",
    "category": "Digital",
    "label": "FPGA / INTERACTIVE",
    "title": "A game running in hardware.",
    "name": "Jumbo Accelerator Game",
    "summary": "An FPGA platformer with NES input, VGA video timing, sprite animation, and collision logic.",
    "tags": [
      "VHDL",
      "iCE40UP5K",
      "VGA",
      "FSM"
    ],
    "repo": "JUMBO-Accelerator-Game",
    "visual": "game",
    "accent": "purple",
    "description": "An accelerator game inspired by the Chrome dinosaur game, implemented entirely in VHDL on an iCE40UP5K FPGA. Real-time input and rendering are handled in hardware.",
    "details": [
      "Implemented NES controller input and 640 × 480 VGA video timing.",
      "Created custom sprites and animations with modular finite-state-machine game logic.",
      "Implemented hardware-level collision detection.",
      "Used Lattice Radiant for synthesis, modeling, and FPGA implementation."
    ],
    "keywords": [
      "FPGA",
      "digital logic",
      "real time",
      "finite state machine",
      "controller",
      "graphics",
      "hardware",
      "Lattice Radiant"
    ],
    "collaborators": [
      "Isaac Medina",
      "Ryan Chen",
      "Jacob Gerson"
    ]
  },
  {
    "id": "robot",
    "number": "05",
    "category": "Embedded",
    "label": "ROBOTICS / CONTROL",
    "title": "Sense the lane. Find the way.",
    "name": "Autonomous Arena Robot",
    "summary": "Color-based lane following and IR collision detection, integrated with custom control electronics.",
    "tags": [
      "Arduino",
      "C++",
      "Sensors",
      "PCB"
    ],
    "repo": "Junior-Design-Bot",
    "visual": "robot",
    "accent": "blue",
    "description": "An autonomous arena-course robot built around the Arduino UNO WiFi Rev2. The team implemented solo and paired red/blue lane-following variants and tested in light and dark rooms.",
    "details": [
      "Calibrated color sensing using LED illumination and phototransistor readings.",
      "Used an IR LED and phototransistor for obstacle detection.",
      "Integrated custom PCBs, H-bridge motor control, and buck-regulated power.",
      "Organized firmware in PlatformIO and used Python/WebSocket tools for calibration and debugging."
    ],
    "keywords": [
      "embedded",
      "firmware",
      "robotics",
      "robot",
      "motor control",
      "PWM",
      "PlatformIO",
      "calibration",
      "control systems"
    ],
    "collaborators": [
      "Drew Galen",
      "Isaac Medina",
      "Ryan Chen"
    ]
  },
  {
    "id": "gerp",
    "number": "06",
    "category": "Software",
    "label": "C++ / DATA STRUCTURES",
    "title": "Search deeper. Find faster.",
    "name": "Gerp: Recursive File Search",
    "summary": "A grep-inspired CLI that indexes file and line occurrences with a custom hash table.",
    "tags": [
      "C++",
      "Hash table",
      "File I/O",
      "CLI"
    ],
    "repo": "GERP--Recursive-File-Search-Tool",
    "visual": "terminal",
    "accent": "lime",
    "description": "A command-line search tool that recursively scans directories and supports case-sensitive and case-insensitive word queries. Built for large text collections, including Project Gutenberg.",
    "details": [
      "Mapped normalized tokens to original forms and file/line occurrences using a custom hash table.",
      "Returned matches with their file and line context.",
      "Designed file I/O and memory-aware data structures for large collections."
    ],
    "keywords": [
      "algorithms",
      "software",
      "data structures",
      "indexing",
      "search",
      "Linux",
      "Unix",
      "systems",
      "memory"
    ],
    "collaborators": []
  },
  {
    "id": "curation",
    "number": "07",
    "category": "Software",
    "label": "WEB / ENTREPRENEURSHIP",
    "title": "A storefront for a real brand.",
    "name": "Curation E-commerce Website",
    "summary": "A custom web experience for the clothing brand I co-founded, connected to Shopify checkout.",
    "tags": [
      "JavaScript",
      "HTML / CSS",
      "PHP",
      "MySQL"
    ],
    "repo": "Curation1-Website-Final",
    "visual": "commerce",
    "accent": "orange",
    "description": "Built the e-commerce website for Curation, a clothing brand I co-founded in July 2024. The public repository describes early-access signup, responsive design, product-drop animation, and Shopify Storefront API integration.",
    "details": [
      "Built the frontend with HTML, CSS, and JavaScript.",
      "Integrated payment and database functionality; the repository lists PHP, MySQL, and Shopify Storefront API.",
      "Helped scale the brand to 400+ units sold and $80K+ revenue, as reported in my résumé.",
      "Coordinated with a New York manufacturer and led brand strategy and social media growth."
    ],
    "keywords": [
      "web",
      "frontend",
      "front end",
      "e-commerce",
      "Shopify",
      "responsive design",
      "database",
      "product",
      "entrepreneurship",
      "business"
    ],
    "collaborators": []
  },
  {
    "id": "ski-binding",
    "number": "08",
    "category": "CAD",
    "label": "CAD / 3D MODELING",
    "title": "From a real binding to a full CAD model.",
    "name": "LOOK Pivot Binding — SolidWorks",
    "summary": "Reverse-engineered my own LOOK Pivot binding through disassembly and measurement, then rebuilt it in SolidWorks.",
    "tags": [
      "SolidWorks",
      "Reverse engineering",
      "Assemblies"
    ],
    "linkLabel": "Repository",
    "accent": "blue",
    "description": "Reconstructed a LOOK Pivot ski binding in SolidWorks using my own old bindings as the physical reference. I disassembled the toe and heel pieces, measured the parts directly, and modeled how the components fit together. The project includes separate toe and heel assemblies, a full binding assembly, an animation, and detailed engineering drawings.",
    "details": [
      "Started with the toe piece, then modeled the more complex heel assembly.",
      "Used direct measurements of the disassembled binding rather than relying on photos or videos.",
      "Created native SolidWorks part and assembly files, including PivotBinding, ToePiece, and HeelPiece.",
      "Produced an exploded assembly drawing with a 34-item bill of materials and a dimensioned brake-plate drawing.",
      "Created an animation showing assembly movement; the project reflection records intermittent heel-motion definition issues during animation setup."
    ],
    "keywords": [
      "CAD",
      "3D",
      "modeling",
      "modelling",
      "SolidWorks",
      "mechanical",
      "ski",
      "binding",
      "reverse engineering",
      "assembly",
      "assemblies",
      "drawings",
      "dimensioning",
      "motion"
    ],
    "collaborators": [],
    "repo": "Ski-Binding-3D-Model-Solidworks",
    "image": "ski-binding-disassembly.jpg",
    "video": "ski-binding-animation.mp4",
    "poster": "ski-binding-poster.jpg",
    "documents": [
      {
        "label": "Exploded assembly drawing",
        "file": "ski-assembly-drawing.pdf"
      },
      {
        "label": "Brake-plate drawing",
        "file": "ski-brake-plate-drawing.pdf"
      },
      {
        "label": "Project description",
        "file": "ski-project-description.pdf"
      }
    ]
  }
];

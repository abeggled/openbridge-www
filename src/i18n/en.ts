export const en = {
  meta: {
    title: 'openbridge server — Open Multiprotocol Server for Building Automation',
    description:
      'openbridge server is an open-source, MIT-licensed multiprotocol server for building automation. Connect KNX, Modbus, MQTT, Home Assistant, ioBroker and more.',
    lang: 'en',
  },

  nav: {
    what: 'About',
    protocols: 'Protocols',
    features: 'Features',
    install: 'Installation',
    generator: 'Compose Generator',
    github: 'GitHub',
    lang_switch: 'DE',
    lang_switch_label: 'Switch to German',
  },

  hero: {
    badge: 'Open Source · MIT · Pre-release v0.1',
    badge_prefix: 'Current version:',
    title_line1: 'The open',
    title_line2: 'multiprotocol server',
    title_line3: 'for building automation.',
    subtitle:
      'Connect KNX, Modbus TCP/RTU, 1-Wire, MQTT, Home Assistant, ioBroker and more — through a single, API-first, open-source hub. No vendor lock-in. Ever.',
    cta_start: 'Get Started',
    cta_github: 'View on GitHub',
    stats: [
      { value: '8+', label: 'Protocols' },
      { value: '85+', label: 'KNX DPT Types' },
      { value: '35+', label: 'Logic Blocks' },
      { value: 'MIT', label: 'License' },
    ],
  },

  whatis: {
    title: 'What is openbridge server?',
    text1:
      'openbridge server (obs) is a modern, open-source replacement for proprietary building automation servers. It connects diverse industrial and home protocols through a unified, extensible core — built API-first, so every feature you see in the web GUI is available via REST or WebSocket.',
    text2:
      'Originally designed as an open alternative to the Timberwolf Server (TWS), obs is built on Python 3.11+, runs on Linux (x86_64 and ARM Cortex-A72), and is MIT-licensed with no restrictions.',
    cards: [
      {
        icon: 'api',
        title: 'API-First Architecture',
        text: 'Complete REST API + WebSocket. The web GUI is one of many consumers — your automation scripts get the same first-class access.',
      },
      {
        icon: 'oss',
        title: 'Open Source · MIT',
        text: 'Every line is MIT licensed. Fork it, extend it, embed it in your products. No activation keys, no subscription fees.',
      },
      {
        icon: 'multi',
        title: '8+ Protocol Adapters',
        text: 'KNX, Modbus TCP/RTU, 1-Wire, MQTT, Home Assistant, ioBroker, Zeitschaltuhr — each fully independent, multiple instances per protocol.',
      },
      {
        icon: 'db',
        title: 'Flexible History Backends',
        text: 'SQLite works out of the box with zero configuration. Plug in InfluxDB (v1/v2/v3) or TimescaleDB at runtime via the UI.',
      },
    ],
  },

  protocols: {
    title: 'Supported Protocols',
    subtitle:
      'Each protocol runs as a fully independent adapter. Run multiple instances of the same protocol simultaneously — with separate configurations.',
    badge_planned: 'Planned',
    multi_note: 'Multiple simultaneous instances — each protocol can run several independent configurations in parallel.',
    items: [
      {
        name: 'KNX / IP',
        desc: 'Tunneling & Routing. 85+ DPT types via extensible registry.',
        detail: 'xknx · DPT 1–251 · multi-instance',
        planned: false,
      },
      {
        name: 'Modbus TCP',
        desc: 'Multiple simultaneous connections with configurable byte/word order.',
        detail: 'pymodbus · coils, registers · multi-instance',
        planned: false,
      },
      {
        name: 'Modbus RTU',
        desc: 'Serial RS-485 communication for legacy field devices.',
        detail: 'pymodbus · serial · RS-485',
        planned: true,
      },
      {
        name: '1-Wire',
        desc: 'Linux /sys/bus/w1/ sensor integration. DS18B20 and more.',
        detail: 'w1thermsensor · DS18B20 · temperature',
        planned: true,
      },
      {
        name: 'MQTT',
        desc: 'Connect to any external MQTT broker. Bidirectional.',
        detail: 'aiomqtt · TLS · auth',
        planned: false,
      },
      {
        name: 'Home Assistant',
        desc: 'Real-time state sync and command via WebSocket API.',
        detail: 'WebSocket API · bidirectional',
        planned: false,
      },
      {
        name: 'ioBroker',
        desc: 'Bidirectional state management. Import/export of objects.',
        detail: 'Socket.IO · import/export',
        planned: false,
      },
      {
        name: 'Scheduler',
        desc: 'Time-based triggers with cron, holidays, and vacation periods.',
        detail: 'croniter · astral · holidays',
        planned: false,
      },
    ],
  },

  features: {
    title: 'Why openbridge server?',
    subtitle: 'Built from the ground up for modern building automation — open, fast, and extensible.',
    items: [
      {
        icon: 'knx',
        title: '85+ KNX DPT Types',
        text: 'The most complete open-source KNX datapoint type registry. Extensible via registry pattern — add new DPTs without touching core code.',
      },
      {
        icon: 'logic',
        title: 'Visual Logic Editor',
        text: '35+ block types for visual automation: logic gates, math, timers, Python scripts, HTTP calls, astronomical triggers, push notifications.',
      },
      {
        icon: 'db2',
        title: 'Zero-dependency History',
        text: 'SQLite is built-in and needs no setup. InfluxDB (v1/v2/v3) and TimescaleDB are optional upgrades configured entirely at runtime.',
      },
      {
        icon: 'multi2',
        title: 'True Multi-instance',
        text: 'Run 2× KNX, 3× Modbus TCP, and 2× MQTT simultaneously — each fully independent with its own configuration and connection.',
      },
      {
        icon: 'import',
        title: 'Full Import / Export',
        text: 'Export and import complete configurations as JSON. Import KNX .knxproj files to auto-create group addresses in seconds.',
      },
      {
        icon: 'deploy',
        title: 'Multiple Deployment Options',
        text: 'Pre-built Proxmox LXC template or Docker Compose — production-ready in minutes. systemd managed on LXC for maximum reliability.',
      },
    ],
  },

  install: {
    title: 'Installation',
    subtitle: 'Proxmox LXC — up and running in minutes.',
    lxc: {
      intro:
        'The LXC template includes a complete Ubuntu 26.04 system with openbridge server and automatically starts the service when the container boots.',
      steps: [
        {
          title: 'Download template',
          items: [
            'Go to the GitHub Releases page and copy the URL of the .tar.zst file and the SHA512 hash from the LXC Template section.',
            'In the Proxmox web UI navigate to Datacenter → Storage → local → CT Templates.',
            'Click Download from URL.',
            'Paste the copied URL and click Query URL.',
            'Select SHA512 as the hash algorithm.',
            'Paste the copied hash.',
            'Click Download.',
          ],
        },
        {
          title: 'Create container',
          items: [
            'In the Proxmox menu select Create CT.',
            'Choose the downloaded ubuntu-plucky-openbridgeserver_… as template.',
            'Configure hostname, password, CPU, RAM and network as needed — recommended: at least 512 MB RAM.',
            'Start the container.',
          ],
        },
        {
          title: 'Access',
          note: 'Open http://<container-ip>:8080 in your browser.\nDefault credentials: admin / admin — change the password immediately after first login (Settings → Password).',
        },
        {
          title: 'Adjust configuration (optional)',
          code: '# Set environment variables in /etc/obs.env, e.g.:\nOBS_MQTT__HOST=192.168.1.10\nOBS_SECURITY__JWT_SECRET=my-secret-password\n\n# Restart the service\nsystemctl restart obs',
        },
      ],
      tip: 'Logs are available via: journalctl -u obs -f',
    },
  },

  generator: {
    title: 'Docker Compose Generator',
    subtitle:
      'Generate a complete docker-compose.yml for your setup — select the services you need, fill in the config, and copy or download the result.',
    section_base: 'Base (always included)',
    section_optional: 'Optional Services',
    base_desc: 'openbridge server + Mosquitto MQTT Broker',
    influx_label: 'InfluxDB',
    grafana_label: 'Grafana',
    proxy_label: 'Reverse Proxy',
    version_labels: {
      influx_none: 'None',
      influx1: 'InfluxDB 1.x',
      influx2: 'InfluxDB 2.x',
      influx3: 'InfluxDB 3 Core',
      grafana_none: 'None',
      grafana_ce: 'Grafana CE (free)',
      grafana_ent: 'Grafana Enterprise',
      proxy_none: 'None',
      proxy_caddy: 'Caddy (auto-HTTPS)',
      proxy_nginx: 'Nginx',
      proxy_npm: 'Nginx Proxy Manager',
    },
    config_title: 'Configuration',
    domain: 'Domain / Hostname',
    domain_placeholder: 'obs.example.com',
    timezone: 'Timezone',
    timezone_placeholder: 'Europe/Zurich',
    obs_port: 'OBS Port (if no proxy)',
    generate_btn: 'Generate',
    output_title: 'Generated Files',
    tab_compose: 'docker-compose.yml',
    tab_env: '.env.example',
    tab_caddyfile: 'Caddyfile',
    tab_nginx: 'nginx.conf',
    copy: 'Copy',
    copied: 'Copied!',
    download: 'Download',
    note_proxy:
      'With a reverse proxy, OBS is not exposed directly. Access it via your domain.',
    note_influx3:
      'InfluxDB 3 Core uses a new storage engine. Configure the history backend in OBS settings after startup.',
  },

  footer: {
    tagline: 'Built for the building automation community.',
    license: 'MIT License',
    github: 'GitHub',
    issues: 'Report Issue',
    links_title: 'Links',
    legal_title: 'Legal',
    copyright: '© 2026 openbridge server contributors',
  },
};

export type Translations = typeof en;

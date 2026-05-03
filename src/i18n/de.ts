import type { Translations } from './en';

export const de: Translations = {
  meta: {
    title: 'openbridge server — Offener Multiprotokoll-Server für Gebäudeautomation',
    description:
      'openbridge server ist ein quelloffener, MIT-lizenzierter Multiprotokoll-Server für Gebäudeautomation. Verbinde KNX, Modbus, MQTT, Home Assistant, ioBroker und mehr.',
    lang: 'de',
  },

  nav: {
    what: 'Über',
    protocols: 'Protokolle',
    features: 'Features',
    install: 'Installation',
    generator: 'Compose Generator',
    github: 'GitHub',
    lang_switch: 'EN',
    lang_switch_label: 'Auf Englisch wechseln',
  },

  hero: {
    badge: 'Open Source · MIT · Pre-release v0.1',
    title_line1: 'Der offene',
    title_line2: 'Multiprotokoll-Server',
    title_line3: 'für Gebäudeautomation.',
    subtitle:
      'Verbinde KNX, Modbus TCP/RTU, 1-Wire, MQTT, Home Assistant, ioBroker und mehr — über einen einzigen, API-first, quelloffenen Hub. Ohne Vendor-Lock-in. Für immer.',
    cta_start: 'Loslegen',
    cta_github: 'Auf GitHub ansehen',
    stats: [
      { value: '8+', label: 'Protokolle' },
      { value: '85+', label: 'KNX DPT-Typen' },
      { value: '35+', label: 'Logik-Blöcke' },
      { value: 'MIT', label: 'Lizenz' },
    ],
  },

  whatis: {
    title: 'Was ist der openbridge server?',
    text1:
      'Der openbridge server (obs) ist ein moderner, quelloffener Ersatz für proprietäre Gebäudeautomations-Server. Er verbindet industrielle und Heimprotokolle über einen einheitlichen, erweiterbaren Kern — API-first entwickelt, sodass jede Funktion der Web-GUI auch per REST oder WebSocket verfügbar ist.',
    text2:
      'Ursprünglich als offene Alternative zum Timberwolf Server (TWS) entwickelt, basiert obs auf Python 3.11+, läuft auf Linux (x86_64 und ARM Cortex-A72) und ist MIT-lizenziert — ohne jede Einschränkung.',
    cards: [
      {
        icon: 'api',
        title: 'API-First Architektur',
        text: 'Vollständige REST API + WebSocket. Die Web-GUI ist nur einer von vielen Clients — deine Automatisierungsskripte haben denselben erstklassigen Zugriff.',
      },
      {
        icon: 'oss',
        title: 'Open Source · MIT',
        text: 'Jede Zeile ist MIT-lizenziert. Fork, erweitern, in eigene Produkte einbetten. Keine Aktivierungsschlüssel, keine Abonnements.',
      },
      {
        icon: 'multi',
        title: '8+ Protokoll-Adapter',
        text: 'KNX, Modbus TCP/RTU, 1-Wire, MQTT, Home Assistant, ioBroker, Zeitschaltuhr — jeder vollständig unabhängig, mehrere Instanzen pro Protokoll möglich.',
      },
      {
        icon: 'db',
        title: 'Flexible History-Backends',
        text: 'SQLite funktioniert ohne Konfiguration. InfluxDB (v1/v2/v3) oder TimescaleDB werden zur Laufzeit über die UI eingebunden.',
      },
    ],
  },

  protocols: {
    title: 'Unterstützte Protokolle',
    subtitle:
      'Jedes Protokoll läuft als vollständig unabhängiger Adapter. Mehrere Instanzen desselben Protokolls gleichzeitig — jede mit eigener Konfiguration.',
    badge_planned: 'Geplant',
    multi_note: 'Mehrere simultane Instanzen — jedes Protokoll kann mehrere unabhängige Konfigurationen parallel betreiben.',
    items: [
      {
        name: 'KNX / IP',
        desc: 'Tunneling & Routing. 85+ DPT-Typen über erweiterbare Registry.',
        detail: 'xknx · DPT 1–251 · Multi-Instanz',
        planned: false,
      },
      {
        name: 'Modbus TCP',
        desc: 'Mehrere simultane Verbindungen mit konfigurierbarer Byte-/Wortreihenfolge.',
        detail: 'pymodbus · Coils, Register · Multi-Instanz',
        planned: false,
      },
      {
        name: 'Modbus RTU',
        desc: 'Serielle RS-485 Kommunikation für ältere Feldgeräte.',
        detail: 'pymodbus · seriell · RS-485',
        planned: true,
      },
      {
        name: '1-Wire',
        desc: 'Linux /sys/bus/w1/ Sensorintegration. DS18B20 und weitere.',
        detail: 'w1thermsensor · DS18B20 · Temperatur',
        planned: true,
      },
      {
        name: 'MQTT',
        desc: 'Verbindung zu externen MQTT-Brokern. Bidirektional.',
        detail: 'aiomqtt · TLS · Authentifizierung',
        planned: false,
      },
      {
        name: 'Home Assistant',
        desc: 'Echtzeit-Statussynchronisierung und Steuerung per WebSocket API.',
        detail: 'WebSocket API · bidirektional',
        planned: false,
      },
      {
        name: 'ioBroker',
        desc: 'Bidirektionale Zustandsverwaltung. Import/Export von Objekten.',
        detail: 'Socket.IO · Import/Export',
        planned: false,
      },
      {
        name: 'Zeitschaltuhr',
        desc: 'Zeitbasierte Trigger mit Cron, Feiertagen und Urlaubszeiten.',
        detail: 'croniter · astral · Feiertage',
        planned: false,
      },
    ],
  },

  features: {
    title: 'Warum openbridge server?',
    subtitle: 'Von Grund auf für moderne Gebäudeautomation entwickelt — offen, schnell und erweiterbar.',
    items: [
      {
        icon: 'knx',
        title: '85+ KNX DPT-Typen',
        text: 'Die umfangreichste Open-Source KNX-Datenpunktypen-Registry. Erweiterbar per Registry-Pattern — neue DPTs ohne Eingriff in den Kerncode.',
      },
      {
        icon: 'logic',
        title: 'Visueller Logik-Editor',
        text: '35+ Block-Typen für visuelle Automatisierung: Logikgatter, Mathematik, Timer, Python-Skripte, HTTP-Aufrufe, Astro-Trigger, Push-Benachrichtigungen.',
      },
      {
        icon: 'db2',
        title: 'Nullabhängige Historie',
        text: 'SQLite ist eingebaut und braucht keine Konfiguration. InfluxDB (v1/v2/v3) und TimescaleDB sind optionale Upgrades, die vollständig zur Laufzeit konfiguriert werden.',
      },
      {
        icon: 'multi2',
        title: 'Echte Multi-Instanz',
        text: '2× KNX, 3× Modbus TCP und 2× MQTT gleichzeitig — jede vollständig unabhängig mit eigener Konfiguration und Verbindung.',
      },
      {
        icon: 'import',
        title: 'Vollständiger Import / Export',
        text: 'Gesamtkonfigurationen als JSON exportieren und importieren. KNX .knxproj-Dateien importieren, um Gruppenadressen in Sekunden anzulegen.',
      },
      {
        icon: 'deploy',
        title: 'Mehrere Deployment-Optionen',
        text: 'Fertiges Proxmox LXC-Template oder Docker Compose — produktionsreif in Minuten. Systemd-verwaltet auf LXC für maximale Zuverlässigkeit.',
      },
    ],
  },

  install: {
    title: 'Installation',
    subtitle: 'Proxmox LXC — in wenigen Minuten einsatzbereit.',
    lxc: {
      intro:
        'Das LXC-Template enthält ein vollständiges Ubuntu 26.04-System mit openbridge server und startet den Dienst automatisch beim Hochfahren des Containers.',
      steps: [
        {
          title: 'Template herunterladen',
          items: [
            'Auf der Release-Seite die URL der .tar.zst-Datei sowie den SHA512-Hash aus dem Abschnitt LXC Template kopieren.',
            'In der Proxmox-Weboberfläche zu Datacenter → Storage → local → CT Templates navigieren.',
            'Download from URL klicken.',
            'Die kopierte URL einfügen und auf Query URL klicken.',
            'Als Hash-Algorithmus SHA512 auswählen.',
            'Den kopierten Hash einfügen.',
            'Auf Download klicken.',
          ],
        },
        {
          title: 'Container erstellen',
          items: [
            'Im Proxmox-Menü Create CT wählen.',
            'Als Template das gerade heruntergeladene ubuntu-plucky-openbridgeserver_… auswählen.',
            'Hostname, Passwort, CPU, RAM und Netzwerk nach Bedarf konfigurieren — empfohlen: mindestens 512 MB RAM.',
            'Container starten.',
          ],
        },
        {
          title: 'Zugriff',
          note: 'http://<container-ip>:8080 im Browser öffnen.\nStandardzugang: admin / admin — Passwort sofort nach der ersten Anmeldung ändern (Einstellungen → Passwort).',
        },
        {
          title: 'Konfiguration anpassen (optional)',
          code: '# Umgebungsvariablen in /etc/obs.env setzen, z. B.:\nOBS_MQTT__HOST=192.168.1.10\nOBS_SECURITY__JWT_SECRET=mein-geheimes-passwort\n\n# Dienst neu starten\nsystemctl restart obs',
        },
      ],
      tip: 'Logs verfügbar via: journalctl -u obs -f',
    },
  },

  generator: {
    title: 'Docker Compose Generator',
    subtitle:
      'Erstelle eine vollständige docker-compose.yml für dein Setup — wähle die benötigten Services, fülle die Konfiguration aus und kopiere oder lade das Ergebnis herunter.',
    section_base: 'Basis (immer enthalten)',
    section_optional: 'Optionale Services',
    base_desc: 'openbridge server + Mosquitto MQTT Broker',
    influx_label: 'InfluxDB',
    grafana_label: 'Grafana',
    proxy_label: 'Reverse Proxy',
    version_labels: {
      influx_none: 'Keines',
      influx1: 'InfluxDB 1.x',
      influx2: 'InfluxDB 2.x',
      influx3: 'InfluxDB 3 Core',
      grafana_none: 'Keines',
      grafana_ce: 'Grafana CE (kostenlos)',
      grafana_ent: 'Grafana Enterprise',
      proxy_none: 'Keiner',
      proxy_caddy: 'Caddy (Auto-HTTPS)',
      proxy_nginx: 'Nginx',
      proxy_npm: 'Nginx Proxy Manager',
    },
    config_title: 'Konfiguration',
    domain: 'Domain / Hostname',
    domain_placeholder: 'obs.example.com',
    timezone: 'Zeitzone',
    timezone_placeholder: 'Europe/Zurich',
    obs_port: 'OBS-Port (ohne Proxy)',
    generate_btn: 'Generieren',
    output_title: 'Generierte Dateien',
    tab_compose: 'docker-compose.yml',
    tab_env: '.env.example',
    tab_caddyfile: 'Caddyfile',
    tab_nginx: 'nginx.conf',
    copy: 'Kopieren',
    copied: 'Kopiert!',
    download: 'Download',
    note_proxy:
      'Mit Reverse Proxy ist OBS nicht direkt exponiert. Zugriff über deine Domain.',
    note_influx3:
      'InfluxDB 3 Core verwendet eine neue Storage-Engine. Das History-Backend in den OBS-Einstellungen nach dem Start konfigurieren.',
  },

  footer: {
    tagline: 'Entwickelt für die Gebäudeautomations-Community.',
    license: 'MIT-Lizenz',
    github: 'GitHub',
    issues: 'Problem melden',
    links_title: 'Links',
    legal_title: 'Rechtliches',
    copyright: '© 2026 openbridge server Mitwirkende',
  },
};

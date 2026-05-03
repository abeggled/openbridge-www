---
title: Erste Schritte
description: openbridge server installieren und in Betrieb nehmen
order: 1
---

# Erste Schritte

openbridge server ist ein quelloffener, MIT-lizenzierter Multiprotokoll-Server für die Gebäudeautomation. Er verbindet KNX, Modbus, MQTT, Home Assistant, ioBroker und weitere Systeme über eine einheitliche REST-API.

## Voraussetzungen

Für den Betrieb von openbridge server benötigst du:

- **Docker** und **Docker Compose** (empfohlen) oder eine native Linux-Umgebung
- Mindestens 512 MB RAM (1 GB empfohlen)
- Eine Netzwerkverbindung zu deinen Gebäudeautomations-Geräten

## Installation mit Docker Compose

Der einfachste Weg ist die Installation via Docker Compose. Erstelle eine Datei `compose.yml` mit folgendem Inhalt:

```yaml
services:
  openbridge:
    image: ghcr.io/abeggled/openbridgeserver:latest
    restart: unless-stopped
    ports:
      - "8080:8080"
    volumes:
      - ./config:/app/config
      - ./data:/app/data
```

Starte den Server anschliessend mit:

```bash
docker compose up -d
```

## Erste Konfiguration

Nach dem Start erreichst du die API unter `http://localhost:8080`. Die Konfigurationsdateien befinden sich im Verzeichnis `./config`.

### KNX verbinden

Um eine KNX-Verbindung einzurichten, füge in deiner Konfiguration folgendes hinzu:

```yaml
knx:
  enabled: true
  host: 192.168.1.10   # IP-Adresse deines KNX IP-Routers
  port: 3671
```

### MQTT verbinden

```yaml
mqtt:
  enabled: true
  broker: mqtt://192.168.1.5:1883
  topic_prefix: openbridge/
```

## Nächste Schritte

- [Protokolle konfigurieren](/de/docs/protokolle) — vollständige Referenz aller unterstützten Protokolle
- [REST API](/de/docs/api) — Schnittstellen-Dokumentation
- [Compose Generator](/de/#generator) — Konfiguration automatisch generieren

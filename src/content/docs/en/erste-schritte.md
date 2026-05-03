---
title: Getting Started
description: Installing and setting up openbridge server
order: 1
---

# Getting Started

openbridge server is an open-source, MIT-licensed multi-protocol server for building automation. It connects KNX, Modbus, MQTT, Home Assistant, ioBroker, and other systems through a unified REST API.

## Prerequisites

To run openbridge server you need:

- **Docker** and **Docker Compose** (recommended) or a native Linux environment
- At least 512 MB RAM (1 GB recommended)
- A network connection to your building automation devices

## Installation with Docker Compose

The easiest way is to install via Docker Compose. Create a file called `compose.yml` with the following content:

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

Then start the server with:

```bash
docker compose up -d
```

## Initial Configuration

Once started, the API is available at `http://localhost:8080`. The configuration files are located in the `./config` directory.

### Connecting KNX

To set up a KNX connection, add the following to your configuration:

```yaml
knx:
  enabled: true
  host: 192.168.1.10   # IP address of your KNX IP router
  port: 3671
```

### Connecting MQTT

```yaml
mqtt:
  enabled: true
  broker: mqtt://192.168.1.5:1883
  topic_prefix: openbridge/
```

## Next Steps

- [Configure Protocols](/en/docs/protokolle) — complete reference for all supported protocols
- [REST API](/en/docs/api) — API documentation
- [Compose Generator](/en/#generator) — generate your configuration automatically
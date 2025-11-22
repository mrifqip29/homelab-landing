# Homelab Landing Page

A simple, modern landing page for your Raspberry Pi Homelab, built with Next.js, Tailwind CSS, and Docker.

## Features

-   **Minimalist Dashboard**: Clean interface to access your self-hosted services.
-   **Dockerized**: Ready to deploy on Raspberry Pi (ARM64) or any other Docker host.
-   **Responsive**: Works on mobile and desktop.
-   **Fast**: Built on Next.js with standalone output for minimal image size.

## Getting Started

### Prerequisites

-   Docker
-   Docker Compose

### Installation & Running

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <your-repo-url>
    cd homelab-landing
    ```

2.  **Build and Run with Docker Compose**:
    ```bash
    docker-compose up -d --build
    ```

3.  **Access the Dashboard**:
    Open your browser and navigate to `http://<your-pi-ip>:8080` (e.g., `http://raspberrypi.local:8080` or `http://192.168.1.100:8080`).

## Customization

To add your own services:

1.  Open `src/app/page.tsx`.
2.  Find the `services` array.
3.  Update the objects with your service names, URLs, and icons.

```typescript
const services = [
  {
    name: 'Portainer',
    description: 'Container Management',
    icon: LayoutDashboard, // Import new icons from 'lucide-react'
    url: 'http://portainer.local', 
    color: 'bg-blue-500',
    status: 'running'
  },
  // ... add more services
];
```

After editing, rebuild the container:
```bash
docker-compose up -d --build
```

## Development

To run locally without Docker:

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open `http://localhost:8080`.

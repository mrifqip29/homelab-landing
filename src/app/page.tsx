import { 
  Activity, 
  Server, 
  Shield, 
  HardDrive, 
  Tv, 
  LayoutDashboard, 
  Terminal,
  Cpu
} from 'lucide-react';

const services = [
  {
    name: 'Portainer',
    description: 'Container Management',
    icon: LayoutDashboard,
    url: 'http://portainer.local', // Placeholder
    color: 'bg-blue-500',
    status: 'running'
  },
  {
    name: 'Pi-hole',
    description: 'Network-wide Ad Blocking',
    icon: Shield,
    url: 'http://pihole.local/admin',
    color: 'bg-red-500',
    status: 'running'
  },
  {
    name: 'Plex',
    description: 'Media Server',
    icon: Tv,
    url: 'http://plex.local:32400',
    color: 'bg-yellow-500',
    status: 'stopped'
  },
  {
    name: 'Home Assistant',
    description: 'Home Automation',
    icon: Activity,
    url: 'http://homeassistant.local:8123',
    color: 'bg-cyan-500',
    status: 'running'
  },
  {
    name: 'Nextcloud',
    description: 'Cloud Storage',
    icon: HardDrive,
    url: 'http://nextcloud.local',
    color: 'bg-indigo-500',
    status: 'running'
  },
  {
    name: 'Grafana',
    description: 'Monitoring Dashboard',
    icon: Activity,
    url: 'http://grafana.local',
    color: 'bg-orange-500',
    status: 'running'
  }
];

const systemStats = [
  { label: 'CPU Usage', value: '12%', icon: Cpu },
  { label: 'Memory', value: '2.4 / 8 GB', icon: Server },
  { label: 'Disk', value: '45% Used', icon: HardDrive },
  { label: 'Uptime', value: '5d 12h', icon: Activity },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <Terminal className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
              Welcome to Rifqi&apos;s Homelab!
            </h1>
            <p className="text-slate-400 mt-2">My Personal Infrastructure Dashboard</p>
          </div>
          <div className="flex gap-2">
             <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/20">
                System Online
             </div>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {systemStats.map((stat) => (
            <div key={stat.label} className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-lg text-slate-300">
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-400">{stat.label}</div>
                <div className="font-mono font-semibold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-slate-200">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <a 
                key={service.name} 
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-600 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${service.color} text-white bg-opacity-20`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className={`w-2 h-2 rounded-full ${service.status === 'running' ? 'bg-emerald-500' : 'bg-slate-500'}`} />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-white transition-colors">{service.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{service.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-10 text-center text-slate-500 text-sm">
          <p>Lesgoooo!</p>
        </footer>

      </div>
    </main>
  );
}

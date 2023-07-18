import { useEffect, useState } from 'react';

export default function ServersPage() {

  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/servers');
      const servers = await response.json();
      setServers(servers);
    }
    fetchData();
  }, []);

  return (
    <div>
      {servers.map(server => (
        <ServerLabel  
          name={server.name}
          status={server.status} 
        />
      ))}
    </div>
  );
}

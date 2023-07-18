import { useEffect, useState } from 'react';

export default function ServicesPage() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/services');
      const services = await response.json();
      setServices(services);
    }  
    fetchData();
  }, []);

  return (
    <div>
      {services.map(service => (
        <ServiceLabel
          name={service.name}
          status={service.status} 
        />
      ))}
    </div>
  );
}

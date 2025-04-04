'use client';

import { Building2, PaintBucket, Wrench, Hammer, ShieldCheck , BookmarkCheck } from 'lucide-react';

export default function OptionService() {
  const services = [
    { icon: Building2, label: 'Reformas Estruturais' },
    { icon: PaintBucket, label: 'Pintura e Acabamento' },
    { icon: Wrench, label: 'Manutenção Hidráulica' },
    { icon: Hammer, label: 'Serviços de Alvenaria' },
    { icon: ShieldCheck, label: 'Segurança e Impermeabilização' },
    { icon: BookmarkCheck, label: 'Técnicas avançadas' }
  ];

  return (
    <div className="bg-[#04426f] py-6 flex flex-col items-center px-6" id="servicos">
      <div className="w-full max-w-4xl grid grid-cols-2 md:flex md:justify-around md:items-center gap-4 md:gap-8">
        {services.map(({ icon: Icon, label }, index) => (
          <div key={index} className="flex flex-col items-center text-white gap-5">
            <Icon className=" md:size-10 lg:size-10 text-[#ac141e]"  />
            <span className="text-xs md:text-sm font-medium text-center">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

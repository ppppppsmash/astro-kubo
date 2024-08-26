import React from 'react';
import * as TablerIcons from '@tabler/icons-react';

export const ServiceIcons = ({item}: any) => {
  const IconComponent = TablerIcons[item.icon as keyof typeof TablerIcons] as React.ComponentType<{ size: number; color: string }>;

  return (
    <div>
      <IconComponent size={48} color={item.color} />
    </div>
  )
}
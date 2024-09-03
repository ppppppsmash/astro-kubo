import React from 'react';
import { Carousel, Card } from './react-ui/apple-cards-carousel';

export const CarouselComponent = ( { items }: { items: any } ) => {
  const cards = items.map((item: any, index: number) => (
    <Card key={index} card={item} index={index} />
  ));

  return (
    <div>
      <Carousel items={cards} />
    </div>
  );
};

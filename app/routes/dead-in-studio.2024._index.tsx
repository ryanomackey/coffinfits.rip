import { useEffect, useRef } from 'react';
import { useLoaderData } from '@remix-run/react';
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/cloudflare';
import * as d3 from 'd3';

import { HalloweenHeader } from '~/components/HalloweenHeader';

import hale from '~/data/hale.json';
import countrymesh from '~/data/countrymesh.json';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Dead In Studio 2024' }];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const { coffinfits } = context.cloudflare.env;

  const countries = await coffinfits.get('countries');

  return json({ countries });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  let countries: d3.ExtendedFeatureCollection;

  try {
    countries = JSON.parse(data.countries || '');
  } catch (error) {
    throw new Error('Unable to parse country data');
  }

  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Specify the chart’s dimensions.
    const width = 928;
    const marginTop = 46;
    const height = width / 2 + marginTop;

    // Fit the projection.
    const projection = d3.geoEqualEarth().fitExtent(
      [
        [2, marginTop + 2],
        [width - 2, height],
      ],
      { type: 'Sphere' },
    );
    const path = d3.geoPath(projection);

    // Index the values and create the color scale.
    const valuemap = new Map(hale.map((d) => [d.name, d.hale]));

    // Create the SVG container.
    const svg = d3
      .select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    // Add a white sphere with a black border.
    svg
      .append('path')
      .datum({ type: 'Sphere' })
      .attr('fill', 'hsl(var(--foreground))')
      .attr('stroke', 'hsl(var(--ring))')
      .attr('d', path as any);

    // Add a path for each country and color it according te this data.
    svg
      .append('g')
      .selectAll('a')
      .data(countries.features)
      .join('a')
      .attr('xlink:href', (d) => {
        switch (d.properties?.name) {
          case 'Brazil':
            return '/dead-in-studio/2024/brazil';
          case 'Germany':
            return '/dead-in-studio/2024/germany';
          case 'France':
            return '/dead-in-studio/2024/france';
          case 'Japan':
            return '/dead-in-studio/2024/japan';
          default:
            return null;
        }
      })
      .append('path')
      .attr('fill', (d) => {
        return valuemap.get(d.properties?.name) === 1
          ? 'hsl(var(--primary))'
          : 'hsl(var(--background))';
      })
      .attr('class', (d) =>
        valuemap.get(d.properties?.name) === 1 ? 'animate-pulse' : '',
      )
      .attr('d', path as any)
      .append('title')
      .text((d) => d.properties?.name);

    // Add a white mesh.
    svg
      .append('path')
      .datum(countrymesh)
      .attr('fill', 'none')
      .attr('stroke', 'hsl(var(--ring))')
      .attr('d', path as any);
  }, [countries.features]);

  return (
    <main className="main-container">
      <HalloweenHeader title="Dead In Studio" subtitle="2024" />
      <svg id="world-map" ref={ref} />
    </main>
  );
}

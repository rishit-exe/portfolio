import React from 'react';
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { Projects } from '../Projects';
import projects from '../../data/projects.json';

describe('Projects component', () => {
  test('renders all featured project titles from JSON', () => {
    render(<Projects />);
    projects.forEach((p: any) => {
      const matches = screen.getAllByText(p.title);
      expect(matches.length).toBeGreaterThanOrEqual(1);
    });
  });
});

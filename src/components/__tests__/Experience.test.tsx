import React from 'react';
import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { Experience } from '../Experience';
import certifications from '../../data/certifications.json';
import educations from '../../data/education.json';

describe('Experience component', () => {
  test('renders all certification titles from JSON', () => {
    render(<Experience />);
    certifications.forEach((c: any) => {
  const matches = screen.getAllByText(c.title);
  expect(matches.length).toBeGreaterThanOrEqual(1);
    });
  });

  test('renders all education degrees from JSON', () => {
    render(<Experience />);
    educations.forEach((e: any) => {
  const matches = screen.getAllByText(e.degree);
  expect(matches.length).toBeGreaterThanOrEqual(1);
    });
  });
});

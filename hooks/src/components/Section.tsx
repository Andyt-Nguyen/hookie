import React from 'react';

interface SectionProps {
  title: String,
  children?: any
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section style={{ borderBottom: '1px solid grey', paddingBottom: 20}} >
      <h1 style={{ textTransform: 'uppercase', textAlign: 'center' }}>{title}</h1>
      { children }
    </section>
  )
}

export default Section;
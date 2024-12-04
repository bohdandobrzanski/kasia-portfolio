import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, Globe } from 'lucide-react';

// Komponenty pomocnicze
function ProjectCard({ title, organization, description }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-400 hover:border-indigo-400">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-purple-600 font-medium mb-3">{organization}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function EducationCard({ school, degree, period, description }) {
  return (
    <div className="bg-white rounded-lg p-6 border-r-4 border-indigo-400 hover:border-purple-400">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{school}</h3>
      <p className="text-purple-600 font-medium mb-1">{degree}</p>
      <p className="text-gray-500 text-sm mb-3">{period}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ExperienceCard({ title, company, period }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-400 hover:border-purple-400">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-indigo-600 mb-2">{company}</p>
      <p className="text-gray-500 text-sm">{period}</p>
    </div>
  );
}

// Główny komponent
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const translations = {
    pl: {
      nav: {
        about: 'O mnie',
        experience: 'Doświadczenie',
        projects: 'Projekty',
        education: 'Wykształcenie',
        contact: 'Kontakt'
      },
      hero: {
        greeting: 'Cześć! Nazywam się Kasia',
        subtitle: 'Studentka Sciences Po w Paryżu, specjalizująca się w analizie politycznej, prawach człowieka i regionie Indo-Pacyfiku.'
      },
      about: {
        title: 'O mnie',
        paragraph1: 'Jestem ambitną studentką Sciences Po w Paryżu, gdzie specjalizuję się w analizie politycznej ze szczególnym uwzględnieniem regionu Indo-Pacyfiku. Moje zainteresowania koncentrują się wokół praw człowieka, polityki międzynarodowej oraz zrównoważonego rozwoju.',
        paragraph2: 'Aktywnie działam w organizacjach studenckich i think tankach, gdzie mogę łączyć wiedzę teoretyczną z praktycznym doświadczeniem. Moim celem jest przyczynienie się do pozytywnych zmian w obszarze polityki międzynarodowej i praw człowieka.'
      },

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Globe } from 'lucide-react';

// Components
const ProjectCard = ({ title, organization, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-blue-600 font-medium mb-3">{organization}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EducationCard = ({ school, degree, period, description }) => (
  <div className="bg-gray-50 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{school}</h3>
    <p className="text-blue-600 font-medium mb-1">{degree}</p>
    <p className="text-gray-500 text-sm mb-3">{period}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ExperienceCard = ({ title, company, period }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-400 hover:border-purple-400">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-indigo-600 mb-2">{company}</p>
    <p className="text-gray-500 text-sm">{period}</p>
  </div>
);

const Portfolio = () => {
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
      experience: {
        title: 'Doświadczenie',
        roles: {
          analyst: {
            title: 'Specjalista ds. analiz politycznych',
            company: 'Think Tank INE',
            period: '2023 - obecnie'
          },
          intern: {
            title: 'Project Intern',
            company: 'Ministerstwo Cyfryzacji',
            period: '2022 - 2023'
          },
          consultant: {
            title: 'Educational Consultant',
            company: 'Ivy Consultants',
            period: '2021 - 2022'
          },
          council: {
            title: 'Członek',
            company: 'Młodzieżowa Rada Miasta Lublin',
            period: '2020 - 2021'
          }
        }
      },
      projects: {
        title: 'Projekty',
        project1: {
          title: 'Youth Forced to Flee',
          organization: 'UNHCR',
          description: 'Projekt badawczy analizujący sytuację młodych uchodźców i ich integrację w społeczeństwie.'
        },
        project2: {
          title: 'Mitchell L. McLean Trial Competition',
          organization: 'Sciences Po',
          description: 'Udział w międzynarodowym konkursie prawniczym, skupiającym się na prawach człowieka.'
        }
      },
      education: {
        title: 'Wykształcenie',
        university: {
          name: 'Sciences Po Paris',
          degree: 'Master in Political Analysis',
          period: '2022 - obecnie',
          description: 'Specjalizacja w analizie politycznej i regionie Indo-Pacyfiku'
        },
        certificates: {
          title: 'Certyfikaty',
          cert1: 'Olimpiada Wiedzy o Filmie - Laureat',
          cert2: 'Youth Service Designer - Certyfikat'
        }
      },
      contact: {
        title: 'Kontakt',
        name: 'Imię i nazwisko',
        email: 'Email',
        message: 'Wiadomość',
        send: 'Wyślij'
      }
    },
    en: {
      nav: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi! I'm Kasia",
        subtitle: 'Sciences Po Paris student specializing in political analysis, human rights, and the Indo-Pacific region.'
      },
      about: {
        title: 'About',
        paragraph1: "I'm an ambitious student at Sciences Po Paris, where I specialize in political analysis with a focus on the Indo-Pacific region. My interests center around human rights, international politics, and sustainable development.",
        paragraph2: 'I am actively involved in student organizations and think tanks, where I combine theoretical knowledge with practical experience. My goal is to contribute to positive changes in international politics and human rights.'
      },
      experience: {
        title: 'Experience',
        roles: {
          analyst: {
            title: 'Political Analysis Specialist',
            company: 'Think Tank INE',
            period: '2023 - present'
          },
          intern: {
            title: 'Project Intern',
            company: 'Ministry of Digital Affairs',
            period: '2022 - 2023'
          },
          consultant: {
            title: 'Educational Consultant',
            company: 'Ivy Consultants',
            period: '2021 - 2022'
          },
          council: {
            title: 'Member',
            company: 'Lublin Youth City Council',
            period: '2020 - 2021'
          }
        }
      },
      projects: {
        title: 'Projects',
        project1: {
          title: 'Youth Forced to Flee',
          organization: 'UNHCR',
          description: 'Research project analyzing the situation of young refugees and their integration into society.'
        },
        project2: {
          title: 'Mitchell L. McLean Trial Competition',
          organization: 'Sciences Po',
          description: 'Participation in an international law competition focusing on human rights.'
        }
      },
      education: {
        title: 'Education',
        university: {
          name: 'Sciences Po Paris',
          degree: 'Master in Political Analysis',
          period: '2022 - present',
          description: 'Specialization in political analysis and Indo-Pacific region'
        },
        certificates: {
          title: 'Certificates',
          cert1: 'Film Knowledge Olympics - Laureate',
          cert2: 'Youth Service Designer - Certificate'
        }
      },
      contact: {
        title: 'Contact',
        name: 'Full name',
        email: 'Email',
        message: 'Message',
        send: 'Send'
      }
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-indigo-50 to-purple-50 shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">K.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">{t.nav.about}</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">{t.nav.experience}</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">{t.nav.projects}</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">{t.nav.education}</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">{t.nav.contact}</a>
              <button
                onClick={() => setCurrentLanguage(currentLanguage === 'pl' ? 'en' : 'pl')}
                className="flex items-center text-gray-600 hover:text-gray-900 bg-gray-100 px-3 py-1 rounded-md"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className={currentLanguage === 'pl' ? 'font-semibold' : ''}>PL</span>
                <span className="mx-1">/</span>
                <span className={currentLanguage === 'en' ? 'font-semibold' : ''}>EN</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">{t.nav.about}</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">{t.nav.experience}</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">{t.nav.projects}</a>
              <a href="#education" className="block px-3 py-2 text-gray-600 hover:text-gray-900">{t.nav.education}</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">{t.nav.contact}</a>
              <button
                onClick={() => setCurrentLanguage(currentLanguage === 'pl' ? 'en' : 'pl')}
                className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className={currentLanguage === 'pl' ? 'font-semibold' : ''}>PL</span>
                <span className="mx-1">/</span>
                <span className={currentLanguage === 'en' ? 'font-semibold' : ''}>EN</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
                {t.hero.greeting}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {t.hero.subtitle}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.about.title} 👋
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-gray-600">
              {t.about.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.experience.title} 💼
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExperienceCard
              title={t.experience.roles.analyst.title}
              company={t.experience.roles.analyst.company}
              period={t.experience.roles.analyst.period}
            />
            <ExperienceCard
              title={t.experience.roles.intern.title}
              company={t.experience.roles.intern.company}
              period={t.experience.roles.intern.period}
            />
            <ExperienceCard
              title={t.experience.roles.consultant.title}
              company={t.experience.roles.consultant.company}
              period={t.experience.roles.consultant.period}
            />
            <ExperienceCard
              title={t.experience.roles.council.title}
              company={t.experience.roles.council.company}
              period={t.experience.roles.council.period}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.projects.title} 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title={t.projects.project1.title}
              organization={t.projects.project1.organization}
              description={t.projects.project1.description}
            />
            <ProjectCard
              title={t.projects.project2.title}
              organization={t.projects.project2.organization}
              description={t.projects.project2.description}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.education.title} 🎓
          </h2>
          <div className="max-w-3xl mx-auto">
            <EducationCard
              school={t.education.university.name}
              degree={t.education.university.degree}
              period={t.education.university.period}
              description={t.education.university.description}
            />
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t.education.certificates.title}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {t.education.certificates.cert1}
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {t.education.certificates.cert2}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.contact.title} 📬
          </h2>
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="mailto:catherine.dobrzanska@gmail.com" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a 
                href="https://www.linkedin.com/in/katarzynadobrzanska/" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t.contact.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder={t.contact.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder={t.contact.message}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

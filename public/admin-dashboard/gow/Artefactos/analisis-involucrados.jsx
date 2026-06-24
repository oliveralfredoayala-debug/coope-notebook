import React, { useState } from 'react';
import { Users, Target, Shield, HelpCircle, Zap, ChevronRight, Plus, X } from 'lucide-react';

export default function AnalisisInvolucrados() {
  const [activeSection, setActiveSection] = useState('intro');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [stakeholders, setStakeholders] = useState({
    blanco: [],
    aliados: [],
    opuestos: [],
    indecisos: [],
    organizadores: []
  });
  const [newStakeholder, setNewStakeholder] = useState('');
  const [showMatrix, setShowMatrix] = useState(false);

  const sections = [
    { id: 'intro', label: 'Introducción', icon: Users },
    { id: 'teoria', label: 'Marco Teórico', icon: Target },
    { id: 'mapa', label: 'Mapa de Poder', icon: Zap },
    { id: 'matriz', label: 'Matriz de Análisis', icon: Shield }
  ];

  const categorias = [
    {
      id: 'blanco',
      nombre: 'Blanco de Incidencia',
      descripcion: 'Personas o instituciones clave que tienen el poder de tomar decisiones sobre el problema que queremos abordar',
      color: '#E63946',
      icon: Target
    },
    {
      id: 'aliados',
      nombre: 'Aliados',
      descripcion: 'Sectores o personas que apoyan nuestra causa y pueden contribuir al cambio',
      color: '#06A77D',
      icon: Shield
    },
    {
      id: 'opuestos',
      nombre: 'Opositores',
      descripcion: 'Sectores o personas que se oponen a nuestros objetivos y pueden obstaculizar el cambio',
      color: '#F77F00',
      icon: X
    },
    {
      id: 'indecisos',
      nombre: 'Indecisos',
      descripcion: 'Sectores o personas que aún no han tomado una posición clara',
      color: '#457B9D',
      icon: HelpCircle
    },
    {
      id: 'organizadores',
      nombre: 'Organizadores',
      descripcion: 'El sujeto de cambio: nosotros, quienes lideramos la acción de incidencia',
      color: '#8338EC',
      icon: Users
    }
  ];

  const addStakeholder = (category) => {
    if (newStakeholder.trim()) {
      setStakeholders({
        ...stakeholders,
        [category]: [...stakeholders[category], newStakeholder.trim()]
      });
      setNewStakeholder('');
    }
  };

  const removeStakeholder = (category, index) => {
    setStakeholders({
      ...stakeholders,
      [category]: stakeholders[category].filter((_, i) => i !== index)
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
      fontFamily: "'Merriweather', Georgia, serif",
      color: '#212529'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #2C5F2D 0%, #1A3A1B 100%)',
        padding: '2.5rem 2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            letterSpacing: '-0.5px'
          }}>
            Análisis de Involucrados
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#97BC62',
            fontWeight: '300',
            fontFamily: "'Inter', sans-serif"
          }}>
            Herramienta clave del Marco Lógico para la Incidencia Política
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        background: 'white',
        borderBottom: '2px solid #E9ECEF',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '0.5rem',
          padding: '1rem 2rem',
          overflowX: 'auto'
        }}>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                border: 'none',
                background: activeSection === section.id ? '#2C5F2D' : 'transparent',
                color: activeSection === section.id ? 'white' : '#495057',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: activeSection === section.id ? '600' : '400',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={e => {
                if (activeSection !== section.id) {
                  e.target.style.background = '#F1F3F5';
                }
              }}
              onMouseLeave={e => {
                if (activeSection !== section.id) {
                  e.target.style.background = 'transparent';
                }
              }}
            >
              <section.icon size={20} />
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        
        {/* Introducción */}
        {activeSection === 'intro' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
                paddingBottom: '1.5rem',
                borderBottom: '3px solid #2C5F2D'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #2C5F2D 0%, #97BC62 100%)',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={32} color="white" />
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#212529',
                  margin: 0
                }}>
                  ¿Qué es el Análisis de Involucrados?
                </h2>
              </div>

              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: '#495057',
                marginBottom: '1.5rem',
                fontFamily: "'Inter', sans-serif"
              }}>
                El <strong>Análisis de Involucrados</strong> es el primer paso metodológico del Sistema de Marco Lógico. 
                Se trata de una herramienta fundamental que nos permite identificar y comprender a todos los actores que 
                están directa o indirectamente relacionados con el problema de desarrollo que queremos resolver.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #FFF5F5 0%, #FFE8E8 100%)',
                borderLeft: '4px solid #E63946',
                padding: '1.5rem',
                borderRadius: '8px',
                marginBottom: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#C1121F',
                  marginBottom: '1rem',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  ¿Por qué es importante?
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  color: '#495057',
                  margin: 0,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Este análisis nos permite tomar en consideración los <strong>intereses</strong>, 
                  el <strong>potencial</strong> y las <strong>limitaciones</strong> de cada grupo u organización. 
                  Solo así podremos diseñar estrategias efectivas que maximicen el apoyo y minimicen la resistencia 
                  cuando ejecutemos nuestro proyecto.
                </p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: 'Identificar percepciones',
                  desc: 'Cómo cada grupo percibe las causas y efectos del problema',
                  color: '#06A77D'
                },
                {
                  title: 'Evaluar posiciones',
                  desc: 'Quiénes apoyarían y quiénes se opondrían a nuestra estrategia',
                  color: '#457B9D'
                },
                {
                  title: 'Analizar poder',
                  desc: 'El mandato legal y los recursos para apoyar u obstaculizar',
                  color: '#F77F00'
                },
                {
                  title: 'Planificar relaciones',
                  desc: 'Estrategias para maximizar apoyo y minimizar resistencia',
                  color: '#8338EC'
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderTop: `4px solid ${item.color}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: item.color,
                    marginBottom: '0.75rem',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#6C757D',
                    margin: 0,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Marco Teórico */}
        {activeSection === 'teoria' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#212529',
                marginBottom: '2rem',
                borderBottom: '3px solid #2C5F2D',
                paddingBottom: '1rem'
              }}>
                Marco Teórico del Análisis
              </h2>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#2C5F2D',
                  marginBottom: '1rem',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Aspectos clave a identificar
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    {
                      num: '1',
                      title: 'Percepciones sobre el problema',
                      text: 'Cómo perciben los diferentes grupos las causas y efectos del problema de desarrollo',
                      color: '#E63946'
                    },
                    {
                      num: '2',
                      title: 'Posicionamiento ante la estrategia',
                      text: 'Cuáles grupos apoyarían una determinada estrategia para superar el problema y cuáles se opondrían',
                      color: '#F77F00'
                    },
                    {
                      num: '3',
                      title: 'Poder y recursos',
                      text: 'El poder (mandato legal o estatutario) y los recursos que tienen las organizaciones para apoyar u obstaculizar la solución',
                      color: '#457B9D'
                    },
                    {
                      num: '4',
                      title: 'Estrategia de gestión',
                      text: 'Cómo maximizar el apoyo y minimizar la resistencia cuando el proyecto se empiece a ejecutar',
                      color: '#06A77D'
                    }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
                      borderRadius: '12px',
                      border: `2px solid ${item.color}20`
                    }}>
                      <div style={{
                        background: item.color,
                        color: 'white',
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        flexShrink: 0,
                        boxShadow: `0 4px 12px ${item.color}40`
                      }}>
                        {item.num}
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: '#212529',
                          marginBottom: '0.5rem',
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: '#6C757D',
                          margin: 0,
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFF3CC 100%)',
                borderRadius: '12px',
                padding: '2rem',
                marginTop: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#B85C00',
                  marginBottom: '1rem',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Zap size={24} />
                  Análisis dinámico
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  color: '#495057',
                  marginBottom: '1rem',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  <strong>El Análisis de Involucrados no es estático.</strong> Debe revisarse y actualizarse 
                  permanentemente durante el diseño y la ejecución del proyecto porque:
                </p>
                <ul style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#495057',
                  fontFamily: "'Inter', sans-serif",
                  marginLeft: '1.5rem'
                }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    Los involucrados <strong>aparecen y desaparecen</strong> durante el ciclo del proyecto
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    Cada alternativa o estrategia puede <strong>afectar de manera diferente</strong> a cada grupo
                  </li>
                  <li>
                    Es imposible identificar a todos los involucrados en la etapa inicial de diseño
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Mapa de Poder */}
        {activeSection === 'mapa' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#212529',
                marginBottom: '1rem',
                borderBottom: '3px solid #2C5F2D',
                paddingBottom: '1rem'
              }}>
                Mapa de Poder
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#6C757D',
                marginBottom: '2.5rem',
                fontFamily: "'Inter', sans-serif"
              }}>
                El mapa de poder nos ayuda a visualizar y clasificar a los diferentes actores según su relación 
                con nuestro proyecto de incidencia. Construye tu propio mapa agregando involucrados en cada categoría.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                {categorias.map(cat => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        background: isSelected ? `${cat.color}15` : 'white',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        border: `3px solid ${isSelected ? cat.color : '#E9ECEF'}`,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: isSelected ? `0 8px 24px ${cat.color}30` : '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                      onMouseEnter={e => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = cat.color;
                          e.currentTarget.style.transform = 'translateY(-4px)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = '#E9ECEF';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <div style={{
                          background: cat.color,
                          borderRadius: '10px',
                          padding: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 4px 12px ${cat.color}40`
                        }}>
                          <Icon size={24} color="white" />
                        </div>
                        <div style={{
                          background: cat.color,
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          fontFamily: "'Inter', sans-serif"
                        }}>
                          {stakeholders[cat.id].length}
                        </div>
                      </div>
                      
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: cat.color,
                        marginBottom: '0.5rem',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {cat.nombre}
                      </h3>
                      
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        color: '#6C757D',
                        marginBottom: '1rem',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {cat.descripcion}
                      </p>

                      {stakeholders[cat.id].length > 0 && (
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem'
                        }}>
                          {stakeholders[cat.id].map((sh, idx) => (
                            <div
                              key={idx}
                              style={{
                                background: `${cat.color}20`,
                                color: cat.color,
                                padding: '0.4rem 0.8rem',
                                borderRadius: '6px',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                fontFamily: "'Inter', sans-serif",
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                              }}
                            >
                              {sh}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeStakeholder(cat.id, idx);
                                }}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  cursor: 'pointer',
                                  padding: '0',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {selectedCategory && (
                <div style={{
                  background: `${categorias.find(c => c.id === selectedCategory).color}10`,
                  borderRadius: '12px',
                  padding: '2rem',
                  border: `2px solid ${categorias.find(c => c.id === selectedCategory).color}`,
                  animation: 'slideIn 0.3s ease-out'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: categorias.find(c => c.id === selectedCategory).color,
                    marginBottom: '1rem',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Agregar a {categorias.find(c => c.id === selectedCategory).nombre}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <input
                      type="text"
                      value={newStakeholder}
                      onChange={(e) => setNewStakeholder(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addStakeholder(selectedCategory);
                        }
                      }}
                      placeholder="Nombre del involucrado..."
                      style={{
                        flex: 1,
                        padding: '1rem',
                        fontSize: '1rem',
                        border: '2px solid #DEE2E6',
                        borderRadius: '8px',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = categorias.find(c => c.id === selectedCategory).color;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#DEE2E6';
                      }}
                    />
                    <button
                      onClick={() => addStakeholder(selectedCategory)}
                      style={{
                        background: categorias.find(c => c.id === selectedCategory).color,
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <Plus size={20} />
                      Agregar
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #2C5F2D 0%, #1A3A1B 100%)',
              borderRadius: '16px',
              padding: '2.5rem',
              color: 'white',
              boxShadow: '0 8px 24px rgba(44, 95, 45, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                fontFamily: "'Inter', sans-serif"
              }}>
                💡 Tip para tu análisis
              </h3>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                color: '#E9ECEF'
              }}>
                El análisis de involucrados y la creación de un mapa de poder permiten una <strong>gestión más efectiva 
                de las relaciones y recursos</strong>, aumentando significativamente las probabilidades de éxito en la 
                implementación de tu propuesta de incidencia política.
              </p>
            </div>
          </div>
        )}

        {/* Matriz de Análisis */}
        {activeSection === 'matriz' && (
          <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#212529',
                marginBottom: '1rem',
                borderBottom: '3px solid #2C5F2D',
                paddingBottom: '1rem'
              }}>
                Matriz de Análisis de Involucrados
              </h2>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#6C757D',
                marginBottom: '2rem',
                fontFamily: "'Inter', sans-serif"
              }}>
                La matriz de análisis nos permite sistematizar la información de cada involucrado. 
                Se organiza en cuatro columnas fundamentales:
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}>
                {[
                  {
                    title: 'Grupos',
                    desc: 'Identificación de todos los actores involucrados',
                    color: '#E63946'
                  },
                  {
                    title: 'Intereses',
                    desc: 'Qué busca cada grupo o actor en relación al problema',
                    color: '#F77F00'
                  },
                  {
                    title: 'Recursos y Mandatos',
                    desc: 'Poder, capacidades y recursos de cada involucrado',
                    color: '#457B9D'
                  },
                  {
                    title: 'Problemas Percibidos',
                    desc: 'Cómo cada grupo entiende el problema central',
                    color: '#06A77D'
                  }
                ].map((col, idx) => (
                  <div key={idx} style={{
                    background: `${col.color}10`,
                    borderRadius: '12px',
                    padding: '1.5rem',
                    border: `2px solid ${col.color}`,
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <div style={{
                      background: col.color,
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {col.title}
                    </div>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: '#495057',
                      margin: 0,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {col.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#0066CC',
                  marginBottom: '1.5rem',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Ejemplo de clasificación de involucrados
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    {
                      category: 'Grupo Meta',
                      example: 'Miembros de la cooperativa X del municipio Y',
                      color: '#E63946'
                    },
                    {
                      category: 'Beneficiarios Indirectos',
                      example: 'Familiares de los miembros, otras organizaciones similares',
                      color: '#06A77D'
                    },
                    {
                      category: 'Colaboradores',
                      example: 'Instituciones gubernamentales locales, gobierno municipal',
                      color: '#457B9D'
                    },
                    {
                      category: 'Oponentes Potenciales',
                      example: 'Sectores que se oponen a los cambios propuestos',
                      color: '#F77F00'
                    },
                    {
                      category: 'Excluidos',
                      example: 'Grupos que no participan en el proyecto',
                      color: '#8E8E8E'
                    }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: 'white',
                      borderRadius: '8px',
                      padding: '1rem 1.5rem',
                      borderLeft: `4px solid ${item.color}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <strong style={{
                        color: item.color,
                        fontSize: '1.05rem',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {item.category}:
                      </strong>
                      <span style={{
                        color: '#6C757D',
                        fontSize: '1rem',
                        fontFamily: "'Inter', sans-serif",
                        flex: 1,
                        textAlign: 'right'
                      }}>
                        {item.example}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #FFF9E6 0%, #FFF3CC 100%)',
                borderRadius: '12px',
                padding: '2rem',
                border: '2px solid #F0AD4E'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#B85C00',
                  marginBottom: '1rem',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Shield size={24} />
                  Recuerda
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  color: '#495057',
                  margin: 0,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Este análisis <strong>debe actualizarse permanentemente</strong> durante el diseño y la ejecución 
                  del proyecto. Los involucrados, sus intereses y su poder pueden cambiar a lo largo del tiempo, 
                  por lo que mantener la matriz actualizada es clave para el éxito de tu estrategia de incidencia.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1A3A1B 0%, #0D1F0E 100%)',
        padding: '2rem',
        marginTop: '4rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.95rem',
          margin: 0,
          fontFamily: "'Inter', sans-serif",
          opacity: 0.9
        }}>
          Herramienta educativa sobre Marco Lógico e Incidencia Política
        </p>
        <p style={{
          fontSize: '0.85rem',
          marginTop: '0.5rem',
          fontFamily: "'Inter', sans-serif",
          opacity: 0.7
        }}>
          Confederación Hondureña de Cooperativas
        </p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}
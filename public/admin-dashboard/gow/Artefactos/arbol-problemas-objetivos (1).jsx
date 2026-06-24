import React, { useState } from 'react';

export default function ArbolProblemasObjetivos() {
  const [activeTab, setActiveTab] = useState('teoria');
  const [selectedExample, setSelectedExample] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedTreeExample, setSelectedTreeExample] = useState(0);

  const recomendaciones = [
    {
      numero: 1,
      texto: "Es una proposición en sentido negativo: describe una situación insatisfactoria"
    },
    {
      numero: 2,
      texto: "Es un hecho o situación; no es un documento"
    },
    {
      numero: 3,
      texto: "Es importante: afecta a gran parte de la población objetivo"
    },
    {
      numero: 4,
      texto: "No es la ausencia de una solución"
    },
    {
      numero: 5,
      texto: "Existe, no es un problema posible o potencial"
    },
    {
      numero: 6,
      texto: "Debe ser verdadero, con evidencia empírica y sustentado con indicadores"
    }
  ];

  const ejemplosRedaccion = [
    {
      id: 1,
      incorrecto: "Falta de sistema de seguimiento de créditos",
      correcto: "Alta morosidad en la cartera de créditos de la cooperativa",
      explicacion: "El problema debe describir la situación negativa actual (alta morosidad), no la ausencia de una solución (sistema de seguimiento).",
      recomendacionViolada: 4
    },
    {
      id: 2,
      incorrecto: "No hay suficiente capacitación en educación financiera",
      correcto: "Bajo nivel de conocimiento financiero entre los afiliados de la cooperativa",
      explicacion: "Describe el problema real (bajo conocimiento) en lugar de la falta de una solución (capacitación).",
      recomendacionViolada: 4
    },
    {
      id: 3,
      incorrecto: "Se necesita implementar un software de gestión crediticia",
      correcto: "Deficiente control y monitoreo de la cartera de créditos",
      explicacion: "El problema es la deficiencia en el control, no la necesidad de software.",
      recomendacionViolada: 4
    },
    {
      id: 4,
      incorrecto: "Ausencia de políticas de cobranza efectivas",
      correcto: "Altos niveles de atrasos en los pagos de los afiliados",
      explicacion: "Describe el efecto real (atrasos en pagos) en lugar de lo que falta (políticas).",
      recomendacionViolada: 4
    }
  ];

  const arbolesEjemplo = [
    {
      titulo: "Cooperativa de Ahorro y Crédito",
      // ÁRBOL DE PROBLEMAS
      problemaCentral: "Alta morosidad en la cartera de créditos de la cooperativa",
      efectos: [
        "Reducción de la liquidez de la cooperativa",
        "Imposibilidad de otorgar nuevos créditos a afiliados",
        "Pérdida de confianza de los afiliados"
      ],
      causasDirectas: [
        "Inadecuada evaluación de capacidad de pago de los afiliados",
        "Falta de seguimiento a los créditos otorgados",
        "Factores externos que afectan ingresos de afiliados"
      ],
      causasRaiz: [
        "Personal sin capacitación en análisis de riesgo crediticio",
        "Inexistencia de un sistema de seguimiento sistematizado",
        "Vulnerabilidad económica de los afiliados",
        "Diversificación limitada de fuentes de ingreso de afiliados"
      ],
      // ÁRBOL DE OBJETIVOS
      objetivoCentral: "Cartera de créditos sana con bajos niveles de morosidad",
      fines: [
        "Liquidez adecuada para operaciones de la cooperativa",
        "Capacidad sostenida de otorgar nuevos créditos a afiliados",
        "Confianza fortalecida de los afiliados en la cooperativa"
      ],
      mediosDirectos: [
        "Evaluación adecuada de capacidad de pago de los afiliados",
        "Seguimiento efectivo y oportuno de los créditos otorgados",
        "Afiliados con ingresos estables y diversificados"
      ],
      mediosRaiz: [
        "Personal capacitado en análisis de riesgo crediticio",
        "Sistema de seguimiento sistematizado implementado",
        "Afiliados con mayor estabilidad económica",
        "Afiliados con fuentes de ingreso diversificadas"
      ]
    },
    {
      titulo: "Gestión de Ahorros",
      problemaCentral: "Baja captación de ahorros en la cooperativa",
      efectos: [
        "Reducción de capital disponible para préstamos",
        "Dependencia de fuentes externas de financiamiento",
        "Altos costos financieros para la cooperativa"
      ],
      causasDirectas: [
        "Bajas tasas de interés ofrecidas a ahorrantes",
        "Desconfianza de afiliados en la gestión cooperativa",
        "Falta de productos de ahorro atractivos"
      ],
      causasRaiz: [
        "Limitada capacidad financiera para ofrecer mejores tasas",
        "Deficiente comunicación sobre la solidez financiera",
        "Ausencia de estrategia de desarrollo de productos",
        "Competencia con instituciones bancarias tradicionales"
      ],
      objetivoCentral: "Alta captación de ahorros en la cooperativa",
      fines: [
        "Suficiente capital disponible para préstamos",
        "Autonomía financiera de la cooperativa",
        "Costos financieros competitivos para la cooperativa"
      ],
      mediosDirectos: [
        "Tasas de interés competitivas ofrecidas a ahorrantes",
        "Confianza de afiliados en la gestión cooperativa",
        "Productos de ahorro atractivos y diversificados"
      ],
      mediosRaiz: [
        "Capacidad financiera mejorada para ofrecer mejores tasas",
        "Comunicación efectiva sobre la solidez financiera",
        "Estrategia de desarrollo de productos implementada",
        "Posicionamiento competitivo frente a instituciones bancarias"
      ]
    },
    {
      titulo: "Educación Financiera",
      problemaCentral: "Bajo nivel de conocimiento financiero de los afiliados",
      efectos: [
        "Uso inadecuado de los productos financieros",
        "Endeudamiento excesivo de los afiliados",
        "Aumento en la tasa de morosidad"
      ],
      causasDirectas: [
        "Ausencia de programas de educación financiera",
        "Baja participación de afiliados en actividades formativas",
        "Limitado acceso a información sobre productos financieros"
      ],
      causasRaiz: [
        "Falta de presupuesto para programas educativos",
        "Desinterés de afiliados por formación financiera",
        "Canales de comunicación inadecuados con afiliados",
        "Ausencia de materiales educativos apropiados"
      ],
      objetivoCentral: "Alto nivel de conocimiento financiero de los afiliados",
      fines: [
        "Uso adecuado de los productos financieros",
        "Endeudamiento responsable de los afiliados",
        "Reducción en la tasa de morosidad"
      ],
      mediosDirectos: [
        "Programas de educación financiera implementados",
        "Alta participación de afiliados en actividades formativas",
        "Acceso amplio a información sobre productos financieros"
      ],
      mediosRaiz: [
        "Presupuesto asignado para programas educativos",
        "Afiliados motivados por formación financiera",
        "Canales de comunicación efectivos con afiliados",
        "Materiales educativos apropiados disponibles"
      ]
    }
  ];

  const ejemplosTransformacion = [
    {
      problema: "Alta morosidad en la cartera de créditos",
      objetivo: "Cartera de créditos sana con bajos niveles de morosidad",
      explicacion: "Se convierte la situación negativa en su estado positivo deseado"
    },
    {
      problema: "Reducción de la liquidez de la cooperativa",
      objetivo: "Liquidez adecuada para operaciones de la cooperativa",
      explicacion: "El efecto negativo se transforma en el fin positivo que se busca"
    },
    {
      problema: "Inadecuada evaluación de capacidad de pago",
      objetivo: "Evaluación adecuada de capacidad de pago",
      explicacion: "La causa se convierte en el medio o solución para lograr el objetivo"
    }
  ];

  const handleExampleClick = (ejemplo) => {
    setSelectedExample(ejemplo);
    setShowFeedback(true);
  };

  const resetSelection = () => {
    setSelectedExample(null);
    setShowFeedback(false);
  };

  const arbolActual = arbolesEjemplo[selectedTreeExample];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #d4f1e8 0%, #fef3e2 50%, #dfe9f5 100%)',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '16px 24px',
            borderRadius: '50px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '32px' }}>🌳</span>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #047857 0%, #0369a1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              Árbol de Problemas y Objetivos
            </h1>
          </div>
          <p style={{ fontSize: '18px', color: '#374151', fontWeight: '500', margin: '8px 0' }}>
            Aprende a identificar problemas y transformarlos en objetivos
          </p>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            Cooperativas de Ahorro y Crédito
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('teoria')}
            style={{
              padding: '14px 24px',
              borderRadius: '12px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: activeTab === 'teoria' ? 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' : 'white',
              color: activeTab === 'teoria' ? 'white' : '#374151',
              transform: activeTab === 'teoria' ? 'scale(1.05)' : 'scale(1)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              fontSize: '14px'
            }}
          >
            📝 Redacción del Problema
          </button>
          <button
            onClick={() => setActiveTab('arbol')}
            style={{
              padding: '14px 24px',
              borderRadius: '12px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: activeTab === 'arbol' ? 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' : 'white',
              color: activeTab === 'arbol' ? 'white' : '#374151',
              transform: activeTab === 'arbol' ? 'scale(1.05)' : 'scale(1)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              fontSize: '14px'
            }}
          >
            🌳 Árbol de Problemas
          </button>
          <button
            onClick={() => setActiveTab('objetivos')}
            style={{
              padding: '14px 24px',
              borderRadius: '12px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: activeTab === 'objetivos' ? 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' : 'white',
              color: activeTab === 'objetivos' ? 'white' : '#374151',
              transform: activeTab === 'objetivos' ? 'scale(1.05)' : 'scale(1)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              fontSize: '14px'
            }}
          >
            🎯 Árbol de Objetivos
          </button>
        </div>

        {/* Tab Content - Teoría */}
        {activeTab === 'teoria' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Recomendaciones */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '2px solid #a7f3d0'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '24px' }}>✅</span>
                Las 6 Recomendaciones Clave
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '16px'
              }}>
                {recomendaciones.map((rec) => (
                  <div
                    key={rec.numero}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '16px',
                      background: 'linear-gradient(135deg, #ecfdf5 0%, #e0f2fe 100%)',
                      borderRadius: '12px',
                      border: '1px solid #a7f3d0'
                    }}
                  >
                    <div style={{
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      background: '#059669',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>
                      {rec.numero}
                    </div>
                    <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{rec.texto}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instrucciones */}
            <div style={{
              background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
              borderRadius: '12px',
              padding: '20px',
              border: '2px solid #fbbf24'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>⚠️</span>
                <div>
                  <h3 style={{ fontWeight: 'bold', color: '#78350f', marginBottom: '8px' }}>📌 Instrucciones</h3>
                  <p style={{ color: '#78350f', fontSize: '14px', margin: 0 }}>
                    Haz clic en cualquier <span style={{ fontWeight: 'bold' }}>problema mal formulado</span> para ver 
                    por qué es incorrecto y cómo debe formularse correctamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Tabla de Ejemplos */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              border: '2px solid #bae6fd'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)',
                padding: '16px 24px'
              }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                  Ejemplos Interactivos
                </h2>
              </div>
              
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f3f4f6', borderBottom: '2px solid #d1d5db' }}>
                      <th style={{
                        padding: '16px 24px',
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#374151',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        width: '50%'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '20px' }}>❌</span>
                          Problema Mal Formulado
                        </div>
                      </th>
                      <th style={{
                        padding: '16px 24px',
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#374151',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        width: '50%'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '20px' }}>✅</span>
                          Problema Bien Formulado
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ejemplosRedaccion.map((ejemplo, index) => (
                      <tr
                        key={ejemplo.id}
                        style={{
                          borderBottom: '1px solid #e5e7eb',
                          background: index % 2 === 0 ? 'white' : '#f9fafb'
                        }}
                      >
                        <td style={{ padding: '16px 24px' }}>
                          <button
                            onClick={() => handleExampleClick(ejemplo)}
                            style={{
                              textAlign: 'left',
                              width: '100%',
                              padding: '12px',
                              borderRadius: '8px',
                              background: '#fef2f2',
                              border: '2px solid #fecaca',
                              cursor: 'pointer',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#f87171';
                              e.currentTarget.style.boxShadow = '0 4px 12px rgba(239, 68, 68, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = '#fecaca';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <span style={{ fontSize: '18px', flexShrink: 0 }}>❌</span>
                              <span style={{ color: '#1f2937', fontWeight: '500' }}>
                                {ejemplo.incorrecto}
                              </span>
                            </div>
                          </button>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{
                            padding: '12px',
                            borderRadius: '8px',
                            background: '#f0fdf4',
                            border: '2px solid #bbf7d0'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <span style={{ fontSize: '18px', flexShrink: 0 }}>✅</span>
                              <span style={{ color: '#1f2937', fontWeight: '500' }}>
                                {ejemplo.correcto}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer Tips */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              padding: '24px',
              border: '2px solid #a7f3d0'
            }}>
              <h3 style={{
                fontWeight: 'bold',
                color: '#065f46',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '24px' }}>💡</span>
                Consejo Clave
              </h3>
              <p style={{ color: '#374151', lineHeight: '1.6', margin: 0 }}>
                <span style={{ fontWeight: 'bold', color: '#065f46' }}>Evita expresiones como:</span> "Falta de...", 
                "No hay...", "Se requiere...", "Ausencia de...". En su lugar, describe la{' '}
                <span style={{ fontWeight: 'bold', color: '#0284c7' }}>situación negativa actual</span>.
              </p>
            </div>
          </div>
        )}

        {/* Tab Content - Árbol de Problemas */}
        {activeTab === 'arbol' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Selector de ejemplo */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '2px solid #a7f3d0'
            }}>
              <h3 style={{ fontWeight: 'bold', color: '#065f46', marginBottom: '12px' }}>Selecciona un ejemplo:</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {arbolesEjemplo.map((arbol, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTreeExample(idx)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: selectedTreeExample === idx 
                        ? 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' 
                        : '#f3f4f6',
                      color: selectedTreeExample === idx ? 'white' : '#374151',
                      transform: selectedTreeExample === idx ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: selectedTreeExample === idx ? '0 4px 12px rgba(5, 150, 105, 0.3)' : 'none'
                    }}
                  >
                    {arbol.titulo}
                  </button>
                ))}
              </div>
            </div>

            {/* Estructura del Árbol */}
            <div style={{
              background: 'linear-gradient(135deg, #fee2e2 0%, #fef3c7 50%, #dcfce7 100%)',
              borderRadius: '12px',
              padding: '24px',
              border: '2px solid #fbbf24'
            }}>
              <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: '#78350f', marginBottom: '16px', fontSize: '20px' }}>
                📊 Estructura del Árbol de Problemas
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                textAlign: 'center'
              }}>
                <div style={{
                  background: '#fee2e2',
                  border: '2px solid #f87171',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>⬆️</div>
                  <p style={{ fontWeight: 'bold', color: '#991b1b', margin: '4px 0' }}>EFECTOS</p>
                  <p style={{ fontSize: '12px', color: '#7f1d1d', margin: 0 }}>Consecuencias del problema</p>
                </div>
                <div style={{
                  background: '#fef3c7',
                  border: '2px solid #fbbf24',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚠️</div>
                  <p style={{ fontWeight: 'bold', color: '#92400e', margin: '4px 0' }}>PROBLEMA CENTRAL</p>
                  <p style={{ fontSize: '12px', color: '#78350f', margin: 0 }}>Situación negativa principal</p>
                </div>
                <div style={{
                  background: '#dcfce7',
                  border: '2px solid #4ade80',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>⬇️</div>
                  <p style={{ fontWeight: 'bold', color: '#166534', margin: '4px 0' }}>CAUSAS</p>
                  <p style={{ fontSize: '12px', color: '#14532d', margin: 0 }}>Origen del problema</p>
                </div>
              </div>
            </div>

            {/* Visualización del Árbol de Problemas */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              border: '2px solid #fca5a5'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#991b1b',
                marginBottom: '32px'
              }}>
                🌳 {arbolActual.titulo} - Árbol de Problemas
              </h2>

              {/* EFECTOS */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '28px' }}>⬆️</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#991b1b', margin: 0 }}>EFECTOS</h3>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px'
                }}>
                  {arbolActual.efectos.map((efecto, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'linear-gradient(135deg, #fef2f2 0%, #fed7aa 100%)',
                        border: '2px solid #fca5a5',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          background: '#dc2626',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          E{idx + 1}
                        </div>
                        <p style={{ color: '#1f2937', fontWeight: '500', lineHeight: '1.5', margin: 0 }}>{efecto}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flechas hacia arriba */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
                gap: '48px'
              }}>
                {arbolActual.efectos.map((_, idx) => (
                  <span key={idx} style={{ fontSize: '32px', color: '#f87171' }}>↑</span>
                ))}
              </div>

              {/* PROBLEMA CENTRAL */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                    border: '4px solid #d97706',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <span style={{ fontSize: '32px' }}>⚠️</span>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                        PROBLEMA CENTRAL
                      </h3>
                    </div>
                    <p style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {arbolActual.problemaCentral}
                    </p>
                  </div>
                </div>
              </div>

              {/* Flechas hacia abajo */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
                gap: '48px'
              }}>
                {arbolActual.causasDirectas.map((_, idx) => (
                  <span key={idx} style={{ fontSize: '32px', color: '#4ade80' }}>↓</span>
                ))}
              </div>

              {/* CAUSAS DIRECTAS */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '28px' }}>⬇️</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', margin: 0 }}>CAUSAS DIRECTAS</h3>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px'
                }}>
                  {arbolActual.causasDirectas.map((causa, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
                        border: '2px solid #86efac',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          background: '#16a34a',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          C{idx + 1}
                        </div>
                        <p style={{ color: '#1f2937', fontWeight: '500', lineHeight: '1.5', margin: 0 }}>{causa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flechas hacia abajo a causas raíz */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
                gap: '32px'
              }}>
                {arbolActual.causasRaiz.slice(0, 4).map((_, idx) => (
                  <span key={idx} style={{ fontSize: '24px', color: '#059669' }}>↓</span>
                ))}
              </div>

              {/* CAUSAS RAÍZ */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '28px' }}>🌱</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#065f46', margin: 0 }}>CAUSAS RAÍZ</h3>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '16px'
                }}>
                  {arbolActual.causasRaiz.map((causa, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                        border: '2px solid #34d399',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          background: '#047857',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          R{idx + 1}
                        </div>
                        <p style={{ color: '#1f2937', fontWeight: '500', lineHeight: '1.5', margin: 0 }}>{causa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content - Árbol de Objetivos */}
        {activeTab === 'objetivos' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Selector de ejemplo */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              border: '2px solid #a7f3d0'
            }}>
              <h3 style={{ fontWeight: 'bold', color: '#065f46', marginBottom: '12px' }}>Selecciona un ejemplo:</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {arbolesEjemplo.map((arbol, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTreeExample(idx)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: selectedTreeExample === idx 
                        ? 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' 
                        : '#f3f4f6',
                      color: selectedTreeExample === idx ? 'white' : '#374151',
                      transform: selectedTreeExample === idx ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: selectedTreeExample === idx ? '0 4px 12px rgba(5, 150, 105, 0.3)' : 'none'
                    }}
                  >
                    {arbol.titulo}
                  </button>
                ))}
              </div>
            </div>

            {/* Guía de Transformación */}
            <div style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #d1fae5 100%)',
              borderRadius: '12px',
              padding: '24px',
              border: '2px solid #7dd3fc'
            }}>
              <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: '#075985', marginBottom: '16px', fontSize: '20px' }}>
                🔄 Cómo Transformar Problemas en Objetivos
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '16px'
              }}>
                {ejemplosTransformacion.map((ej, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '2px solid #bae6fd'
                  }}>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#991b1b', marginBottom: '4px' }}>
                        ❌ PROBLEMA:
                      </div>
                      <div style={{ color: '#7f1d1d', fontSize: '14px', fontWeight: '500' }}>
                        {ej.problema}
                      </div>
                    </div>
                    <div style={{ fontSize: '20px', textAlign: 'center', margin: '8px 0', color: '#0284c7' }}>
                      ⬇️
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#166534', marginBottom: '4px' }}>
                        ✅ OBJETIVO:
                      </div>
                      <div style={{ color: '#14532d', fontSize: '14px', fontWeight: '500' }}>
                        {ej.objetivo}
                      </div>
                    </div>
                    <div style={{
                      marginTop: '12px',
                      padding: '8px',
                      background: '#f0f9ff',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#075985',
                      fontStyle: 'italic'
                    }}>
                      💡 {ej.explicacion}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estructura del Árbol de Objetivos */}
            <div style={{
              background: 'linear-gradient(135deg, #dcfce7 0%, #dbeafe 50%, #fef3c7 100%)',
              borderRadius: '12px',
              padding: '24px',
              border: '2px solid #4ade80'
            }}>
              <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: '#166534', marginBottom: '16px', fontSize: '20px' }}>
                📊 Estructura del Árbol de Objetivos
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                textAlign: 'center'
              }}>
                <div style={{
                  background: '#dcfce7',
                  border: '2px solid #4ade80',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>⬆️</div>
                  <p style={{ fontWeight: 'bold', color: '#166534', margin: '4px 0' }}>FINES</p>
                  <p style={{ fontSize: '12px', color: '#14532d', margin: 0 }}>Resultados positivos deseados</p>
                </div>
                <div style={{
                  background: '#dbeafe',
                  border: '2px solid #60a5fa',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
                  <p style={{ fontWeight: 'bold', color: '#1e40af', margin: '4px 0' }}>OBJETIVO CENTRAL</p>
                  <p style={{ fontSize: '12px', color: '#1e3a8a', margin: 0 }}>Situación positiva deseada</p>
                </div>
                <div style={{
                  background: '#fef3c7',
                  border: '2px solid #fbbf24',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>⬇️</div>
                  <p style={{ fontWeight: 'bold', color: '#92400e', margin: '4px 0' }}>MEDIOS</p>
                  <p style={{ fontSize: '12px', color: '#78350f', margin: 0 }}>Acciones para lograr el objetivo</p>
                </div>
              </div>
            </div>

            {/* Visualización del Árbol de Objetivos */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              border: '2px solid #6ee7b7'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#065f46',
                marginBottom: '32px'
              }}>
                🎯 {arbolActual.titulo} - Árbol de Objetivos
              </h2>

              {/* FINES */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '28px' }}>⬆️</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', margin: 0 }}>FINES</h3>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px'
                }}>
                  {arbolActual.fines.map((fin, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'linear-gradient(135deg, #dcfce7 0%, #a7f3d0 100%)',
                        border: '2px solid #4ade80',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          background: '#16a34a',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          F{idx + 1}
                        </div>
                        <p style={{ color: '#1f2937', fontWeight: '500', lineHeight: '1.5', margin: 0 }}>{fin}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flechas hacia arriba */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
                gap: '48px'
              }}>
                {arbolActual.fines.map((_, idx) => (
                  <span key={idx} style={{ fontSize: '32px', color: '#4ade80' }}>↑</span>
                ))}
              </div>

              {/* OBJETIVO CENTRAL */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                    border: '4px solid #2563eb',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <span style={{ fontSize: '32px' }}>🎯</span>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                        OBJETIVO CENTRAL
                      </h3>
                    </div>
                    <p style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {arbolActual.objetivoCentral}
                    </p>
                  </div>
                </div>
              </div>

              {/* Flechas hacia abajo */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
                gap: '48px'
              }}>
                {arbolActual.mediosDirectos.map((_, idx) => (
                  <span key={idx} style={{ fontSize: '32px', color: '#fbbf24' }}>↓</span>
                ))}
              </div>

              {/* MEDIOS DIRECTOS */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '28px' }}>⬇️</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#92400e', margin: 0 }}>MEDIOS DIRECTOS</h3>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '16px'
                }}>
                  {arbolActual.mediosDirectos.map((medio, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                        border: '2px solid #fbbf24',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          background: '#d97706',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          M{idx + 1}
                        </div>
                        <p style={{ color: '#1f2937', fontWeight: '500', lineHeight: '1.5', margin: 0 }}>{medio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flechas hacia abajo a medios raíz */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '16px',
                gap: '32px'
              }}>
                {arbolActual.mediosRaiz.slice(0, 4).map((_, idx) => (
                  <span key={idx} style={{ fontSize: '24px', color: '#f59e0b' }}>↓</span>
                ))}
              </div>

              {/* MEDIOS RAÍZ */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '28px' }}>🌟</span>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ea580c', margin: 0 }}>MEDIOS RAÍZ</h3>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '16px'
                }}>
                  {arbolActual.mediosRaiz.map((medio, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                        border: '2px solid #fb923c',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <div style={{
                          flexShrink: 0,
                          width: '24px',
                          height: '24px',
                          background: '#ea580c',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          R{idx + 1}
                        </div>
                        <p style={{ color: '#1f2937', fontWeight: '500', lineHeight: '1.5', margin: 0 }}>{medio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Explicación */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              padding: '24px',
              border: '2px solid #bae6fd'
            }}>
              <h3 style={{
                fontWeight: 'bold',
                color: '#075985',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '24px' }}>💡</span>
                Cómo leer el árbol de objetivos
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#374151' }}>
                <p style={{ margin: 0 }}>
                  <span style={{ fontWeight: 'bold', color: '#166534' }}>Los FINES</span> son los resultados 
                  positivos que se alcanzarán al lograr el objetivo central. Se ubican arriba.
                </p>
                <p style={{ margin: 0 }}>
                  <span style={{ fontWeight: 'bold', color: '#1e40af' }}>El OBJETIVO CENTRAL</span> es la situación 
                  positiva deseada que queremos alcanzar (transformación del problema).
                </p>
                <p style={{ margin: 0 }}>
                  <span style={{ fontWeight: 'bold', color: '#92400e' }}>Los MEDIOS DIRECTOS</span> son las acciones 
                  o condiciones inmediatas necesarias para lograr el objetivo.
                </p>
                <p style={{ margin: 0 }}>
                  <span style={{ fontWeight: 'bold', color: '#ea580c' }}>Los MEDIOS RAÍZ</span> son las acciones 
                  fundamentales sobre las que se construyen los medios directos.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Feedback Modal */}
        {showFeedback && selectedExample && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            zIndex: 50
          }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #f97316 100%)',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '32px' }}>❌</span>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', margin: 0 }}>
                    ¿Por qué es incorrecto?
                  </h3>
                </div>
                <button
                  onClick={resetSelection}
                  style={{
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  ✕
                </button>
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{
                  background: '#fef2f2',
                  border: '2px solid #fca5a5',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>❌</span>
                    <div>
                      <p style={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: '#991b1b',
                        textTransform: 'uppercase',
                        marginBottom: '4px'
                      }}>
                        Formulación Incorrecta
                      </p>
                      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#7f1d1d', margin: 0 }}>
                        "{selectedExample.incorrecto}"
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: '#fffbeb',
                  border: '2px solid #fde68a',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>⚠️</span>
                    <div>
                      <p style={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: '#92400e',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                      }}>
                        Explicación
                      </p>
                      <p style={{ color: '#1f2937', lineHeight: '1.6', margin: 0 }}>
                        {selectedExample.explicacion}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: '#eff6ff',
                  border: '2px solid #93c5fd',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: '#1e40af',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    Recomendación Violada
                  </p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      background: '#2563eb',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}>
                      {selectedExample.recomendacionViolada}
                    </div>
                    <p style={{ color: '#1f2937', lineHeight: '1.6', paddingTop: '8px', margin: 0 }}>
                      {recomendaciones[selectedExample.recomendacionViolada - 1].texto}
                    </p>
                  </div>
                </div>

                <div style={{
                  background: '#f0fdf4',
                  border: '2px solid #86efac',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>✅</span>
                    <div>
                      <p style={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: '#166534',
                        textTransform: 'uppercase',
                        marginBottom: '4px'
                      }}>
                        Formulación Correcta
                      </p>
                      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#14532d', margin: 0 }}>
                        "{selectedExample.correcto}"
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={resetSelection}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '16px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(5, 150, 105, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Entendido, continuar aprendiendo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

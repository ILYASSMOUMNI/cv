import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[Portfolio Error]', error, info);
  }

  render() {
    if (this.state.error) {
      const err = this.state.error as Error;
      return (
        <div style={{
          minHeight: '100vh', background: '#030712', color: '#f8fafc',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '2rem', fontFamily: 'monospace'
        }}>
          <h1 style={{ color: '#f87171', marginBottom: '1rem' }}>⚠ Render Error</h1>
          <pre style={{
            background: '#0f172a', padding: '1.5rem', borderRadius: '8px',
            border: '1px solid #1e293b', maxWidth: '800px', overflow: 'auto',
            color: '#fca5a5', fontSize: '0.875rem'
          }}>
            {err.message}
            {'\n\n'}
            {err.stack}
          </pre>
          <p style={{ color: '#64748b', marginTop: '1rem', fontSize: '0.875rem' }}>
            Open DevTools (F12) → Console for more details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

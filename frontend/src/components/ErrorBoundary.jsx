import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Catches render errors in child tree and shows a calm recovery UI instead of a blank screen.
 */
export class ErrorBoundary extends React.Component {
  /** @param {{ children: React.ReactNode }} props */
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /** @param {Error} error */
  componentDidCatch(error, info) {
    console.error('App error boundary:', error, info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center bg-heaven-cream px-6 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heaven-rose">Love From Heaven</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-heaven-cocoa">Something went wrong</h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-heaven-cocoa/70">
            Please refresh the page. If the problem continues, try again later or reach us through the contact page.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-heaven-cocoa px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-heaven-cocoa/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
              onClick={() => window.location.reload()}
            >
              Reload page
            </button>
            <Link
              to="/contact"
              className="text-sm font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40"
            >
              Contact
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

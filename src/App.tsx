import { TimelineProvider } from './contexts/TimelineContext';
import { AppContent } from './AppContent';

export default function App() {
  return (
    <TimelineProvider>
      <AppContent />
    </TimelineProvider>
  );
}

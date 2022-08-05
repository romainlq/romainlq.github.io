
import './App.css'
import { AppShell } from '@mantine/core'
import HeaderBar from '@/components/Headerbar';
import { Route, Switch } from 'wouter';
import { ROUTES } from '@/routes';
import NotFound from '@/routes/notfound/NotFound';

function App() {

  return (
    <AppShell
      padding="md"
      header={<HeaderBar />}
    >
      <Switch>
        <>
          {Object.entries(ROUTES).map(([routeName, route]) => (
            <Route
              key={routeName}
              path={route.path}
              component={route.component}
            />
          ))}
        </>
        <Route component={NotFound} />
      </Switch>

    </AppShell>
  );
}

export default App

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';

import defaultTheme from './styles/themes/default';
import { Page } from './components/Page';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  );
}

export default App;

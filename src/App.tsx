import { ThemeContext, ThemeType } from './components/theme/Theme';
import { Title, Text } from './styles/components.base';
import { Fill } from './styles/components.layout';
import { Radio } from './components/radio/Radio';

function App() {
  const modeText = (mode: ThemeType): string => {
    switch(mode) {
      case 'auto':
        return 'Toggle light/dark mode in your OS';
      case 'light':
        return 'Force light mode';
      case 'dark':
        return 'Force dark mode';
    }
  } 
  return (
    <Fill>
      <ThemeContext.Consumer>
        {({ themeType, theme, setTheme }) => (
          <section>
            <Title>
              Themes
            </Title>
            <Text>{modeText(themeType)}</Text>
            <Radio name="mode" 
              label="Auto" 
              value="auto" autoFocus
              checked={themeType === 'auto'}
              onChange={() => setTheme('auto')} /> 
            <Radio name="mode" 
              label="Light" 
              value="light" 
              background={theme.colors.light}
              checked={themeType === 'light'}
              onChange={() => setTheme('light')} />
            <Radio name="mode" 
              label="Dark" 
              value="dark" 
              background={theme.colors.dark}
              checked={themeType === 'dark'}
              onChange={() => setTheme('dark')} />
          </section>
        )}
      </ThemeContext.Consumer>   
    </Fill>
  );
}

export default App;

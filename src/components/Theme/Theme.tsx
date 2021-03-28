import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

console.log(theme);
const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;

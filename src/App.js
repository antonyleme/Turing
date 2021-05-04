import Header from './components/Header'
import Featured from './components/Featured'
import Offers from './components/Offers'
import GlobalStyle from './styles/global'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Offers />
      <Featured />
    </div>
  );
}

export default App;

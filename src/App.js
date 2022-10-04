import { Route } from 'react-router-dom'
import MainHeader from './Components/MainHeader';
import ProductDetail from './Components/ProductDetail';
import Products from './Components/Products';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/products/:productId'>
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;

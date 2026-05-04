import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

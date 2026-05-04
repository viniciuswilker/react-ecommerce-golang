import { RefreshCcw, Sparkles } from "lucide-react";

export function LoadingState() {
  return (
    <div className="empty-state" aria-live="polite">
      <Sparkles className="loading-spin" />
      <h3>Carregando produtos...</h3>
      <p>Estamos buscando o catálogo no JSON Server.</p>
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="empty-state" role="alert">
      <RefreshCcw />
      <h3>Não foi possível carregar os produtos</h3>
      <p>{message}</p>
      <button className="ghost-button" type="button" onClick={onRetry}>
        Tentar novamente
      </button>
    </div>
  );
}

export function Toast({ message }: { message: string }) {
  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  );
}

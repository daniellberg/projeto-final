import { useApp } from '../hooks'

export function PublicPage () {
  const app = useApp()
  return (
    <>
      <p>
        Eu sou uma página pública
      </p>
      <div>
        {app.session ?
          (
            <>
              <small>
                Você está logado como <strong>{app.session?.username}</strong>
              </small>
              <button onClick={app.auth.signOut}>Sair Fora do Rolê</button>
            </>
          ) : (
            <small>
              Você não está logado
            </small>
          )
        }
      </div>
    </>
  )
}

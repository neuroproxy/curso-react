import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const format = (userName) => `@${userName}`

  const users = [
    {
      userName: 'lcarlos_cl',
      name: 'Carlos Castro',
      isFollowing: true
    },
    {
      userName: 'jovak_cl',
      name: 'Jacar Castro',
      isFollowing: false
    },
    {
      name: 'Naijo Castro',
      isFollowing: false
    },
    {
      userName: 'ljaina_cl',
      name: 'Jaiha Castro',
      isFollowing: false
    },
  ]

  return(
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              formatUserName={format}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}




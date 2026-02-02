import { Link } from "../Link.jsx"

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description : 'Hola!, me llamo cijei y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'Hi! My name is cijei and Im creating a React Router clone.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {

  const i18n = useI18n(routeParams.lang ?? 'es')

  return(
    <>
      <h1>{i18n.title}</h1>
      <div>
        <p>{i18n.description}</p>
        <img src="https://pbs.twimg.com/profile_images/1665399908482859011/cdJfH0Kp_400x400.jpg" alt="foto de cijei" />
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
